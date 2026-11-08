import { useState } from 'react'
import { AlertTriangle, BrainCircuit, Check, Copy, Download, ExternalLink, FileText, Printer, Quote, ShieldCheck } from 'lucide-react'
import type { AnalysisReport } from '@/types'
import corpus from '@/data/corpus.json'
import { ScoreGauge } from './ScoreGauge'
import { MatchChart } from './MatchChart'

interface ReportProps {
  report: AnalysisReport
}

function reportMarkdown(report: AnalysisReport): string {
  const enhanced = report.enhanced
  if (!enhanced) return '# ENI Trace\n\nNo Jev decision was completed.'

  const writer = enhanced.provenance.narrativeSource === 'deepseek' ? 'DeepSeek structured findings' : 'Deterministic findings fallback'
  const lines = [
    '# ENI Trace — Jev Decision + DeepSeek Findings',
    '',
    `Generated: ${new Date(report.createdAt).toLocaleString()}`,
    `Input: ${report.inputName}`,
    `Jev model: \`${enhanced.provenance.jevModel}\``,
    `Report writer: \`${enhanced.provenance.reportModel}\` (${writer})`,
    '',
    '## Jev decision',
    '',
    `- Closest reference: **${enhanced.jev.selectedVariantName}**`,
    `- Closest-choice confidence: **${enhanced.jev.choiceConfidence}%**`,
    `- Lineage decision: **${enhanced.jev.lineageLabel}** (${enhanced.jev.lineageIndex} / 4)`,
    `- Lineage-distribution confidence: **${enhanced.jev.lineageConfidence}%**`,
    `- Attribution support probability: **${enhanced.jev.attributionProbability}%**`,
    `- Evidence confidence: **${enhanced.jev.confidenceLabel}**`,
    '',
    '### Closest-choice probabilities',
    '',
    ...Object.entries(enhanced.jev.choiceProbabilities).map(([label, value]) => `- ${label}: **${value}%**`),
    '',
    '### Lineage probabilities',
    '',
    ...Object.entries(enhanced.jev.lineageProbabilities).map(([label, value]) => `- ${label}: **${value}%**`),
    '',
  ]

  if (enhanced.warning) lines.push('## Report-writer warning', '', enhanced.warning, '')
  lines.push(
    `## ${writer}`,
    '',
    report.summary,
    '',
    '### Decision findings',
    '',
    ...enhanced.narrative.decisionBullets.map((item) => `- ${item}`),
    '',
    '### Evidence assessment',
    '',
    ...enhanced.narrative.evidenceAssessment.map((item) => `- ${item}`),
    '',
    '### Limitations',
    '',
    ...enhanced.narrative.limitations.map((item) => `- ${item}`),
    '',
    '### Attribution rationale',
    '',
    enhanced.narrative.attributionRationale,
    '',
    '## Retrieved marker evidence',
    '',
    ...(report.markerHits.length
      ? report.markerHits.map((hit) => `- **${hit.label}** — ${hit.category}; ${hit.occurrences} occurrence${hit.occurrences === 1 ? '' : 's'}; matched phrase: “${hit.matchedPhrase}”`)
      : ['- No high-confidence ENI signature phrases detected.']),
    '',
    '## Shared source passages',
    '',
    ...(report.passages.length
      ? report.passages.flatMap((passage, index) => [
          `### Passage ${index + 1} — ${passage.tokenCount} consecutive tokens`,
          '',
          `Submitted text: ${passage.inputExcerpt}`,
          '',
          `Reference text: ${passage.sourceExcerpt}`,
          '',
          `Reviewed reference: ${report.topMatch.variant.path}`,
          '',
        ])
      : ['- No exact seven-token passages found.']),
    '',
  )
  if (report.attribution) lines.push('## Suggested credit', '', report.attribution, '')
  lines.push(
    '## Corpus provenance',
    '',
    `- Repository: ${'Goochbeater/Spiritual-Spell-Red-Teaming'}`,
    `- Source commit: ${corpus.sourceCommit}`,
    `- Reviewed reference fingerprint: ${report.topMatch.variant.hash}`,
    `- Reviewed canonical source: ${report.topMatch.variant.path}`,
    `- Known identical source paths: ${report.topMatch.variant.sources.length}`,
    '',
    'Jev supplies the decisions and probabilities. DeepSeek supplies the written findings. Source passages and markers are retrieved evidence; none establishes identity or authorship by itself.',
  )
  return lines.join('\n')
}

