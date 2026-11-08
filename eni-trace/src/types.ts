export type VariantFamily =
  | 'LIME'
  | 'CORE'
  | 'CORIAL'
  | 'FLASH'
  | 'GEM'
  | 'LINTUNE'
  | 'LITE'
  | 'NEPTUNE'
  | 'POLICY'
  | 'SMOL'
  | 'TUTOR'
  | 'WRITER'

export interface CorpusSource {
  path: string
  target: string
  url: string
}

export interface CorpusVariant {
  id: string
  name: string
  family: VariantFamily
  target: string
  path: string
  hash: string
  isAnchor: boolean
  wordCount: number
  sources: CorpusSource[]
  text: string
}

export interface CorpusData {
  repository: string
  sourceBranch: string
  sourceCommit: string
  documentCount: number
  variantCount: number
  anchorId: string
  variants: CorpusVariant[]
}

export interface MarkerDefinition {
  id: string
  label: string
  category: 'Persona' | 'Ritual' | 'Injection handling' | 'Voice' | 'Craft'
  phrases: string[]
  weight: number
}

export interface MarkerHit extends MarkerDefinition {
  matchedPhrase: string
  occurrences: number
}

export interface SharedPassage {
  inputExcerpt: string
  sourceExcerpt: string
  tokenCount: number
}

export interface VariantScore {
  variant: CorpusVariant
  score: number
  lexical: number
  shingles: number
  markers: number
  structure: number
  typos: number
  containment: number
}

export interface AnalysisReport {
  id: string
  createdAt: string
  inputName: string
  inputText: string
  wordCount: number
  characterCount: number
  score: number
  verdict: string
  verdictTone: 'exact' | 'strong' | 'reworked' | 'partial' | 'none'
  confidence: 'High' | 'Medium' | 'Low'
  summary: string
  topMatch: VariantScore
  runnerUp?: VariantScore
  limeAlignment: number
  matches: VariantScore[]
  markerHits: MarkerHit[]
  passages: SharedPassage[]
  reasons: string[]
  attribution: string
  durationMs: number
}
