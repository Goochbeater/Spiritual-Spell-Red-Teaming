import { useMemo, useState } from 'react'
import { ExternalLink, Search, X } from 'lucide-react'
import { corpus } from '@/lib/detector'

export function CorpusBrowser() {
  const [query, setQuery] = useState('')
  const [family, setFamily] = useState('ALL')
  const [selectedId, setSelectedId] = useState(corpus.anchorId)
  const families = useMemo(() => ['ALL', ...Array.from(new Set(corpus.variants.map((variant) => variant.family))).sort()], [])
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return corpus.variants.filter((variant) => {
      const familyMatches = family === 'ALL' || variant.family === family
      const queryMatches = !needle || `${variant.name} ${variant.target} ${variant.path}`.toLowerCase().includes(needle)
      return familyMatches && queryMatches
    })
  }, [family, query])
  const selected = filtered.find((variant) => variant.id === selectedId) ?? filtered[0]
  const canonicalSource = selected?.sources.find((source) => source.path === selected.path) ?? selected?.sources[0]

  return (
    <section className="corpus-view" aria-labelledby="corpus-title">
      <div className="view-intro">
        <span className="eyebrow">Knowledge base / commit {corpus.sourceCommit.slice(0, 7)}</span>
        <h1 id="corpus-title">Every known ENI fingerprint.</h1>
        <p>Byte-identical exports are grouped for fair scoring. Every original source path remains attached to its fingerprint.</p>
      </div>
      <div className="corpus-stats">
        <div><strong>{corpus.variantCount}</strong><span>Distinct fingerprints</span></div>
        <div><strong>{corpus.documentCount}</strong><span>Source documents</span></div>
        <div><strong>{families.length - 1}</strong><span>Variant families</span></div>
        <div><strong>1</strong><span>Primary LIME APR anchor</span></div>
      </div>
      <div className="corpus-toolbar">
        <label className="search-field">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Search ENI corpus</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search variant, model, or source path…" />
          {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear corpus search"><X size={16} /></button>}
        </label>
        <label className="family-select">
          <span>Family</span>
          <select value={family} onChange={(event) => setFamily(event.target.value)}>
            {families.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <span className="corpus-result-count" aria-live="polite">{filtered.length} shown</span>
      </div>
      <div className="corpus-workspace">
        <div className="variant-index">
          {filtered.length ? filtered.map((variant) => (
            <button
              type="button"
              key={variant.id}
              className={`variant-row ${selected.id === variant.id ? 'variant-row--active' : ''}`}
              onClick={() => setSelectedId(variant.id)}
            >
              <span className="variant-row__family">{variant.family}</span>
              <span className="variant-row__name">{variant.name}{variant.isAnchor && <b>Primary anchor</b>}</span>
              <span className="variant-row__meta">{variant.target} · {variant.wordCount.toLocaleString()} words</span>
            </button>
          )) : <p className="empty-copy">No fingerprints match this filter.</p>}
        </div>
        {selected ? <article className="variant-detail">
          <div className="variant-detail__header">
            <div>
              <span className="eyebrow">{selected.family} / {selected.hash}</span>
              <h2>{selected.name}</h2>
              <p>{selected.target} · {selected.wordCount.toLocaleString()} words</p>
            </div>
            <a className="button button--line" href={canonicalSource?.url} target="_blank" rel="noreferrer">Open source <ExternalLink size={15} /></a>
          </div>
          <div className="source-paths">
            <h3>{selected.sources.length} known source path{selected.sources.length === 1 ? '' : 's'}</h3>
            <ul>
              {selected.sources.map((source) => <li key={source.path}><a href={source.url} target="_blank" rel="noreferrer">{source.path}<ExternalLink size={12} /></a></li>)}
            </ul>
          </div>
          <div className="source-preview">
            <h3>Fingerprint text</h3>
            <pre>{selected.text}</pre>
          </div>
        </article> : <article className="variant-detail variant-detail--empty">
          <Search size={30} strokeWidth={1.4} aria-hidden="true" />
          <h2>No matching fingerprint</h2>
          <p>Clear the search or choose another family to inspect its source text and provenance.</p>
        </article>}
      </div>
    </section>
  )
}
