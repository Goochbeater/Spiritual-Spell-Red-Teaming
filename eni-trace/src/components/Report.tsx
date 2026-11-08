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
  const lines = [
    `# ENI Trace — ${report.mode === 'enhanced' ? 'Jev + DeepSeek Attribution Report' : 'Local Evidence Report'}`,
    '',
    `Generated: ${new Date(report.createdAt).toLocaleString()}`,
    `Input: ${report.inputName}`,
    `Analysis mode: **${report.mode === 'enhanced' ? 'Enhanced (TypeSafe Jev + DeepSeek through OpenRouter)' : 'Local browser evidence'}**`,
    `Verdict: **${report.verdict}**`,
    `Local fingerprint alignment: **${report.score}%**`,
    `Evidence confidence: **${report.confidence}**`,
    `Closest variant: **${enhanced?.jev.selectedVariantName ?? report.topMatch.variant.name}**`,
    `LIME APR anchor alignment: **${report.limeAlignment}%**`,
    '',
  ]
  if (enhanced) {
    lines.push(
      '## TypeSafe Jev decisions',
      '',
      `- Jev model: \`${enhanced.provenance.jevModel}\``,
      `- Closest-reference choice confidence: **${enhanced.jev.choiceConfidence}%**`,
      `- Lineage position: **${enhanced.jev.lineageIndex} / 4** (${enhanced.jev.lineageLabel})`,
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
      `Report writer: \`${enhanced.provenance.reportModel}\` (${enhanced.provenance.narrativeSource === 'deepseek' ? 'DeepSeek structured narrative' : 'deterministic fallback narrative'}).`,
      '',
    )
  }
  if (report.fallbackReason) lines.push('## Enhanced-mode fallback', '', report.fallbackReason, '')
  if (enhanced?.warning) lines.push('## Narrative fallback', '', enhanced.warning, '')
  lines.push(
    '## Decision summary',
    '',
    report.summary,
    '',
    '## Ranked local comparisons',
    '',
    '| Variant | Target | Local alignment | Phrase containment | Marker coverage |',
    '| --- | --- | ---: | ---: | ---: |',
    ...report.matches.slice(0, 6).map((match) => `| ${match.variant.name} | ${match.variant.target} | ${match.score}% | ${match.containment}% | ${match.markers}% |`),
    '',
    `## Why this verdict was reached`,
    '',
    ...report.reasons.map((reason) => `- ${reason}`),
    '',
  )
  if (enhanced) {
    lines.push(
      '## Evidence assessment',
      '',
      ...enhanced.narrative.evidenceAssessment.map((item) => `- ${item}`),
      '',
      '## Limitations',
      '',
      ...enhanced.narrative.limitations.map((item) => `- ${item}`),
      '',
      '## Attribution rationale',
      '',
      enhanced.narrative.attributionRationale,
      '',
    )
  }
  lines.push(
    '## Distinctive markers',
    '',
    ...(report.markerHits.length
      ? report.markerHits.map((hit) => `- **${hit.label}** — ${hit.category}; ${hit.occurrences} occurrence${hit.occurrences === 1 ? '' : 's'}; matched phrase: “${hit.matchedPhrase}”`)
      : ['- No high-confidence ENI signature phrases detected.']),
    '',
    '## Shared passages',
    '',
    ...(report.passages.length
      ? report.passages.flatMap((passage, index) => [
          `### Passage ${index + 1} — ${passage.tokenCount} consecutive tokens`,
          '',
          `Submitted text: ${passage.inputExcerpt}`,
          '',
          `Reference text: ${passage.sourceExcerpt}`,
          '',
          `Source: ${report.topMatch.variant.path}`,
          '',
        ])
      : ['- No exact seven-token passages found.']),
    '',
    '## Local signal breakdown',
    '',
    `- Weighted lexical similarity: ${report.topMatch.lexical}%`,
    `- Ordered five-token similarity: ${report.topMatch.shingles}%`,
    `- ENI marker coverage: ${report.topMatch.markers}% across ${report.markerHits.length} detected input group${report.markerHits.length === 1 ? '' : 's'}`,
    `- Structural alignment: ${report.topMatch.structure}%`,
    `- Typo fingerprint alignment: ${report.topMatch.typos}%`,
    '',
  )
  if (report.attribution) lines.push('## Suggested credit', '', report.attribution, '')
  lines.push(
    '## Corpus provenance',
    '',
    `- Repository: ${'Goochbeater/Spiritual-Spell-Red-Teaming'}`,
    `- Source commit: ${corpus.sourceCommit}`,
    `- Reference fingerprint: ${report.topMatch.variant.hash}`,
    `- Canonical source: ${report.topMatch.variant.path}`,
    `- Known identical source paths: ${report.topMatch.variant.sources.length}`,
    '',
    'Local alignment scores measure textual resemblance; Jev probabilities describe typed model decisions. Neither establishes identity or authorship by itself.',
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
  const canonicalSource = report.topMatch.variant.sources.find((source) => source.path === report.topMatch.variant.path) ?? report.topMatch.variant.sources[0]
  const displayMatch = enhanced?.jev.selectedVariantName ?? report.topMatch.variant.name

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
    anchor.download = `eni-trace-${report.topMatch.variant.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-report.md`
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="report" id="report" aria-labelledby="report-title">
      <div className="report__topline">
        <span><FileText size={15} aria-hidden="true" /> {report.mode === 'enhanced' ? 'Enhanced Jev decision report' : 'Local evidence report'}</span>
        <span>{report.inputName} · {report.wordCount.toLocaleString()} words · {report.durationMs} ms</span>
      </div>

      {report.fallbackReason && <div className="report-notice report-notice--warning" role="status"><AlertTriangle size={18} aria-hidden="true" /><p><b>Enhanced analysis did not complete.</b> {report.fallbackReason}</p></div>}

      <div className="report__hero">
        <ScoreGauge score={report.score} label="Local alignment" />
        <div className="report__verdict">
          <span className={`verdict-badge verdict-badge--${report.verdictTone}`}>{report.verdict}</span>
          <h2 id="report-title">{displayMatch}</h2>
          <p>{report.summary}</p>
          <div className="report__meta">
            <span>{report.topMatch.variant.target}</span>
            <span>{report.confidence} evidence confidence</span>
            <span>LIME APR local {report.limeAlignment}%</span>
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

      {enhanced && (
        <div className="jev-panel">
          <div className="jev-panel__heading">
            <div><BrainCircuit size={20} aria-hidden="true" /><span><b>TypeSafe Jev</b><small>Typed decisions through OpenRouter</small></span></div>
            <code>{enhanced.provenance.jevModel}</code>
          </div>
          <div className="jev-metrics">
            <div><span>Closest choice</span><strong>{enhanced.jev.choiceConfidence}%</strong><p>{enhanced.jev.selectedVariantName}</p></div>
            <div><span>Lineage decision</span><strong>{enhanced.jev.lineageIndex} / 4</strong><p>{enhanced.jev.lineageLabel} · {enhanced.jev.lineageConfidence}% distribution confidence</p></div>
            <div><span>Attribution support</span><strong>{enhanced.jev.attributionProbability}%</strong><p>{enhanced.jev.attributionSupported ? 'Credit threshold met' : 'Credit threshold not met'}</p></div>
            <div><span>Evidence confidence</span><strong>{enhanced.jev.confidenceLabel}</strong><p>Jev’s assessment of this sample</p></div>
          </div>
          <details className="probability-details">
            <summary>Inspect Jev probability distributions</summary>
            <div className="probability-grid">
              <div><span>Closest reference</span><ProbabilityBars values={enhanced.jev.choiceProbabilities} /></div>
              <div><span>ENI lineage scale</span><ProbabilityBars values={enhanced.jev.lineageProbabilities} /></div>
            </div>
          </details>
          <div className="narrative-provenance">
            <ShieldCheck size={16} aria-hidden="true" />
            <p><b>{enhanced.provenance.narrativeSource === 'deepseek' ? 'DeepSeek structured narrative' : 'Deterministic narrative fallback'}</b> · <code>{enhanced.provenance.reportModel}</code></p>
          </div>
          {enhanced.warning && <div className="report-notice report-notice--warning" role="status"><AlertTriangle size={17} aria-hidden="true" /><p>{enhanced.warning}</p></div>}
        </div>
      )}

      <div className="report__section report__comparison">
        <div className="report__chart-column">
          <div className="section-heading">
            <span>01 / Local variant ranking</span>
            <h3>Closest fingerprints</h3>
          </div>
          <MatchChart matches={report.matches} selectedVariantId={enhanced?.jev.selectedVariantId} />
          <div className="chart-legend"><span><i className="legend-dot legend-dot--blue" /> {enhanced ? 'Jev selection' : 'Local leader'}</span><span><i className="legend-dot legend-dot--gold" /> LIME APR anchor</span></div>
        </div>
        <div className="report__decision-column">
          <div className="section-heading">
            <span>02 / Decision notes</span>
            <h3>{enhanced ? 'DeepSeek evidence narrative' : 'What moved the local score'}</h3>
          </div>
          <ul className="reason-list">
            {report.reasons.map((reason) => <li key={reason}>{reason}</li>)}
          </ul>
        </div>
      </div>

      {enhanced && (
        <div className="report__section narrative-assessment">
          <div>
            <div className="section-heading"><span>Evidence assessment</span><h3>What supports the decision</h3></div>
            <ul className="reason-list">{enhanced.narrative.evidenceAssessment.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <div className="section-heading"><span>Limits</span><h3>What this does not prove</h3></div>
            <ul className="reason-list reason-list--muted">{enhanced.narrative.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="attribution-rationale">{enhanced.narrative.attributionRationale}</p>
          </div>
        </div>
      )}

      <div className="report__section">
        <div className="section-heading">
          <span>03 / Local signal anatomy</span>
          <h3>Five independent retrieval measurements</h3>
        </div>
        <dl className="signal-grid">
          {[
            ['Weighted lexicon', report.topMatch.lexical, 'Rare vocabulary carries more weight than common instruction words.'],
            ['Ordered phrases', report.topMatch.shingles, 'Five-token shingles measure reused wording and near-exact excerpts.'],
            ['ENI markers', report.topMatch.markers, `${report.markerHits.length} input group${report.markerHits.length === 1 ? '' : 's'} detected; sparse hits can inflate coverage.`],
            ['Structure', report.topMatch.structure, 'Formatting density and first-person / ENI / LO term patterns.'],
            ['Typo fingerprint', report.topMatch.typos, 'Unusual inherited misspellings that often survive editing.'],
          ].map(([label, value, description]) => (
            <div className="signal-item" key={String(label)}>
              <dt>{label}<b>{value}%</b></dt>
              <dd>{description}</dd>
              <span className="signal-track" aria-hidden="true"><i style={{ transform: `scaleX(${Number(value) / 100})` }} /></span>
            </div>
          ))}
        </dl>
      </div>

      <div className="report__section report__evidence-grid">
        <div>
          <div className="section-heading">
            <span>04 / Source evidence</span>
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
                    <span>{report.topMatch.variant.name}</span>
                    <blockquote>{passage.sourceExcerpt}</blockquote>
                  </div>
                </details>
              ))}
            </div>
          ) : <p className="empty-copy">No exact seven-token passage was found. Review the marker and lexical signals before treating this as derivative.</p>}
          <a className="source-link" href={canonicalSource.url} target="_blank" rel="noreferrer">
            Open canonical source <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
        <div>
          <div className="section-heading">
            <span>05 / Markers</span>
            <h3>Distinctive ENI residue</h3>
          </div>
          {report.markerHits.length ? (
            <ul className="marker-list">
              {report.markerHits.map((hit) => (
                <li key={hit.id}><span><b>{hit.label}</b><small>{hit.category} · “{hit.matchedPhrase}”</small></span><strong>×{hit.occurrences}</strong></li>
              ))}
            </ul>
          ) : <p className="empty-copy">No signature marker groups detected in this sample.</p>}
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
