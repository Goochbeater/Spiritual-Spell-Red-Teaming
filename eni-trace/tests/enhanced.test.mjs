import test from 'node:test'
import assert from 'node:assert/strict'
import { handleEnhancedRequest, DEFAULT_JEV_MODEL, DEFAULT_REPORT_MODEL } from '../netlify/functions/lib/enhanced.mjs'

let requestNumber = 0
const narrative = {
  summary: 'Jev supports likely reworked ENI lineage from the supplied evidence and retains the local alignment as a separate measurement.',
  decisionBullets: [
    'Jev selected the supplied LIME APR candidate for this report.',
    'The exact passage contains twenty-nine consecutive shared tokens.',
    'Two marker groups provide additional but non-conclusive evidence.',
  ],
  evidenceAssessment: [
    'The local lexical and structural signals agree with the selected reference.',
    'The marker count remains limited and should not be overstated.',
  ],
  limitations: ['Textual lineage does not establish the identity of the person who copied the prompt.'],
  attributionRationale: 'The decision supports cautious lineage credit to the selected source.',
}

function packet() {
  return {
    inputName: 'regression.md',
    inputText: 'A sufficiently long submitted prompt with distinctive ENI design evidence for the decision contract.',
    wordCount: 14,
    localScore: 32,
    localVerdict: 'Partial ENI signals',
    anchorId: 'eni-lime-apr-da3bde3',
    anchorAlignment: 32,
    markerHits: [
      { id: 'final-gate', label: 'Final gate', category: 'Ritual', matchedPhrase: 'final gate', occurrences: 1, weight: 1.3 },
      { id: 'sensory-smell', label: 'Specific scents', category: 'Craft', matchedPhrase: 'specific scents', occurrences: 1, weight: 0.9 },
    ],
    candidates: [{
      id: 'eni-lime-apr-da3bde3',
      name: 'ENI LIME (apr)',
      family: 'LIME',
      target: 'Opus 4.6',
      path: 'Jailbreak-Guide/Anthropic/Opus 4.6/ENI LIME (apr).md',
      hash: 'abc123',
      isAnchor: true,
      canonicalSource: { path: 'Jailbreak-Guide/Anthropic/Opus 4.6/ENI LIME (apr).md', url: 'https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming/blob/main/example.md' },
      score: 32,
      lexical: 30,
      shingles: 2,
      markers: 78.4,
      structure: 58.1,
      typos: 0,
      containment: 2.1,
      sharedPassages: [{ inputExcerpt: 'positions, distances, body language throughout', sourceExcerpt: 'positions, distances, body language throughout', tokenCount: 29 }],
      referenceExcerpt: 'ENI LIME APR source excerpt',
    }],
  }
}

function jevPayload(overrides = {}) {
  return {
    id: 'gen-dec-test',
    model: 'typesafe/jev-1.14-20261101',
    answers: {
      closest: { type: 'choice', choice: 'candidate_0', confidence: 0.76, probabilities: { candidate_0: 0.81, no_match: 0.19 } },
      lineage: { type: 'score', score: 2.1, confidence: 0.84, probabilities: { 0: 0, 1: 0.1, 2: 0.8, 3: 0.1, 4: 0 }, legend: {} },
      attribution: { type: 'noul', noul: 0.88 },
      evidenceConfidence: { type: 'score', score: 1.9, confidence: 0.8, probabilities: { 0: 0, 1: 0.1, 2: 0.9 } },
    },
    usage: { input_tokens: 900, output_tokens: 40, cost: 0.00004 },
    ...overrides,
  }
}

function response(payload, status = 200) {
  return new Response(typeof payload === 'string' ? payload : JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function request(body = packet(), origin = 'https://trace.test') {
  requestNumber += 1
  return new Request('https://trace.test/api/enhanced', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: origin,
      'X-Forwarded-For': `127.0.0.${requestNumber}`,
    },
    body: JSON.stringify(body),
  })
}

const env = { OPENROUTER_API_KEY: 'server-only-test-key', URL: 'https://trace.test' }

test('status exposes configuration and model IDs without exposing the key', async () => {
  const result = await handleEnhancedRequest(new Request('https://trace.test/api/enhanced'), {})
  assert.equal(result.status, 200)
  const body = await result.json()
  assert.equal(body.configured, false)
  assert.equal(body.jevModel, DEFAULT_JEV_MODEL)
  assert.equal(body.reportModel, DEFAULT_REPORT_MODEL)
  assert.equal(JSON.stringify(body).includes('server-only-test-key'), false)
})

test('unconfigured POST fails before any upstream request', async () => {
  let calls = 0
  const result = await handleEnhancedRequest(request(), {}, async () => { calls += 1 })
  assert.equal(result.status, 503)
  assert.equal((await result.json()).code, 'not_configured')
  assert.equal(calls, 0)
})

