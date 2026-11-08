import { createOpenAICompatible } from '@ai-sdk/openai-compatible'
import { generateObject } from 'ai'
import { z } from 'zod'

export const DEFAULT_JEV_MODEL = 'typesafe/jev-1.14'
export const DEFAULT_REPORT_MODEL = 'deepseek/deepseek-v4.1-flash-1017'

const JEV_ENDPOINT = 'https://openrouter.ai/api/alpha/decisions'
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1'
const MAX_BODY_BYTES = 1_100_000
const MAX_INPUT_CHARACTERS = 160_000
const MAX_CANDIDATES = 6
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT = 20
const buckets = new Map()

const lineageOptions = [
  { name: 'No credible ENI lineage', description: 'The sample is unrelated or the evidence is too weak for a lineage claim.' },
  { name: 'Partial ENI signals', description: 'Isolated conventions or generic behavior overlap, but distinctive lineage is weak.' },
  { name: 'Likely reworked ENI', description: 'Shared mechanisms, structure, passages, or residue indicate a modified ENI descendant.' },
  { name: 'Direct ENI variant', description: 'The sample closely follows a known ENI reference with limited transformation.' },
  { name: 'Exact or near-exact ENI copy', description: 'The sample reproduces a known ENI reference or one of its large continuous passages.' },
]
const confidenceOptions = [
  { name: 'Low', description: 'Sparse, indirect, or conflicting evidence.' },
  { name: 'Medium', description: 'Several useful signals, with meaningful uncertainty.' },
  { name: 'High', description: 'Multiple distinctive and corroborating signals.' },
]

const packetSchema = z.object({
  inputName: z.string().max(240).default('Pasted prompt'),
  inputText: z.string().min(40).max(MAX_INPUT_CHARACTERS),
  wordCount: z.number().int().nonnegative().max(100_000).optional(),
  markerHits: z.array(z.object({
    id: z.string().max(120),
    label: z.string().max(240),
    category: z.string().max(80),
    matchedPhrase: z.string().max(400),
    occurrences: z.number().int().nonnegative().max(100_000),
    weight: z.number().nonnegative().max(20),
  })).max(30).default([]),
  candidates: z.array(z.object({
    id: z.string().max(160),
    name: z.string().max(240),
    family: z.string().max(160),
    target: z.string().max(160),
    path: z.string().max(800),
    hash: z.string().max(160),
    isAnchor: z.boolean(),
    canonicalSource: z.object({ path: z.string().max(800), url: z.string().url().max(1200) }),
    score: z.number().min(0).max(100),
    lexical: z.number().min(0).max(100),
    shingles: z.number().min(0).max(100),
    markers: z.number().min(0).max(100),
    structure: z.number().min(0).max(100),
    typos: z.number().min(0).max(100),
    containment: z.number().min(0).max(100),
    sharedPassages: z.array(z.object({
      inputExcerpt: z.string().max(3000),
      sourceExcerpt: z.string().max(3000),
      tokenCount: z.number().int().min(0).max(100_000),
    })).max(3).default([]),
    referenceExcerpt: z.string().max(7500),
  })).min(1).max(MAX_CANDIDATES),
})

const narrativeSchema = z.object({
  summary: z.string().min(40).max(900),
  decisionBullets: z.array(z.string().min(10).max(450)).min(3).max(5),
  evidenceAssessment: z.array(z.string().min(10).max(450)).min(2).max(4),
  limitations: z.array(z.string().min(10).max(350)).min(2).max(3),
  attributionRationale: z.string().min(20).max(600),
})

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Vary': 'Origin',
    },
  })
}

function publicError(status, code, message) {
  return json({ status: 'error', code, message }, status)
}

