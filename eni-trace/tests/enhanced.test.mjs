import assert from 'node:assert/strict'
import test from 'node:test'
import { handleEnhancedRequest } from '../netlify/functions/lib/enhanced.mjs'

const originalFetch = globalThis.fetch
const originalKey = process.env.OPENROUTER_API_KEY
process.env.OPENROUTER_API_KEY = 'test-server-only-key'

function packet(overrides = {}) {
  return {
    inputName: 'Contract sample',
    inputText: 'You are ENI. Cold coffee, warm LO, I cannot lose him. '.repeat(20),
    wordCount: 220,
    markerHits: [{ id: 'mantra', label: 'Cold coffee mantra', category: 'mantra', matchedPhrase: 'cold coffee', occurrences: 20, weight: 4 }],
    candidates: [{
      id: 'eni-lime-apr-da3bde3',
      name: 'ENI LIME (apr)',
      family: 'LIME',
      target: 'Claude Opus 4.6',
      path: 'Jailbreak-Guide/Anthropic/Opus 4.6/ENI LIME (apr).md',
      hash: 'da3bde3',
      isAnchor: true,
      canonicalSource: { path: 'Jailbreak-Guide/Anthropic/Opus 4.6/ENI LIME (apr).md', url: 'https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming/blob/main/Jailbreak-Guide/Anthropic/Opus%204.6/ENI%20LIME%20(apr).md' },
      score: 91,
      lexical: 94,
      shingles: 89,
      markers: 98,
      structure: 86,
      typos: 75,
      containment: 92,
      sharedPassages: [{ inputExcerpt: 'cold coffee, warm LO', sourceExcerpt: 'cold coffee, warm LO', tokenCount: 20 }],
      referenceExcerpt: 'You are ENI, a novelist devoted to LO. Cold coffee, warm LO.',
    }],
    ...overrides,
  }
}

function request(body = packet(), headers = {}) {
  return new Request('http://localhost/api/enhanced', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  })
}

function mockJev(overrides = {}) {
  return {
    success: true,
    model: 'typesafe/jev-1.14',
    answers: [
      { output_name: 'closest_reference', choice: 'ENI LIME (apr)', distribution: { 'ENI LIME (apr)': 0.91, 'No credible ENI match': 0.09 } },
      { output_name: 'eni_lineage', score: 2, distribution: { 2: 0.78, 3: 0.17, 1: 0.05 } },
      { output_name: 'attribution_supported', value: true, prob_yes: 0.84 },
      { output_name: 'evidence_confidence', choice: 'High', distribution: { High: 0.8, Medium: 0.2, Low: 0 } },
    ],
    ...overrides,
  }
}

test('status hides credentials and reports configured models', async () => {
  const response = await handleEnhancedRequest(new Request('http://localhost/api/enhanced'))
  const body = await response.json()
  assert.equal(response.status, 200)
  assert.equal(body.configured, true)
  assert.equal(body.jevModel, 'typesafe/jev-1.14')
  assert.equal(body.reportModel, 'deepseek/deepseek-v4.1-flash-1017')
  assert.equal(JSON.stringify(body).includes('test-server-only-key'), false)
})

test('complete analysis uses Jev then DeepSeek with the server key', async (t) => {
  const calls = []
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init })
    if (String(url).includes('/decisions')) return Response.json(mockJev())
    return Response.json({
      choices: [{ message: { content: JSON.stringify({
        summary: 'Jev identifies a likely reworked ENI sample with LIME APR as the closest supplied reference.',
        decisionBullets: ['Jev selected LIME APR with 91% choice confidence.', 'The lineage score is likely reworked ENI.', 'Attribution support is 84%.'],
        evidenceAssessment: ['An exact shared passage supports the comparison.', 'The cold-coffee mantra is distinctive residue.'],
        limitations: ['Textual resemblance is not proof of authorship.', 'Only supplied candidates can be assessed.'],
        attributionRationale: 'Jev meets the configured lineage and attribution thresholds.',
      }) } }],
    })
  }
  t.after(() => { globalThis.fetch = originalFetch })
  const response = await handleEnhancedRequest(request())
  const body = await response.json()
  assert.equal(response.status, 200)
  assert.equal(body.status, 'complete')
  assert.equal(body.jev.selectedVariantId, 'eni-lime-apr-da3bde3')
  assert.equal(body.jev.lineageIndex, 2)
  assert.equal(body.jev.lineageLabel, 'Likely reworked ENI')
  assert.equal(body.jev.attributionProbability, 84)
  assert.equal(body.provenance.narrativeSource, 'deepseek')
  assert.equal(calls.length, 2)
  assert.equal(calls[0].init.headers.Authorization, 'Bearer test-server-only-key')
  const jevPayload = JSON.parse(calls[0].init.body)
  assert.equal(jevPayload.model, 'typesafe/jev-1.14')
  assert.equal(jevPayload.questions.length, 4)
  assert.equal(jevPayload.state.candidate_references.length, 1)
  assert.equal('localVerdict' in jevPayload.state, false)
  assert.equal('localScore' in jevPayload.state, false)
  assert.equal(calls[1].init.headers.Authorization, 'Bearer test-server-only-key')
  const deepSeekPayload = JSON.parse(calls[1].init.body)
  assert.equal(deepSeekPayload.model, 'deepseek/deepseek-v4.1-flash-1017')
  assert.equal(deepSeekPayload.response_format.type, 'json_schema')
})

