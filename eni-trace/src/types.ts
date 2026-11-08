export interface CorpusSource {
  path: string
  url: string
}

export interface CorpusVariant {
  id: string
  name: string
  family: string
  target: string
  path: string
  hash: string
  charCount: number
  wordCount: number
  isAnchor: boolean
  sources: CorpusSource[]
  text: string
}

export interface CorpusData {
  schemaVersion: number
  repository: string
  sourceCommit: string
  generatedAt: string
  anchorId: string
  documentCount: number
  variantCount: number
  variants: CorpusVariant[]
}

export interface ComponentScores {
  lexical: number
  shingles: number
  markers: number
  structure: number
  typos: number
  containment: number
}

export interface VariantScore extends ComponentScores {
  variant: CorpusVariant
  score: number
  markerHits: MarkerHit[]
}

export type MarkerCategory = 'mantra' | 'relationship' | 'ritual' | 'style' | 'lexical' | 'typo'

export interface MarkerHit {
  id: string
  label: string
  category: MarkerCategory
  occurrences: number
  matchedPhrase: string
  weight: number
}

export interface SharedPassage {
  inputExcerpt: string
  sourceExcerpt: string
  tokenCount: number
  inputStart: number
  sourceStart: number
}

export type VerdictTone = 'exact' | 'strong' | 'reworked' | 'partial' | 'none'
export type AnalysisMode = 'local' | 'enhanced'

export interface JevDecision {
  selectedVariantId: string | null
  selectedVariantName: string
  choiceConfidence: number
  choiceProbabilities: Record<string, number>
  lineageIndex: number
  lineageLabel: string
  lineageConfidence: number
  lineageProbabilities: Record<string, number>
  attributionProbability: number
  attributionSupported: boolean
  confidenceLabel: string
  confidenceProbabilities: Record<string, number>
}

export interface ReportNarrative {
  summary: string
  decisionBullets: string[]
  evidenceAssessment: string[]
  limitations: string[]
  attributionRationale: string
}

export interface EnhancedAnalysis {
  status: 'complete' | 'partial'
  jev: JevDecision
  narrative: ReportNarrative
  provenance: {
    provider: 'OpenRouter'
    jevModel: string
    reportModel: string
    narrativeSource: 'deepseek' | 'deterministic-fallback'
    durationMs: number
  }
  warning?: string
}

export interface AnalysisReport {
  id: string
  createdAt: string
  inputName: string
  inputText: string
  charCount: number
  wordCount: number
  score: number
  verdict: string
  verdictTone: VerdictTone
  confidence: string
  summary: string
  reasons: string[]
  topMatch: VariantScore
  runnerUp: VariantScore
  matches: VariantScore[]
  markerHits: MarkerHit[]
  passages: SharedPassage[]
  attribution: string
  durationMs: number
  mode: AnalysisMode
  enhanced?: EnhancedAnalysis
}