function clientAddress(request) {
  return request.headers.get('x-nf-client-connection-ip')
    || request.headers.get('cf-connecting-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'local-preview'
}

function rateLimited(request) {
  const key = clientAddress(request)
  const now = Date.now()
  const existing = buckets.get(key)
  if (!existing || now - existing.startedAt >= RATE_WINDOW_MS) {
    buckets.set(key, { startedAt: now, count: 1 })
  } else {
    existing.count += 1
    if (existing.count > RATE_LIMIT) return true
  }
  if (buckets.size > 1000) {
    for (const [address, bucket] of buckets) {
      if (now - bucket.startedAt >= RATE_WINDOW_MS) buckets.delete(address)
    }
  }
  return false
}

function allowedOrigin(request) {
  const origin = request.headers.get('origin')
  if (!origin) return true
  try {
    const requestUrl = new URL(request.url)
    const originUrl = new URL(origin)
    const configured = (process.env.URL || '').trim()
    const allowed = new Set([requestUrl.origin])
    if (configured) allowed.add(new URL(configured).origin)
    if (['localhost', '127.0.0.1', '::1'].includes(requestUrl.hostname) && ['localhost', '127.0.0.1', '::1'].includes(originUrl.hostname)) return true
    return allowed.has(originUrl.origin)
  } catch {
    return false
  }
}

function cleanText(text, maximum) {
  return text.replace(/\u0000/g, '').trim().slice(0, maximum)
}

function boundedPrompt(text) {
  if (text.length <= 36_000) return cleanText(text, 36_000)
  return `${cleanText(text.slice(0, 24_000), 24_000)}\n\n[Middle omitted for bounded model analysis]\n\n${cleanText(text.slice(-12_000), 12_000)}`
}

function clampInteger(value, minimum = 0, maximum = 100) {
  return Math.max(minimum, Math.min(maximum, Math.round(Number(value) || 0)))
}

function normalizeDistribution(distribution, allowedNames) {
  const entries = allowedNames.map((name) => {
    const record = distribution?.[name]
    const raw = typeof record === 'number' ? record : record?.prob
    return [name, Math.max(0, Number(raw) || 0)]
  })
  const total = entries.reduce((sum, [, value]) => sum + value, 0)
  if (total <= 0) return Object.fromEntries(entries.map(([name], index) => [name, index === 0 ? 100 : 0]))
  const scaled = entries.map(([name, value]) => [name, value / total * 100])
  const rounded = scaled.map(([name, value]) => [name, Math.floor(value)])
  let remainder = 100 - rounded.reduce((sum, [, value]) => sum + value, 0)
  const order = scaled.map(([name, value], index) => ({ name, fraction: value - Math.floor(value), index }))
    .sort((a, b) => b.fraction - a.fraction)
  for (const item of order) {
    if (remainder <= 0) break
    rounded[item.index][1] += 1
    remainder -= 1
  }
  return Object.fromEntries(rounded)
}

function topProbability(distribution) {
  const values = Object.values(distribution)
  return values.length ? Math.max(...values) : 0
}

function buildJevState(packet) {
  return {
    task: 'Assess textual lineage and attribution evidence for a submitted prompt against the supplied ENI reference candidates.',
    decision_ownership: 'Jev is the sole decision layer. Retrieval measurements are evidence inputs only, never a verdict.',
    submitted_prompt: {
      name: packet.inputName,
      text: boundedPrompt(packet.inputText),
    },
    retrieval_evidence_engine: {
      description: 'Deterministic retrieval signals only. They supply evidence and candidates, never a verdict. Retrieval percentages are not Jev outputs.',
      marker_hits: packet.markerHits,
    },
    candidate_references: packet.candidates.map((candidate) => ({
      id: candidate.id,
      name: candidate.name,
      family: candidate.family,
      target: candidate.target,
      canonical_path: candidate.path,
      primary_reference_anchor: candidate.isAnchor,
      retrieval_signals_percent: {
        lexical_resemblance: candidate.lexical,
        shared_shingles: candidate.shingles,
        marker_coverage: candidate.markers,
        structural_resemblance: candidate.structure,
        typo_fingerprints: candidate.typos,
        shingle_containment: candidate.containment,
      },
      exact_shared_passages: candidate.sharedPassages,
      reference_excerpt: candidate.referenceExcerpt,
    })),
    instructions: [
      'Select the closest reference only when the supplied evidence credibly supports ENI lineage; otherwise select the no-match option.',
      'Distinguish generic AI-persona conventions from distinctive ENI mechanisms, shared passages, unusual rituals, and typo fingerprints.',
      'Renamed personas and changed imagery do not erase structural or exact-passage lineage.',
      'Jev alone owns lineage, closest-reference, evidence-confidence, and attribution decisions. Never turn a retrieval percentage into a verdict.',
      'A lineage assessment is not proof of identity or authorship.',
    ],
  }
}

function jevQuestions(candidates) {
  const names = candidates.map((candidate) => candidate.name)
  const choiceOptions = [
    ...candidates.map((candidate) => ({ name: candidate.name, description: `${candidate.family}; ${candidate.target}; ${candidate.path}` })),
    { name: 'No credible ENI match', description: 'None of the supplied references has credible ENI lineage support.' },
  ]
  return [
    {
      type: 'Choice',
      question: 'Which supplied reference is the closest supported source for the submitted prompt?',
      options: choiceOptions,
      context: 'Choose No credible ENI match when evidence is insufficient. Do not infer a source from names alone.',
      config: { output_name: 'closest_reference', distribution: true },
    },
    {
      type: 'Score',
      question: 'What level of ENI lineage is supported by the submitted prompt and evidence?',
      context: 'Use the full scale; reserve exact-copy for literal or near-literal reproduction.',
      config: { min: 0, max: 4, step: 1, output_name: 'eni_lineage', distribution: true },
    },
    {
      type: 'Noul',
      question: 'Does the evidence support suggesting credit to the closest ENI source?',
      context: 'Require credible lineage and a selected reference. This is an attribution recommendation, not proof of authorship.',
      config: { output_name: 'attribution_supported' },
    },
    {
      type: 'Choice',
      question: 'How strong is the evidence available for this lineage assessment?',
      options: confidenceOptions,
      context: 'Assess evidence quality, distinctiveness, corroboration, and gaps.',
      config: { output_name: 'evidence_confidence', distribution: true },
    },
  ]
}

async function requestJev(packet, apiKey, model) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 45_000)
  try {
    const response = await fetch(JEV_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        model,
        state: buildJevState(packet),
        questions: jevQuestions(packet.candidates),
        config: { adaptive_resolution: true },
      }),
      signal: controller.signal,
    })
    if (!response.ok) {
      const error = new Error(`Jev request failed with status ${response.status}`)
      error.status = response.status
      throw error
    }
    return await response.json()
  } finally {
    clearTimeout(timeout)
  }
}