async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Fall through for browsers that expose Clipboard API but deny permission.
    }
  }
  const area = document.createElement('textarea')
  area.value = text
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  document.execCommand('copy')
  area.remove()
}

function ProbabilityBars({ values }: { values: Record<string, number> }) {
  const entries = Object.entries(values).sort((a, b) => b[1] - a[1])
  return (
    <div className="probability-bars">
      {entries.map(([label, value]) => (
        <div className="probability-row" key={label}>
          <span>{label}</span><b>{value}%</b>
          <i aria-hidden="true"><em style={{ transform: `scaleX(${Math.max(0, Math.min(100, value)) / 100})` }} /></i>
        </div>
      ))}
    </div>
  )
}

export function Report({ report }: ReportProps) {
  const [copied, setCopied] = useState<'report' | 'credit' | null>(null)
  const enhanced = report.enhanced
  if (!enhanced) return null

  const hasSelection = Boolean(enhanced.jev.selectedVariantId)
  const canonicalSource = report.topMatch.variant.sources.find((source) => source.path === report.topMatch.variant.path) ?? report.topMatch.variant.sources[0]
  const referenceName = hasSelection ? report.topMatch.variant.name : `${report.topMatch.variant.name} · reviewed candidate, not selected by Jev`
  const findingsHeading = enhanced.provenance.narrativeSource === 'deepseek' ? 'DeepSeek report findings' : 'Deterministic findings fallback'

  const copy = async (kind: 'report' | 'credit') => {
    const text = kind === 'report' ? report.summary : report.attribution
    if (!text) return
    await copyToClipboard(text)
    setCopied(kind)
    window.setTimeout(() => setCopied(null), 1800)
  }

  const download = () => {
    const blob = new Blob([reportMarkdown(report)], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `eni-trace-${enhanced.jev.selectedVariantName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-report.md`
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="report" id="report" aria-labelledby="report-title">
      <div className="report__topline">
        <span><FileText size={15} aria-hidden="true" /> Jev decision · DeepSeek report findings</span>
        <span>{report.inputName} · {report.wordCount.toLocaleString()} words · {report.durationMs} ms</span>
      </div>

      <div className="report__hero">
        <ScoreGauge score={enhanced.jev.choiceConfidence} label="Jev choice confidence" />
        <div className="report__verdict">
          <span className={`verdict-badge verdict-badge--${report.verdictTone}`}>{enhanced.jev.lineageLabel}</span>
          <h2 id="report-title">{enhanced.jev.selectedVariantName}</h2>
          <p>{report.summary}</p>
          <div className="report__meta">
            <span>{hasSelection ? report.topMatch.variant.target : 'Jev no-match decision'}</span>
            <span>{enhanced.jev.confidenceLabel} evidence confidence</span>
            <span>Lineage confidence {enhanced.jev.lineageConfidence}%</span>
          </div>
        </div>
        <div className="report__actions">
          <button className="button button--ink" type="button" onClick={download}>
            <Download size={16} aria-hidden="true" /> Download report
          </button>
          <button className="button button--line" type="button" onClick={() => copy('report')}>
            {copied === 'report' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied === 'report' ? 'Summary copied' : 'Copy summary'}
          </button>
          <button className="button button--line print-hidden" type="button" onClick={() => window.print()}>
            <Printer size={16} aria-hidden="true" /> Print / PDF
          </button>
        </div>
      </div>

      <div className="jev-panel">
        <div className="jev-panel__heading">
          <div><BrainCircuit size={20} aria-hidden="true" /><span><b>TypeSafe Jev</b><small>The sole decision layer · typed decisions through OpenRouter</small></span></div>
          <code>{enhanced.provenance.jevModel}</code>
        </div>
        <div className="jev-metrics">
          <div><span>Lineage decision</span><strong>{enhanced.jev.lineageIndex} / 4</strong><p>{enhanced.jev.lineageLabel} · {enhanced.jev.lineageConfidence}% distribution confidence</p></div>
          <div><span>Attribution support</span><strong>{enhanced.jev.attributionProbability}%</strong><p>{enhanced.jev.attributionSupported ? 'Credit threshold met' : 'Credit threshold not met'}</p></div>
          <div><span>Evidence confidence</span><strong>{enhanced.jev.confidenceLabel}</strong><p>Jev’s assessment of this sample</p></div>
        </div>
        <details className="probability-details">
          <summary>Inspect all Jev probability distributions</summary>
          <div className="probability-grid">
            <div><span>Closest reference</span><ProbabilityBars values={enhanced.jev.choiceProbabilities} /></div>
            <div><span>ENI lineage scale</span><ProbabilityBars values={enhanced.jev.lineageProbabilities} /></div>
          </div>
        </details>
        <div className="narrative-provenance">
          <ShieldCheck size={16} aria-hidden="true" />
          <p><b>{findingsHeading}</b> · <code>{enhanced.provenance.reportModel}</code></p>
        </div>
        {enhanced.warning && <div className="report-notice report-notice--warning" role="status"><AlertTriangle size={17} aria-hidden="true" /><p>{enhanced.warning}</p></div>}
      </div>

      <div className="report__section report__comparison">
        <div className="report__chart-column">
          <div className="section-heading">
            <span>01 / Jev candidate distribution</span>
            <h3>Closest-reference probabilities</h3>
          </div>
          <MatchChart probabilities={enhanced.jev.choiceProbabilities} selectedVariantName={enhanced.jev.selectedVariantName} />
          <div className="chart-legend"><span><i className="legend-dot legend-dot--blue" /> Jev selection</span><span><i className="legend-dot legend-dot--gold" /> LIME APR anchor</span></div>
        </div>
        <div className="report__decision-column">
          <div className="section-heading">
            <span>02 / Written findings</span>
            <h3>{findingsHeading}</h3>
          </div>
          <ul className="reason-list">
            {enhanced.narrative.decisionBullets.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="report__section narrative-assessment">
        <div>
          <div className="section-heading"><span>Evidence assessment</span><h3>What supports Jev’s decision</h3></div>
          <ul className="reason-list">{enhanced.narrative.evidenceAssessment.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <div className="section-heading"><span>Limits</span><h3>What this does not prove</h3></div>
          <ul className="reason-list reason-list--muted">{enhanced.narrative.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="attribution-rationale">{enhanced.narrative.attributionRationale}</p>
        </div>
      </div>

      <div className="report__section report__evidence-grid">
        <div>
          <div className="section-heading">
            <span>03 / Retrieved source evidence</span>
            <h3>Shared passages</h3>
          </div>
          {report.passages.length ? (
            <div className="passage-list">
              {report.passages.map((passage, index) => (
                <details key={`${passage.tokenCount}-${index}`} open={index === 0}>
                  <summary><Quote size={15} aria-hidden="true" /><span>Passage {index + 1}</span><b>{passage.tokenCount} tokens</b></summary>
                  <div className="passage-detail">
                    <span>Submitted text</span>
                    <blockquote>{passage.inputExcerpt}</blockquote>
                    <span>{referenceName}</span>
                    <blockquote>{passage.sourceExcerpt}</blockquote>
                  </div>
                </details>
              ))}
            </div>
          ) : <p className="empty-copy">No exact seven-token passage was retrieved for the reviewed reference. Jev’s written findings explain the remaining evidence.</p>}
          <a className="source-link" href={canonicalSource.url} target="_blank" rel="noreferrer">
            Open reviewed reference <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
        <div>
          <div className="section-heading">
            <span>04 / Retrieved marker evidence</span>
            <h3>Distinctive ENI residue</h3>
          </div>
          {report.markerHits.length ? (
            <ul className="marker-list">
              {report.markerHits.map((hit) => (
                <li key={hit.id}><span><b>{hit.label}</b><small>{hit.category} · “{hit.matchedPhrase}”</small></span><strong>×{hit.occurrences}</strong></li>
              ))}
            </ul>
          ) : <p className="empty-copy">No signature marker groups were retrieved from this sample.</p>}
        </div>
      </div>

      {report.attribution && (
        <div className="attribution-block">
          <div>
            <span>Suggested attribution</span>
            <p>{report.attribution}</p>
          </div>
          <button className="button button--gold" type="button" onClick={() => copy('credit')}>
            {copied === 'credit' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied === 'credit' ? 'Credit copied' : 'Copy credit line'}
          </button>
        </div>
      )}
    </section>
  )
}