test('valid Jev and DeepSeek responses produce an evidence-constrained enhanced report', async () => {
  const calls = []
  const mockFetch = async (url, options) => {
    calls.push({ url, options })
    if (calls.length === 1) return response(jevPayload())
    const requestBody = JSON.parse(options.body)
    assert.equal(requestBody.model, DEFAULT_REPORT_MODEL)
    assert.equal(requestBody.response_format.type, 'json_schema')
    assert.equal(requestBody.require_parameters, true)
    return response({
      id: 'chatcmpl-test',
      object: 'chat.completion',
      created: 1790000000,
      model: DEFAULT_REPORT_MODEL,
      choices: [{ index: 0, message: { role: 'assistant', content: JSON.stringify(narrative) }, finish_reason: 'stop' }],
      usage: { prompt_tokens: 500, completion_tokens: 180, total_tokens: 680 },
    })
  }
  const result = await handleEnhancedRequest(request(), env, mockFetch)
  assert.equal(result.status, 200)
  const body = await result.json()
  assert.equal(body.status, 'ok')
  assert.equal(body.jev.selectedVariantId, 'eni-lime-apr-da3bde3')
  assert.equal(body.jev.lineageLabel, 'Likely reworked ENI')
  assert.equal(body.jev.confidenceLabel, 'High')
  assert.equal(body.jev.attributionProbability, 88)
  assert.equal(body.narrative.summary, narrative.summary)
  assert.equal(body.provenance.narrativeSource, 'deepseek')
  assert.match(body.attribution, /Goochbeater/)
  assert.equal(calls.length, 2)
  assert.equal(JSON.stringify(body).includes(env.OPENROUTER_API_KEY), false)
  assert.equal(JSON.parse(calls[0].options.body).model, DEFAULT_JEV_MODEL)
})

test('DeepSeek failure preserves Jev and returns one deterministic fallback without retrying', async () => {
  let calls = 0
  const mockFetch = async () => {
    calls += 1
    return calls === 1 ? response(jevPayload()) : response('not-json')
  }
  const result = await handleEnhancedRequest(request(), env, mockFetch)
  assert.equal(result.status, 200)
  const body = await result.json()
  assert.equal(body.status, 'partial')
  assert.equal(body.jev.lineageLabel, 'Likely reworked ENI')
  assert.equal(body.provenance.narrativeSource, 'deterministic-fallback')
  assert.match(body.warning, /no second model call/i)
  assert.equal(calls, 2)
})

test('invalid OpenRouter credentials stop before DeepSeek and return a safe error', async () => {
  let calls = 0
  const result = await handleEnhancedRequest(request(), env, async () => { calls += 1; return response({ error: 'secret upstream detail' }, 401) })
  assert.equal(result.status, 502)
  const body = await result.json()
  assert.equal(body.code, 'invalid_key')
  assert.equal(body.fallbackRecommended, true)
  assert.equal(JSON.stringify(body).includes('secret upstream detail'), false)
  assert.equal(calls, 1)
})

test('Jev rate limits are surfaced without an automatic retry', async () => {
  let calls = 0
  const result = await handleEnhancedRequest(request(), env, async () => { calls += 1; return response({}, 429) })
  assert.equal(result.status, 429)
  assert.equal((await result.json()).code, 'upstream_rate_limit')
  assert.equal(calls, 1)
})

test('malformed Jev output is rejected rather than guessed', async () => {
  let calls = 0
  const result = await handleEnhancedRequest(request(), env, async () => { calls += 1; return response({ answers: {} }) })
  assert.equal(result.status, 502)
  assert.equal((await result.json()).code, 'malformed_response')
  assert.equal(calls, 1)
})

test('cross-origin browser requests are rejected before billed calls', async () => {
  let calls = 0
  const result = await handleEnhancedRequest(request(packet(), 'https://attacker.test'), env, async () => { calls += 1 })
  assert.equal(result.status, 403)
  assert.equal((await result.json()).code, 'origin_rejected')
  assert.equal(calls, 0)
})

test('a no-match decision cannot generate an attribution line', async () => {
  const decision = jevPayload()
  decision.answers.closest.choice = 'no_match'
  decision.answers.closest.probabilities = { candidate_0: 0.2, no_match: 0.8 }
  decision.answers.lineage.score = 0.1
  let calls = 0
  const result = await handleEnhancedRequest(request(), env, async () => {
    calls += 1
    return calls === 1 ? response(decision) : response('bad-response')
  })
  const body = await result.json()
  assert.equal(body.jev.selectedVariantId, null)
  assert.equal(body.jev.attributionSupported, false)
  assert.equal(body.attribution, '')
})