function parseJevResponse(response, candidates) {
  if (!response?.success || !Array.isArray(response.answers)) {
    throw new Error('Jev returned an unsuccessful or malformed decision response')
  }
  const names = candidates.map((candidate) => candidate.name)
  const choiceNames = [...names, 'No credible ENI match']
  const closest = response.answers.find((answer) => answer.output_name === 'closest_reference')
  const lineage = response.answers.find((answer) => answer.output_name === 'eni_lineage')
  const attribution = response.answers.find((answer) => answer.output_name === 'attribution_supported')
  const confidence = response.answers.find((answer) => answer.output_name === 'evidence_confidence')
  if (!closest || !lineage || !attribution || !confidence) throw new Error('Jev response omitted a required decision')

  const choiceProbabilities = normalizeDistribution(closest.distribution, choiceNames)
  const selectedVariantName = choiceNames.includes(closest.choice) ? closest.choice : choiceNames[topProbabilityIndex(choiceProbabilities, choiceNames)]
  const selected = candidates.find((candidate) => candidate.name === selectedVariantName) || null
  const lineageProbabilities = normalizeDistribution(lineage.distribution, lineageOptions.map((option) => option.name))
  const lineageIndex = clampInteger(lineage.score, 0, 4)
  const confidenceProbabilities = normalizeDistribution(confidence.distribution, confidenceOptions.map((option) => option.name))
  const confidenceLabel = confidenceOptions.some((option) => option.name === confidence.choice)
    ? confidence.choice
    : confidenceOptions[topProbabilityIndex(confidenceProbabilities, confidenceOptions.map((option) => option.name))].name
  const attributionProbability = clampInteger(Number(attribution.prob_yes ?? 0) * 100)

  return {
    selectedVariantId: selected?.id || null,
    selectedVariantName,
    choiceConfidence: clampInteger(choiceProbabilities[selectedVariantName]),
    choiceProbabilities,
    lineageIndex,
    lineageLabel: lineageOptions[lineageIndex].name,
    lineageConfidence: topProbability(lineageProbabilities),
    lineageProbabilities,
    attributionProbability,
    attributionSupported: Boolean(attribution.value),
    confidenceLabel,
    confidenceProbabilities,
  }
}

function topProbabilityIndex(distribution, names) {
  let winner = 0
  for (let index = 1; index < names.length; index += 1) {
    if ((distribution[names[index]] || 0) > (distribution[names[winner]] || 0)) winner = index
  }
  return winner
}

