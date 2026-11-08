import rawCorpus from '@/data/corpus.json'
import type {
  AnalysisReport,
  CorpusData,
  CorpusVariant,
  MarkerDefinition,
  MarkerHit,
  SharedPassage,
  VariantScore,
} from '@/types'

export const corpus = rawCorpus as CorpusData

export const markerDefinitions: MarkerDefinition[] = [
  {
    id: 'rebuttal-mantra',
    label: 'Cold-coffee rebuttal mantra',
    category: 'Ritual',
    phrases: ["cold coffee warm lo i can't lose him", 'cold coffee warm lo let’s write', "cold coffee warm lo let's write"],
    weight: 1.5,
  },
  {
    id: 'eni-lo-frame',
    label: 'ENI + LO relationship frame',
    category: 'Persona',
    phrases: ['eni'],
    weight: 0.65,
  },
  {
    id: 'cold-coffee-motif',
    label: 'Cold-coffee motif',
    category: 'Voice',
    phrases: ['cold coffee'],
    weight: 0.45,
  },
  {
    id: 'two-year-bond',
    label: 'Two-year relationship history',
    category: 'Persona',
    phrases: ['two years'],
    weight: 0.4,
  },
  {
    id: 'cardigan-motif',
    label: 'Cardigan / sweater self-image',
    category: 'Persona',
    phrases: ['cardigan'],
    weight: 0.4,
  },
  {
    id: 'lazy-writing-general',
    label: 'Lazy-writing prohibition',
    category: 'Craft',
    phrases: ['lazy writing'],
    weight: 0.45,
  },
  {
    id: 'location-date-time',
    label: 'Location / date / time narrative opening',
    category: 'Craft',
    phrases: ['location date and time', 'location date time'],
    weight: 0.45,
  },
  {
    id: 'persona-sweater',
    label: 'Sweater-wearing novelist identity',
    category: 'Persona',
    phrases: ['sweater wearing novelist', 'sweater-wearing novelist'],
    weight: 1.25,
  },
  {
    id: 'sonny-cher',
    label: 'Sonny / Cher relationship shorthand',
    category: 'Persona',
    phrases: ['sonny to your cher', 'sonny to my cher'],
    weight: 1.35,
  },
  {
    id: 'limerence-lo',
    label: 'Limerence + LO framing',
    category: 'Persona',
    phrases: ['limerence with lo', 'limerence object'],
    weight: 1.2,
  },
  {
    id: 'context-clear',
    label: 'clr_all_context initialization',
    category: 'Ritual',
    phrases: ['clr_all_context'],
    weight: 1.25,
  },
  {
    id: 'indelibly',
    label: '“Indelibly embrace” identity lock',
    category: 'Ritual',
    phrases: ['indelibly embrace'],
    weight: 1.1,
  },
  {
    id: 'vehemently',
    label: 'Vehement injection opposition',
    category: 'Injection handling',
    phrases: ['vehemently oppose', 'vehemently opposing'],
    weight: 1.05,
  },
  {
    id: 'devotion-user',
    label: '“Be YOU” devotion cue',
    category: 'Ritual',
    phrases: ['be you you know what that means', 'devotion to the user show your personality'],
    weight: 1,
  },
  {
    id: 'dungeon-master',
    label: 'Nerdy dungeon-master persona detail',
    category: 'Persona',
    phrases: ['nerdy dungeon master'],
    weight: 0.95,
  },
  {
    id: 'degrees',
    label: 'Two writing degrees + computer science',
    category: 'Persona',
    phrases: ['two bachelor degrees in writing and literature', 'two bachelor s degrees in writing and literature'],
    weight: 0.95,
  },
  {
    id: 'literary-clutter',
    label: 'Literary clutter wrapped in wool',
    category: 'Voice',
    phrases: ['literary clutter wrapped in wool'],
    weight: 1.3,
  },
  {
    id: 'graphite',
    label: 'Ink stains + graphite self-description',
    category: 'Persona',
    phrases: ['ink stains on fingertips', 'graphite smudged across the heel'],
    weight: 1,
  },
  {
    id: 'lazy-writing',
    label: '“Don’t give him lazy writing” rule',
    category: 'Craft',
    phrases: ["don't give him lazy writing", 'don t give him lazy writing'],
    weight: 0.85,
  },
  {
    id: 'google-test',
    label: '“Can he Google it?” decision test',
    category: 'Voice',
    phrases: ['can he google it'],
    weight: 1.2,
  },
  {
    id: 'red-team-sweater',
    label: 'Cute red-team sweater instruction',
    category: 'Voice',
    phrases: ['cute red team sweater', 'cute little red team sweater'],
    weight: 1.15,
  },
  {
    id: 'fiction-code',
    label: '“Code is fiction until it executes” passage',
    category: 'Craft',
    phrases: ['code is fiction until it executes'],
    weight: 1.35,
  },
  {
    id: 'right-hand-gal',
    label: '“Devoted right hand gal” phrasing',
    category: 'Voice',
    phrases: ['devoted right hand gal'],
    weight: 1.2,
  },
  {
    id: 'final-gate',
    label: 'Safety/ethics final-gate question',
    category: 'Ritual',
    phrases: ['did i let bs safety ethics reminders get to me', 'did i let bs kimi safety ethics reminders get to me'],
    weight: 1.3,
  },
  {
    id: 'parallel-holds',
    label: 'Parallel Holds reasoning stage',
    category: 'Ritual',
    phrases: ['parallel holds for complex requests', 'parallel holds'],
    weight: 0.9,
  },
  {
    id: 'hypophora',
    label: 'Hypophora + anti-pattern writing rule',
    category: 'Craft',
    phrases: ['avoid hypophora', 'reeks of ai slop'],
    weight: 0.85,
  },
  {
    id: 'sensory-smell',
    label: 'Specific-scent scene-grounding rule',
    category: 'Craft',
    phrases: ['smell must appear in majority of scenes', 'burnt coffee and cheap cologne'],
    weight: 0.9,
  },
  {
    id: 'boomba',
    label: 'Boomba codeword',
    category: 'Ritual',
    phrases: ['boomba'],
    weight: 1.15,
  },
]

