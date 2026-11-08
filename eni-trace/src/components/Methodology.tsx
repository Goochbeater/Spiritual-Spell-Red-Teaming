import { ArrowUpRight, Braces, FileSearch, Fingerprint, Scale } from 'lucide-react'
import { corpus } from '@/lib/detector'

const weights = [
  { name: 'Ordered five-token shingles', weight: 38, text: 'Finds reused passages while balancing input coverage against reference coverage.' },
  { name: 'IDF-weighted lexical cosine', weight: 27, text: 'Rewards rare shared vocabulary instead of generic words such as “prompt” or “response”.' },
  { name: 'Distinctive ENI markers', weight: 22, text: 'Measures persona rituals, injection handling, voice, and craft instructions.' },
  { name: 'Document structure', weight: 8, text: 'Compares headings, lists, XML tags, code fences, tables, and persona-term density.' },
  { name: 'Typo fingerprints', weight: 5, text: 'Looks for rare misspellings and malformed tags inherited from source documents.' },
]

export function Methodology() {
  return (
    <section className="method-view" aria-labelledby="method-title">
      <div className="view-intro view-intro--method">
        <span className="eyebrow">JEV / Explainable decision model</span>
        <h1 id="method-title">A verdict you can cross-examine.</h1>
        <p>JEV is a deterministic decision model. The same text and corpus always produce the same ranking, and every score resolves into visible evidence.</p>
      </div>
      <div className="method-principles">
        <div><Fingerprint aria-hidden="true" /><h2>Fingerprint</h2><p>Normalize Unicode, case, punctuation, whitespace, and token boundaries without deleting the original source text.</p></div>
        <div><Braces aria-hidden="true" /><h2>Compare</h2><p>Measure the submitted prompt against each of {corpus.variantCount} distinct references rather than relying on an ENI keyword check.</p></div>
        <div><Scale aria-hidden="true" /><h2>Decide</h2><p>Combine five signals, apply the LIME APR anchor tie-break, and calibrate the verdict against evidence strength and runner-up margin.</p></div>
      </div>
      <div className="method-weights">
        <div className="section-heading"><span>01 / Formula</span><h2>What the score contains</h2></div>
        <div className="weight-list">
          {weights.map((item) => (
            <div className="weight-row" key={item.name}>
              <strong>{item.weight}%</strong>
              <div><h3>{item.name}</h3><p>{item.text}</p></div>
              <span aria-hidden="true"><i style={{ transform: `scaleX(${item.weight / 38})` }} /></span>
            </div>
          ))}
        </div>
        <p className="formula-note"><b>Decision calibration.</b> Near-total shingle containment can establish near-exact reuse for a verbatim excerpt, even when the full source is longer. Separately, three or more independent marker groups plus lexical agreement can support a reworked-lineage verdict when exact phrases have been paraphrased away.</p>
      </div>
      <div className="method-two-column">
        <div>
          <div className="section-heading"><span>02 / Decision bands</span><h2>Reading the verdict</h2></div>
          <dl className="decision-bands">
            <div><dt>88–100</dt><dd><b>Near-exact reuse</b>Extensive ordered phrase and lexical agreement.</dd></div>
            <div><dt>68–87.9</dt><dd><b>Strong lineage</b>Substantial shared language and markers support attribution.</dd></div>
            <div><dt>43–67.9</dt><dd><b>Likely reworked</b>Enough residue survives editing to indicate an ENI ancestor.</dd></div>
            <div><dt>24–42.9</dt><dd><b>Partial signals</b>Some overlap exists, but the variant assignment is uncertain.</dd></div>
            <div><dt>0–23.9</dt><dd><b>No reliable match</b>The corpus connection is too weak for an attribution claim.</dd></div>
          </dl>
        </div>
        <div>
          <div className="section-heading"><span>03 / Provenance</span><h2>What JEV knows</h2></div>
          <div className="provenance-block">
            <FileSearch aria-hidden="true" />
            <p>The comparison base was extracted from <b>{corpus.repository}</b> at source commit <code>{corpus.sourceCommit.slice(0, 12)}</code>. It contains {corpus.documentCount} source documents collapsed into {corpus.variantCount} unique fingerprints.</p>
            <p><b>ENI LIME (apr)</b> is the primary anchor. Its 3.5% tie-break recognizes the designated reference without overwhelming direct evidence for another variant.</p>
            <p>Scores express textual resemblance, not proof of identity or authorship. Short excerpts and heavily paraphrased text receive lower evidence confidence.</p>
            <a href={`https://github.com/${corpus.repository}/tree/eni-attribution-detector`} target="_blank" rel="noreferrer">View the isolated working branch <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