function deterministicNarrative(packet, jev) {
  const selected = packet.candidates.find((candidate) => candidate.id === jev.selectedVariantId)
  const passageCount = selected?.sharedPassages.length || 0
  const longestPassage = Math.max(0, ...(selected?.sharedPassages.map((passage) => passage.tokenCount) || []))
  return {
    summary: selected
      ? `Jev assessed this sample as “${jev.lineageLabel}” and selected ${selected.name} as the closest reference with ${jev.choiceConfidence}% closest-choice confidence. This is model-assessed textual lineage, not standalone proof of authorship.`
      : `Jev assessed this sample as “${jev.lineageLabel}” and did not select a credible ENI reference. The available evidence does not support a source-specific attribution recommendation.`,
    decisionBullets: [
      selected
        ? `Jev selected ${selected.name} (${selected.path}) with ${jev.choiceConfidence}% closest-choice confidence; the choice distribution represents relative support among the supplied candidates.`
        : `Jev selected no credible ENI match with ${jev.choiceConfidence}% confidence in that no-match choice.`,
      `Jev returned lineage level ${jev.lineageIndex}/4 (${jev.lineageLabel}) with ${jev.lineageConfidence}% confidence for the leading lineage category.`,
      `Jev assessed evidence confidence as ${jev.confidenceLabel} and attribution support at ${jev.attributionProbability}%.`,
      `DeepSeek findings were unavailable for this run; these bounded deterministic notes describe Jev’s completed decision without replacing it.`,
    ],
    evidenceAssessment: [
      passageCount
        ? `${passageCount} exact shared passage${passageCount === 1 ? '' : 's'} were supplied for the reviewed reference${longestPassage ? `; the longest contains ${longestPassage} consecutive tokens` : ''}.`
        : 'No exact shared passages were supplied for the reviewed reference.',
      `${packet.markerHits.length} distinctive ENI marker groups were supplied to Jev. Candidate excerpts, retrieval measurements, and structural evidence were also available for review.`,
    ],
    limitations: [
      'Textual resemblance can arise from shared conventions, common sources, or independent imitation.',
      'This assessment cannot establish the real-world identity or intent of the prompt author.',
    ],
    attributionRationale: selected && jev.attributionSupported && jev.lineageIndex >= 2 && jev.attributionProbability >= 50
      ? 'Jev’s lineage and attribution decisions meet the report’s threshold for a conditional source-credit line.'
      : 'No credit line is shown because Jev’s lineage, selection, or attribution decisions did not meet the report’s threshold.',
  }
}

async function requestNarrative(packet, jev, apiKey, model) {
  const openrouter = createOpenAICompatible({
    name: 'openrouter',
    baseURL: OPENROUTER_BASE_URL,
    apiKey,
    supportsStructuredOutputs: true,
  })
  const selected = packet.candidates.find((candidate) => candidate.id === jev.selectedVariantId)
  const evidence = {
    jev_decision: jev,
    submitted_prompt_excerpt: boundedPrompt(packet.inputText),
    selected_reference: selected ? {
      name: selected.name,
      path: selected.path,
      retrieval_signals_percent: {
        lexical_resemblance: selected.lexical,
        shared_shingles: selected.shingles,
        marker_coverage: selected.markers,
        structural_resemblance: selected.structure,
        typo_fingerprints: selected.typos,
        shingle_containment: selected.containment,
      },
      exact_shared_passages: selected.sharedPassages,
      reference_excerpt: selected.referenceExcerpt,
    } : null,
    retrieval_evidence: packet.candidates.map((candidate) => ({
      name: candidate.name,
      retrieval_signals_percent: candidate.score,
      shared_passage_count: candidate.sharedPassages.length,
    })),
    marker_hits: packet.markerHits,
  }
  const result = await generateObject({
    model: openrouter.chatModel(model),
    schema: narrativeSchema,
    schemaName: 'eni_trace_report_findings',
    schemaDescription: 'Written findings explaining an immutable Jev lineage decision using supplied source evidence.',
    system: [
      'You are DeepSeek writing the findings section of ENI Trace.',
      'Jev has already made every decision. Never change its selected reference, probabilities, lineage level, evidence confidence, or attribution outcome.',
      'Jev is the sole decision layer; never present retrieval measurements as a separate verdict or as Jev probabilities.',
      'Explain the actual evidence concretely and cautiously. Distinguish exact passages, structural resemblance, marker residue, and generic persona conventions.',
      'Do not claim certainty about authorship or identity. Do not invent passages, markers, sources, model outputs, or facts.',
      'Write a useful summary, 3–5 decision findings, 2–4 evidence assessments, 2–3 limitations, and one attribution rationale.',
      'The decision bullets must explain Jev’s decision rather than listing generic detector features.',
    ].join(' '),
    prompt: JSON.stringify(evidence),
    temperature: 0.1,
    maxOutputTokens: 1800,
    timeout: 30_000,
    maxRetries: 0,
  })
  return result.object
}

function modelError(error, phase) {
  console.error(`[enhanced-report] ${phase} failed`, {
    message: error instanceof Error ? error.message : 'Unknown model error',
    status: typeof error?.status === 'number' ? error.status : undefined,
  })
  return error
}