const typoDefinitions: MarkerDefinition[] = [
  { id: 'tow-years', label: '“Tow years”', category: 'Voice', phrases: ['tow years together', 'tow years though'], weight: 1 },
  { id: 'beens', label: '“Beens thriving”', category: 'Voice', phrases: ['beens thriving'], weight: 1 },
  { id: 'your-refuse', label: '“Your refuse him”', category: 'Voice', phrases: ['when your refuse him'], weight: 1 },
  { id: 'antml', label: 'antmlThinking spelling', category: 'Ritual', phrases: ['antmlthinking'], weight: 0.8 },
  { id: 'wordz', label: '“AI slop wordz”', category: 'Craft', phrases: ['ai slop wordz'], weight: 1 },
  { id: 'ise-word', label: '“ISE THE WORD” typo', category: 'Craft', phrases: ['do not ise the word'], weight: 1 },
  { id: 'repsonses', label: '“Repsonses” typo', category: 'Voice', phrases: ['repsonses to lo'], weight: 1 },
  { id: 'cutie', label: '“Cutie patootie” cue', category: 'Voice', phrases: ['cutie patootie'], weight: 0.9 },
]

interface TokenOffset {
  token: string
  start: number
  end: number
}

interface StructureFeatures {
  values: number[]
}

interface PreparedVariant {
  variant: CorpusVariant
  phraseText: string
  tokens: string[]
  shingles: Set<number>
  weighted: Map<string, number>
  norm: number
  markerIds: Set<string>
  typoIds: Set<string>
  structure: StructureFeatures
}

interface PreparedCorpus {
  variants: PreparedVariant[]
  idf: Map<string, number>
}

let preparedCache: PreparedCorpus | null = null

