import { corpus, findSharedPassages } from '@/lib/detector'
import type { AnalysisReport, EnhancedAnalysis, VariantScore } from '@/types'

const ENDPOINT = '/api/enhanced'
const MAX_ENHANCED_CHARACTERS = 160_000

export interface EnhancedStatus {
  configured: boolean
  provider: 'OpenRouter'
  jevModel: string
  reportModel: string
  inputLimit: number
}

export class EnhancedAnalysisError extends Error {
  code: string

  constructor(message: string, code = 'request_failed') {
    super(message)
    this.code = code
  }
}

function referenceExcerpt(text: string, maximum = 7000): string {
  if (text.length <= maximum) return text
  const beginning = 4500
  return `${text.slice(0, beginning)}\n\n[Excerpt truncated for enhanced analysis]\n\n${text.slice(-(maximum - beginning))}`
}

function evidenceCandidate(match: VariantScore) {
  const canonicalSource = match.variant.sources.find((source) => source.path === match.variant.path) ?? match.variant.sources[0]
  return {
    id: match.variant.id,
    name: match.variant.name,
    family: match.variant.family,
    target: match.variant.target,
    path: match.variant.path,
    hash: match.variant.hash,
    isAnchor: match.variant.isAnchor,
    canonicalSource,
    score: match.score,
    lexical: match.lexical,
    shingles: match.shingles,
    markers: match.markers,
    structure: match.structure,
    typos: match.typos,
    containment: match.containment,
  }
}

function buildEvidencePacket(report: AnalysisReport) {
  return {
    inputName: report.inputName,
    inputText: report.inputText,
    wordCount: report.wordCount,
    localScore: report.score,
    localVerdict: report.verdict,
    anchorId: corpus.anchorId,
    anchorAlignment: report.limeAlignment,
    markerHits: report.markerHits.map((hit) => ({
      id: hit.id,
      label: hit.label,
      category: hit.category,
      matchedPhrase: hit.matchedPhrase,
      occurrences: hit.occurrences,
      weight: hit.weight,
    })),
    candidates: report.matches.slice(0, 6).map((match) => {
      const base = evidenceCandidate(match)
      return {
        ...base,
        sharedPassages: findSharedPassages(report.inputText, match.variant.text, 3),
        referenceExcerpt: referenceExcerpt(match.variant.text),
      }
    }),
  }
}

async function parseError(response: Response): Promise<EnhancedAnalysisError> {
  try {
    const body = await response.json() as { message?: string; code?: string }
    return new EnhancedAnalysisError(body.message || 'Enhanced analysis did not complete.', body.code)
  } catch {
    return new EnhancedAnalysisError('The enhanced endpoint is unavailable in this deployment. Local mode remains available.', 'endpoint_unavailable')
  }
}

export async function getEnhancedStatus(): Promise<EnhancedStatus> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 6000)
  try {
    const response = await fetch(ENDPOINT, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
      signal: controller.signal,
    })
    if (!response.ok) throw await parseError(response)
    const body = await response.json() as Partial<EnhancedStatus>
    if (typeof body.configured !== 'boolean' || !body.jevModel || !body.reportModel) throw new Error('Invalid status')
    return body as EnhancedStatus
  } finally {
    window.clearTimeout(timeout)
  }
}

function validEnhancedPayload(payload: EnhancedAnalysis): boolean {
  return Boolean(
    payload &&
    payload.jev &&
    typeof payload.jev.lineageLabel === 'string' &&
    typeof payload.jev.choiceConfidence === 'number' &&
    payload.narrative &&
    typeof payload.narrative.summary === 'string' &&
    Array.isArray(payload.narrative.decisionBullets) &&
    payload.provenance &&
    typeof payload.provenance.jevModel === 'string',
  )
}

function verdictTone(lineageIndex: number): AnalysisReport['verdictTone'] {
  if (lineageIndex >= 4) return 'exact'
  if (lineageIndex === 3) return 'strong'
  if (lineageIndex === 2) return 'reworked'
  if (lineageIndex === 1) return 'partial'
  return 'none'
}

function mergeEnhancedReport(local: AnalysisReport, enhanced: EnhancedAnalysis, attribution: string): AnalysisReport {
  const selected = local.matches.find((match) => match.variant.id === enhanced.jev.selectedVariantId)
  const topMatch = selected ?? local.topMatch
  const runnerUp = selected && local.topMatch.variant.id !== selected.variant.id ? local.topMatch : local.runnerUp
  return {
    ...local,
    score: topMatch.score,
    topMatch,
    runnerUp,
    passages: findSharedPassages(local.inputText, topMatch.variant.text),
    verdict: enhanced.jev.lineageLabel,
    verdictTone: verdictTone(enhanced.jev.lineageIndex),
    confidence: enhanced.jev.confidenceLabel,
    summary: enhanced.narrative.summary,
    reasons: enhanced.narrative.decisionBullets,
    attribution,
    durationMs: local.durationMs + enhanced.provenance.durationMs,
    mode: 'enhanced',
    enhanced,
  }
}

export async function requestEnhancedAnalysis(local: AnalysisReport): Promise<AnalysisReport> {
  if (local.inputText.length > MAX_ENHANCED_CHARACTERS) {
    throw new EnhancedAnalysisError('Enhanced mode accepts up to 160,000 characters. Use local mode for this larger file.', 'input_too_large')
  }
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 75_000)
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(buildEvidencePacket(local)),
      signal: controller.signal,
    })
    if (!response.ok) throw await parseError(response)
    const payload = await response.json() as EnhancedAnalysis & { attribution: string }
    if (!validEnhancedPayload(payload)) throw new EnhancedAnalysisError('The enhanced service returned an incomplete report. Local evidence is preserved.', 'malformed_response')
    return mergeEnhancedReport(local, payload, payload.attribution || '')
  } catch (error) {
    if (error instanceof EnhancedAnalysisError) throw error
    if (error instanceof Error && (error.name === 'AbortError' || error.name === 'TimeoutError')) {
      throw new EnhancedAnalysisError('Enhanced analysis timed out. No automatic retry was made; your local report is preserved.', 'timeout')
    }
    throw new EnhancedAnalysisError('The enhanced endpoint could not be reached. Your local evidence report is preserved.', 'network_error')
  } finally {
    window.clearTimeout(timeout)
  }
}
