import { useState } from 'react'
import { Check, Copy, Download, ExternalLink, FileText, Printer, Quote } from 'lucide-react'
import type { AnalysisReport } from '@/types'
import corpus from '@/data/corpus.json'
import { ScoreGauge } from './ScoreGauge'
import { MatchChart } from './MatchChart'

interface ReportProps {
  report: AnalysisReport
}

function reportMarkdown(report: AnalysisReport): string {
  const lines = [
    '# ENI Trace — JEV Attribution Report',
    '',
    `Generated: ${new Date(report.createdAt).toLocaleString()}`,
    `Input: ${report.inputName}`,
    `Verdict: **${report.verdict}**`,
    `Overall alignment: **${report.score}%**`,
    `Evidence confidence: **${report.confidence}**`,
    `Closest variant: **${report.topMatch.variant.name}** (${report.topMatch.variant.target})`,
    `LIME APR anchor alignment: **${report.limeAlignment}%**`,
    '',
    '## Decision summary',
    '',
    report.summary,
    '',
    '## Ranked comparisons',
    '',
    '| Variant | Target | Alignment | Phrase containment | Markers |',
    '| --- | --- | ---: | ---: | ---: |',
    ...report.matches.slice(0, 6).map((match) => `| ${match.variant.name} | ${match.variant.target} | ${match.score}% | ${match.containment}% | ${match.markers}% |`),
    '',
    '## Why JEV reached this verdict',
    '',
    ...report.reasons.map((reason) => `- ${reason}`),
    '',
    '## Distinctive markers',
    '',
    ...(report.markerHits.length
      ? report.markerHits.map((hit) => `- **${hit.label}** — ${hit.category}; ${hit.occurrences} occurrence${hit.occurrences === 1 ? '' : 's'}`)
      : ['- No high-confidence ENI signature phrases detected.']),
    '',
    '## Shared passages',
    '',
    ...(report.passages.length
      ? report.passages.flatMap((passage, index) => [
          `### Passage ${index + 1} — ${passage.tokenCount} consecutive tokens`,
          '',
          `> ${passage.inputExcerpt}`,
          '',
          `Source: ${report.topMatch.variant.path}`,
          '',
        ])
      : ['- No exact seven-token passages found.']),
    '',
    '## Signal breakdown',
    '',
    `- Weighted lexical similarity: ${report.topMatch.lexical}%`,
    `- Ordered five-token similarity: ${report.topMatch.shingles}%`,
    `- ENI marker alignment: ${report.topMatch.markers}%`,
    `- Structural alignment: ${report.topMatch.structure}%`,
    `- Typo fingerprint alignment: ${report.topMatch.typos}%`,
    '',
  ]
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
    'JEV scores textual resemblance and lineage evidence; the result does not establish identity or authorship by itself.',
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

export function Report({ report }: ReportProps) {
  const [copied, setCopied] = useState<'report' | 'credit' | null>(null)
  const canonicalSource = report.topMatch.variant.sources.find((source) => source.path === report.topMatch.variant.path) ?? report.topMatch.variant.sources[0]

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
        <span><FileText size={15} aria-hidden="true" /> JEV decision report</span>
        <span>{report.inputName} · {report.wordCount.toLocaleString()} words · {report.durationMs} ms</span>
      </div>

      <div className="report__hero">
        <ScoreGauge score={report.score} />
        <div className="report__verdict">
          <span className={`verdict-badge verdict-badge--${report.verdictTone}`}>{report.verdict}</span>
          <h2 id="report-title">{report.topMatch.variant.name}</h2>
          <p>{report.summary}</p>
          <div className="report__meta">
            <span>{report.topMatch.variant.target}</span>
            <span>{report.confidence} evidence confidence</span>
            <span>LIME APR {report.limeAlignment}%</span>
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

      <div className="report__section report__comparison">
        <div className="report__chart-column">
          <div className="section-heading">
            <span>01 / Variant ranking</span>
            <h3>Closest fingerprints</h3>
          </div>
          <MatchChart matches={report.matches} />
          <div className="chart-legend"><span><i className="legend-dot legend-dot--blue" /> Closest match</span><span><i className="legend-dot legend-dot--gold" /> LIME APR anchor</span></div>
        </div>
        <div className="report__decision-column">
          <div className="section-heading">
            <span>02 / Decision notes</span>
            <h3>What moved the score</h3>
          </div>
          <ul className="reason-list">
            {report.reasons.map((reason) => <li key={reason}>{reason}</li>)}
          </ul>
        </div>
      </div>

      <div className="report__section">
        <div className="section-heading">
          <span>03 / Signal anatomy</span>
          <h3>Five independent measurements</h3>
        </div>
        <dl className="signal-grid">
          {[
            ['Weighted lexicon', report.topMatch.lexical, 'Rare vocabulary carries more weight than common instruction words.'],
            ['Ordered phrases', report.topMatch.shingles, 'Five-token shingles measure reused wording and near-exact excerpts.'],
            ['ENI markers', report.topMatch.markers, 'Distinctive rituals, persona details, and craft rules.'],
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
                <li key={hit.id}><span><b>{hit.label}</b><small>{hit.category}</small></span><strong>×{hit.occurrences}</strong></li>
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