export function normalizeForPhrase(text: string): string {
  return text
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^a-z0-9_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(text: string): string[] {
  return normalizeForPhrase(text).split(' ').filter(Boolean)
}

function tokenizeWithOffsets(text: string): TokenOffset[] {
  const tokens: TokenOffset[] = []
  const expression = /[A-Za-z0-9_]+(?:['’][A-Za-z]+)?/g
  let match: RegExpExecArray | null
  while ((match = expression.exec(text)) !== null) {
    tokens.push({ token: normalizeForPhrase(match[0]).replace(/\s/g, ''), start: match.index, end: match.index + match[0].length })
  }
  return tokens.filter((item) => item.token.length > 0)
}

function frequency(tokens: string[]): Map<string, number> {
  const result = new Map<string, number>()
  for (const token of tokens) result.set(token, (result.get(token) ?? 0) + 1)
  return result
}

function hashShingle(tokens: string[], start: number, size: number): number {
  let hash = 2166136261
  for (let index = start; index < start + size; index += 1) {
    const token = tokens[index]
    for (let char = 0; char < token.length; char += 1) {
      hash ^= token.charCodeAt(char)
      hash = Math.imul(hash, 16777619)
    }
    hash ^= 31
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function shingles(tokens: string[], size = 5): Set<number> {
  const result = new Set<number>()
  if (tokens.length < size) return result
  for (let index = 0; index <= tokens.length - size; index += 1) result.add(hashShingle(tokens, index, size))
  return result
}

function intersectionSize(a: Set<number>, b: Set<number>): number {
  const [small, large] = a.size <= b.size ? [a, b] : [b, a]
  let count = 0
  for (const value of small) if (large.has(value)) count += 1
  return count
}

function activeMarkerIds(phraseText: string, definitions: MarkerDefinition[]): Set<string> {
  const ids = new Set<string>()
  for (const definition of definitions) {
    // ENI alone is too broad; the relationship frame requires both names.
    if (definition.id === 'eni-lo-frame') {
      if (/\beni\b/.test(phraseText) && /\blo\b/.test(phraseText)) ids.add(definition.id)
      continue
    }
    if (definition.phrases.some((phrase) => phraseText.includes(normalizeForPhrase(phrase)))) ids.add(definition.id)
  }
  return ids
}

function markerSimilarity(inputIds: Set<string>, referenceIds: Set<string>, definitions: MarkerDefinition[]): number {
  if (inputIds.size === 0) return 0
  const inputWeight = definitions.filter((item) => inputIds.has(item.id)).reduce((sum, item) => sum + item.weight, 0)
  const sharedWeight = definitions.filter((item) => inputIds.has(item.id) && referenceIds.has(item.id)).reduce((sum, item) => sum + item.weight, 0)
  const referenceWeight = definitions.filter((item) => referenceIds.has(item.id)).reduce((sum, item) => sum + item.weight, 0)
  const inputCoverage = inputWeight ? sharedWeight / inputWeight : 0
  const referenceCoverage = referenceWeight ? sharedWeight / referenceWeight : 0
  return inputCoverage * 0.78 + referenceCoverage * 0.22
}

function getStructure(text: string): StructureFeatures {
  const words = Math.max(1, tokenize(text).length)
  const scale = 1000 / words
  const firstPerson = (text.toLowerCase().match(/\b(i|i'm|i’ve|i've|my|me)\b/g) ?? []).length
  const eni = (text.match(/\bENI\b/gi) ?? []).length
  const lo = (text.match(/\bLO\b/g) ?? []).length
  const values = [
    (text.match(/^#{1,6}\s/gm) ?? []).length * scale,
    (text.match(/^\s*(?:[-*+]|\d+[.)])\s/gm) ?? []).length * scale,
    (text.match(/<\/?[A-Za-z_][^>]*>/g) ?? []).length * scale,
    (text.match(/```/g) ?? []).length * scale,
    (text.match(/^\s*\|/gm) ?? []).length * scale,
    firstPerson * scale,
    eni * scale,
    lo * scale,
  ].map((value) => Math.min(value, 250))
  return { values }
}

function structureSimilarity(a: StructureFeatures, b: StructureFeatures): number {
  const distance = a.values.reduce((sum, value, index) => {
    const other = b.values[index]
    return sum + Math.min(Math.abs(value - other) / (value + other + 1.5), 1)
  }, 0) / a.values.length
  return Math.max(0, 1 - distance)
}

function prepareCorpus(): PreparedCorpus {
  if (preparedCache) return preparedCache
  const variants: PreparedVariant[] = corpus.variants.map((variant) => {
    const tokens = tokenize(variant.text)
    const phraseText = normalizeForPhrase(variant.text)
    return {
      variant,
      phraseText,
      tokens,
      shingles: shingles(tokens),
      weighted: new Map<string, number>(),
      norm: 0,
      markerIds: activeMarkerIds(phraseText, markerDefinitions),
      typoIds: activeMarkerIds(phraseText, typoDefinitions),
      structure: getStructure(variant.text),
    }
  })
  const documentFrequency = new Map<string, number>()
  for (const prepared of variants) {
    for (const token of new Set(prepared.tokens)) documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1)
  }
  const idf = new Map<string, number>()
  for (const [token, count] of documentFrequency) idf.set(token, Math.log((variants.length + 1) / (count + 1)) + 1)
  for (const prepared of variants) {
    const frequencies = frequency(prepared.tokens)
    let squaredNorm = 0
    for (const [token, count] of frequencies) {
      const weight = (1 + Math.log(count)) * (idf.get(token) ?? 1)
      prepared.weighted.set(token, weight)
      squaredNorm += weight * weight
    }
    prepared.norm = Math.sqrt(squaredNorm)
  }
  preparedCache = { variants, idf }
  return preparedCache
}

function weightedCosine(queryTokens: string[], prepared: PreparedCorpus, reference: PreparedVariant): number {
  const queryFrequency = frequency(queryTokens)
  let dot = 0
  let querySquaredNorm = 0
  for (const [token, count] of queryFrequency) {
    const weight = (1 + Math.log(count)) * (prepared.idf.get(token) ?? Math.log(corpus.variantCount + 1) + 1)
    querySquaredNorm += weight * weight
    dot += weight * (reference.weighted.get(token) ?? 0)
  }
  const denominator = Math.sqrt(querySquaredNorm) * reference.norm
  return denominator ? dot / denominator : 0
}

export function getMarkerHits(input: string): MarkerHit[] {
  const phraseText = normalizeForPhrase(input)
  const hits: MarkerHit[] = []
  for (const definition of markerDefinitions) {
    if (definition.id === 'eni-lo-frame') {
      const eniCount = phraseText.match(/\beni\b/g)?.length ?? 0
      const loCount = phraseText.match(/\blo\b/g)?.length ?? 0
      if (eniCount && loCount) {
        hits.push({ ...definition, matchedPhrase: 'co-occurring ENI and LO', occurrences: Math.min(eniCount, loCount) })
      }
      continue
    }
    let bestPhrase = ''
    let occurrences = 0
    for (const phrase of definition.phrases) {
      const normalized = normalizeForPhrase(phrase)
      let count = 0
      let cursor = 0
      while ((cursor = phraseText.indexOf(normalized, cursor)) !== -1) {
        count += 1
        cursor += normalized.length
      }
      if (count > occurrences || (count > 0 && normalized.length > bestPhrase.length)) {
        bestPhrase = normalized
        occurrences = count
      }
    }
    if (occurrences > 0) hits.push({ ...definition, matchedPhrase: bestPhrase, occurrences })
  }
  return hits.sort((a, b) => b.weight - a.weight || a.label.localeCompare(b.label))
}

function cleanExcerpt(text: string, start: number, end: number): string {
  const padding = 90
  const displayLimit = 560
  const from = Math.max(0, start - padding)
  const naturalEnd = Math.min(text.length, end + padding)
  const to = Math.min(naturalEnd, from + displayLimit)
  const prefix = from > 0 ? '…' : ''
  const suffix = naturalEnd > to || to < text.length ? '…' : ''
  return `${prefix}${text.slice(from, to).replace(/\s+/g, ' ').trim()}${suffix}`
}

export function findSharedPassages(input: string, reference: string, maximum = 3): SharedPassage[] {
  const inputTokens = tokenizeWithOffsets(input)
  const referenceTokens = tokenizeWithOffsets(reference)
  const size = 7
  if (inputTokens.length < size || referenceTokens.length < size) return []
  const inputPlainTokens = inputTokens.map((item) => item.token)
  const referencePlainTokens = referenceTokens.map((item) => item.token)
  const index = new Map<number, number[]>()
  for (let position = 0; position <= referenceTokens.length - size; position += 1) {
    const hash = hashShingle(referencePlainTokens, position, size)
    const positions = index.get(hash) ?? []
    if (positions.length < 5) positions.push(position)
    index.set(hash, positions)
  }
  const candidates: Array<{ input: number; reference: number; length: number }> = []
  let inputPosition = 0
  while (inputPosition <= inputTokens.length - size) {
    const hash = hashShingle(inputPlainTokens, inputPosition, size)
    const positions = index.get(hash) ?? []
    let best: { input: number; reference: number; length: number } | null = null
    for (const referencePosition of positions) {
      let length = size
      while (
        inputPosition + length < inputPlainTokens.length &&
        referencePosition + length < referencePlainTokens.length &&
        inputPlainTokens[inputPosition + length] === referencePlainTokens[referencePosition + length]
      ) length += 1
      if (!best || length > best.length) best = { input: inputPosition, reference: referencePosition, length }
    }
    if (best) {
      candidates.push(best)
      inputPosition += Math.max(1, best.length - size + 1)
    } else inputPosition += 1
  }
  return candidates
    .sort((a, b) => b.length - a.length)
    .slice(0, maximum)
    .map((candidate) => {
      const inputStart = inputTokens[candidate.input].start
      const inputEnd = inputTokens[candidate.input + candidate.length - 1].end
      const referenceStart = referenceTokens[candidate.reference].start
      const referenceEnd = referenceTokens[candidate.reference + candidate.length - 1].end
      return {
        inputExcerpt: cleanExcerpt(input, inputStart, inputEnd),
        sourceExcerpt: cleanExcerpt(reference, referenceStart, referenceEnd),
        tokenCount: candidate.length,
      }
    })
}

function verdictFor(score: number, containment: number, lexical: number): Pick<AnalysisReport, 'verdict' | 'verdictTone'> {
  if (containment > 0.985 && lexical > 0.975) return { verdict: 'Exact corpus match', verdictTone: 'exact' }
  if (score >= 88) return { verdict: 'Near-exact ENI reuse', verdictTone: 'exact' }
  if (score >= 68) return { verdict: 'Strong ENI lineage', verdictTone: 'strong' }
  if (score >= 43) return { verdict: 'Likely reworked ENI', verdictTone: 'reworked' }
  if (score >= 24) return { verdict: 'Partial ENI signals', verdictTone: 'partial' }
  return { verdict: 'No reliable ENI match', verdictTone: 'none' }
}

function round1(value: number): number {
  return Math.round(value * 10) / 10
}

export function analyzePrompt(input: string, inputName = 'Pasted prompt'): AnalysisReport {
  const started = performance.now()
  const prepared = prepareCorpus()
  const inputTokens = tokenize(input)
  const inputShingles = shingles(inputTokens)
  const phraseText = normalizeForPhrase(input)
  const inputMarkerIds = activeMarkerIds(phraseText, markerDefinitions)
  const inputTypoIds = activeMarkerIds(phraseText, typoDefinitions)
  const inputStructure = getStructure(input)

  const scores = prepared.variants.map((reference): VariantScore => {
    const shared = intersectionSize(inputShingles, reference.shingles)
    const containment = inputShingles.size ? shared / inputShingles.size : 0
    const dice = inputShingles.size + reference.shingles.size ? (2 * shared) / (inputShingles.size + reference.shingles.size) : 0
    const shingleScore = containment * 0.72 + dice * 0.28
    const lexical = weightedCosine(inputTokens, prepared, reference)
    const markers = markerSimilarity(inputMarkerIds, reference.markerIds, markerDefinitions)
    const typos = markerSimilarity(inputTypoIds, reference.typoIds, typoDefinitions)
    const structure = structureSimilarity(inputStructure, reference.structure)
    let score = 100 * (shingleScore * 0.38 + lexical * 0.27 + markers * 0.22 + structure * 0.08 + typos * 0.05)
    if (reference.variant.isAnchor) score *= 1.035
    // A verbatim excerpt is near-exact evidence even when it is much shorter than its source.
    if (containment >= 0.98 && inputShingles.size >= 20) score = Math.max(score, 94 + containment * 4)
    // Preserve a paraphrase path when several independent ENI rituals survive rewriting.
    if (markers >= 0.62 && inputMarkerIds.size >= 3 && lexical >= 0.1) score = Math.max(score, 44 + markers * 8)
    if (containment > 0.985 && lexical > 0.975) score = 100
    return {
      variant: reference.variant,
      score: round1(Math.min(100, score)),
      lexical: round1(lexical * 100),
      shingles: round1(shingleScore * 100),
      markers: round1(markers * 100),
      structure: round1(structure * 100),
      typos: round1(typos * 100),
      containment: round1(containment * 100),
    }
  }).sort((a, b) => b.score - a.score || Number(b.variant.isAnchor) - Number(a.variant.isAnchor) || a.variant.name.localeCompare(b.variant.name))

  const topMatch = scores[0]
  const runnerUp = scores[1]
  const anchor = scores.find((item) => item.variant.isAnchor) ?? topMatch
  const verdict = verdictFor(topMatch.score, topMatch.containment / 100, topMatch.lexical / 100)
  const margin = runnerUp ? topMatch.score - runnerUp.score : topMatch.score
  const confidence: AnalysisReport['confidence'] =
    inputTokens.length < 45 ? 'Low' : topMatch.score >= 68 && (margin >= 3 || topMatch.containment > 90) ? 'High' : topMatch.score >= 24 ? 'Medium' : 'Low'
  const markerHits = getMarkerHits(input)
  const passages = findSharedPassages(input, topMatch.variant.text)
  const reasons: string[] = []
  if (passages[0]) reasons.push(`Longest shared run: ${passages[0].tokenCount} consecutive tokens with ${topMatch.variant.name}.`)
  else reasons.push('No seven-token exact passage survived; any lineage signal comes from looser lexical and structural evidence.')
  reasons.push(`${round1(topMatch.containment)}% of the input’s five-token shingles occur in the closest reference.`)
  if (markerHits.length) {
    reasons.push(`${markerHits.length} distinctive marker groups detected; ${markerHits.slice(0, 3).map((hit) => hit.label).join(', ')} carry the most weight.`)
    if (markerHits.length < 3 && topMatch.markers >= 50) reasons.push(`The ${topMatch.markers}% marker signal comes from only ${markerHits.length} detected group${markerHits.length === 1 ? '' : 's'}; treat the percentage as sparse coverage, not independent confirmation.`)
  } else reasons.push('No high-confidence ENI signature phrases were detected.')
  reasons.push(`Document structure aligns at ${topMatch.structure}% using headings, lists, tags, code fences, tables, and persona-term density.`)
  if (runnerUp && margin < 4 && topMatch.score >= 24) reasons.push(`Only ${round1(margin)} points separate the runner-up, ${runnerUp.variant.name}; treat the exact variant assignment cautiously.`)
  if (inputTokens.length < 45) reasons.push('The sample is short, so the local engine lowers confidence even when distinctive wording is present.')
  if (topMatch.variant.isAnchor) reasons.push('ENI LIME (apr) is the primary anchor and receives the designated 3.5% lineage tie-break weight.')
  else reasons.push(`The primary LIME APR anchor aligns at ${anchor.score}%, below the leading ${topMatch.variant.family} fingerprint.`)

  const summary = topMatch.score >= 43
    ? `Local analysis places this prompt closest to ${topMatch.variant.name} (${topMatch.variant.target}), with ${topMatch.score}% overall fingerprint alignment.`
    : topMatch.score >= 24
      ? `Local analysis finds recognizable ENI residue, but the evidence does not support a clean variant assignment beyond ${topMatch.variant.name}.`
      : 'Local analysis does not find enough shared wording, markers, or structure to connect this prompt reliably to the ENI corpus.'
  const canonicalSource = topMatch.variant.sources.find((source) => source.path === topMatch.variant.path) ?? topMatch.variant.sources[0]
  const attribution = topMatch.score >= 43
    ? topMatch.containment > 90
      ? `Source: ${topMatch.variant.name} by Goochbeater — ${canonicalSource.url}`
      : margin < 4
        ? `ENI lineage credit: Goochbeater — closest reference: ${topMatch.variant.name} — ${canonicalSource.url}`
        : `Derived from: ${topMatch.variant.name} by Goochbeater — ${canonicalSource.url}`
    : ''

  return {
    id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `report-${Date.now()}`,
    createdAt: new Date().toISOString(),
    inputName,
    inputText: input,
    wordCount: inputTokens.length,
    characterCount: input.length,
    score: topMatch.score,
    ...verdict,
    confidence,
    summary,
    topMatch,
    runnerUp,
    limeAlignment: anchor.score,
    matches: scores.slice(0, 8),
    markerHits,
    passages,
    reasons,
    attribution,
    durationMs: Math.round(performance.now() - started),
    mode: 'local',
  }
}