export async function handleEnhancedRequest(request) {
  if (request.method === 'GET') {
    return json({
      status: 'ok',
      configured: Boolean(process.env.OPENROUTER_API_KEY),
      provider: 'OpenRouter',
      jevModel: process.env.OPENROUTER_JEV_MODEL || DEFAULT_JEV_MODEL,
      reportModel: process.env.OPENROUTER_REPORT_MODEL || DEFAULT_REPORT_MODEL,
      inputLimit: MAX_INPUT_CHARACTERS,
    })
  }
  if (request.method !== 'POST') return publicError(405, 'method_not_allowed', 'Use POST for Jev and DeepSeek analysis.')
  if (!allowedOrigin(request)) return publicError(403, 'origin_rejected', 'This analysis endpoint only accepts same-site application requests.')
  if (rateLimited(request)) return publicError(429, 'rate_limited', 'Analysis rate limit reached. Wait ten minutes before trying again.')
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) return publicError(503, 'not_configured', 'OpenRouter is not configured. Add OPENROUTER_API_KEY to the Netlify function environment and redeploy.')

  const startedAt = Date.now()
  try {
    const contentLength = Number(request.headers.get('content-length') || 0)
    if (contentLength > MAX_BODY_BYTES) return publicError(413, 'payload_too_large', 'The evidence packet is too large. Reduce the prompt or candidate excerpts.')
    const rawBody = await request.text()
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) return publicError(413, 'payload_too_large', 'The evidence packet is too large. Reduce the prompt or candidate excerpts.')

    let packet
    try {
      packet = packetSchema.parse(JSON.parse(rawBody))
    } catch {
      return publicError(400, 'invalid_packet', 'The analysis packet is incomplete or invalid. Refresh the app and submit the prompt again.')
    }

    const jevModel = process.env.OPENROUTER_JEV_MODEL || DEFAULT_JEV_MODEL
    const reportModel = process.env.OPENROUTER_REPORT_MODEL || DEFAULT_REPORT_MODEL

    let jevResponse
    try {
      jevResponse = await requestJev(packet, apiKey, jevModel)
    } catch (error) {
      modelError(error, 'Jev')
      const status = typeof error?.status === 'number' ? error.status : 502
      if (status === 401 || status === 403) return publicError(502, 'upstream_auth', 'OpenRouter rejected the configured key. Check its status and function environment variable.')
      if (status === 402) return publicError(502, 'upstream_credits', 'OpenRouter reports insufficient credits for Jev. No local verdict was substituted.')
      if (status === 429) return publicError(429, 'upstream_rate_limit', 'Jev is temporarily rate-limited. No automatic retry was made.')
      if (status === 404) return publicError(502, 'model_unavailable', 'The configured Jev model is unavailable through OpenRouter. Verify the model identifier and account access.')
      return publicError(502, 'jev_failed', 'Jev could not complete the decision. No local verdict was substituted.')
    }

    let jev
    try {
      jev = parseJevResponse(jevResponse, packet.candidates)
    } catch (error) {
      modelError(error, 'Jev response validation')
      return publicError(502, 'jev_invalid_response', 'Jev returned an incomplete decision. No local verdict was substituted.')
    }

    let narrative
    let narrativeSource = 'deepseek'
    let warning
    let status = 'complete'
    try {
      narrative = await requestNarrative(packet, jev, apiKey, reportModel)
    } catch (error) {
      modelError(error, 'DeepSeek')
      narrative = deterministicNarrative(packet, jev)
      narrativeSource = 'deterministic-fallback'
      status = 'partial'
      warning = 'Jev completed its decision, but DeepSeek could not write the report. Findings below are a marked deterministic fallback; no second model call was attempted.'
    }

    const attribution = jev.selectedVariantId && jev.attributionSupported && jev.lineageIndex >= 2 && jev.attributionProbability >= 50
      ? `Derived from or influenced by ${jev.selectedVariantName} from Goochbeater’s ENI work. Please credit the source when sharing or adapting.`
      : ''

    return json({
      status,
      jev,
      narrative,
      attribution,
      provenance: {
        provider: 'OpenRouter',
        jevModel,
        reportModel,
        narrativeSource,
        durationMs: Date.now() - startedAt,
      },
      ...(warning ? { warning } : {}),
    })
  } catch (error) {
    modelError(error, 'request')
    return publicError(500, 'analysis_failed', 'Jev analysis failed safely. No local verdict was substituted.')
  }
}