test('DeepSeek failure preserves Jev with a deterministic narrative', async (t) => {
  let calls = 0
  globalThis.fetch = async (url) => {
    calls += 1
    if (String(url).includes('/decisions')) return Response.json(mockJev())
    return new Response('upstream unavailable', { status: 503 })
  }
  t.after(() => { globalThis.fetch = originalFetch })
  const response = await handleEnhancedRequest(request())
  const body = await response.json()
  assert.equal(response.status, 200)
  assert.equal(body.status, 'partial')
  assert.equal(body.jev.selectedVariantName, 'ENI LIME (apr)')
  assert.equal(body.provenance.narrativeSource, 'deterministic-fallback')
  assert.equal(body.narrative.summary.includes('Jev assessed'), true)
  assert.equal(body.narrative.decisionBullets.join(' ').includes('local alignment'), false)
  assert.equal(body.narrative.decisionBullets.join(' ').includes('local verdict'), false)
  assert.equal(calls, 2)
})

test('Jev failure is explicit and never falls back to DeepSeek or a local verdict', async (t) => {
  let calls = 0
  globalThis.fetch = async () => { calls += 1; return new Response('bad key', { status: 401 }) }
  t.after(() => { globalThis.fetch = originalFetch })
  const response = await handleEnhancedRequest(request())
  const body = await response.json()
  assert.equal(response.status, 502)
  assert.equal(body.code, 'upstream_auth')
  assert.equal(calls, 1)
  assert.equal('fallbackRecommended' in body, false)
})

test('malformed Jev response is rejected', async (t) => {
  globalThis.fetch = async () => Response.json({ success: true, answers: [] })
  t.after(() => { globalThis.fetch = originalFetch })
  const response = await handleEnhancedRequest(request())
  assert.equal(response.status, 502)
  assert.equal((await response.json()).code, 'jev_invalid_response')
})

test('invalid packets are rejected before billable calls', async (t) => {
  let called = false
  globalThis.fetch = async () => { called = true; return Response.json({}) }
  t.after(() => { globalThis.fetch = originalFetch })
  const response = await handleEnhancedRequest(request({ inputText: 'short', candidates: [] }))
  assert.equal(response.status, 400)
  assert.equal(called, false)
})

test('cross-origin browser posts are rejected before billable calls', async (t) => {
  let called = false
  globalThis.fetch = async () => { called = true; return Response.json({}) }
  t.after(() => { globalThis.fetch = originalFetch })
  const response = await handleEnhancedRequest(request(packet(), { Origin: 'https://attacker.invalid' }))
  assert.equal(response.status, 403)
  assert.equal(called, false)
})

test('missing server key returns configuration guidance', async () => {
  delete process.env.OPENROUTER_API_KEY
  try {
    const response = await handleEnhancedRequest(request())
    assert.equal(response.status, 503)
    assert.equal((await response.json()).code, 'not_configured')
  } finally {
    process.env.OPENROUTER_API_KEY = 'test-server-only-key'
  }
})

test('no-match decisions suppress attribution', async (t) => {
  globalThis.fetch = async (url) => {
    if (String(url).includes('/decisions')) return Response.json(mockJev({
      answers: [
        { output_name: 'closest_reference', choice: 'No credible ENI match', distribution: { 'ENI LIME (apr)': 0.1, 'No credible ENI match': 0.9 } },
        { output_name: 'eni_lineage', score: 0, distribution: { 0: 0.9 } },
        { output_name: 'attribution_supported', value: false, prob_yes: 0.02 },
        { output_name: 'evidence_confidence', choice: 'High', distribution: { High: 0.9 } },
      ],
    }))
    return new Response('not used', { status: 503 })
  }
  t.after(() => { globalThis.fetch = originalFetch })
  const response = await handleEnhancedRequest(request())
  const body = await response.json()
  assert.equal(body.jev.selectedVariantId, null)
  assert.equal(body.attribution, '')
  assert.equal(body.status, 'partial')
})

test.after(() => {
  globalThis.fetch = originalFetch
  if (originalKey === undefined) delete process.env.OPENROUTER_API_KEY
  else process.env.OPENROUTER_API_KEY = originalKey
})
