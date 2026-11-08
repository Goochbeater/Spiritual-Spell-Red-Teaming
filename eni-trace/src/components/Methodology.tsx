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
        <span className="eyebrow">Local retrieval / TypeSafe Jev / DeepSeek</span>
        <h1 id="method-title">A verdict you can cross-examine.</h1>
        <p>ENI Trace separates evidence retrieval, structured decisions, and narrative writing. Each layer has one job, and the source evidence remains visible in the final report.</p>
      </div>
      <div className="method-principles">
        <div><Fingerprint aria-hidden="true" /><h2>Retrieve locally</h2><p>Normalize Unicode, case, punctuation, whitespace, and token boundaries, then compare every distinct ENI fingerprint in the browser.</p></div>
        <div><Braces aria-hidden="true" /><h2>Decide with Jev</h2><p>TypeSafe Jev receives a bounded prompt excerpt and the leading evidence packets. Choice, Score, and Noul questions return typed probabilities—not generated prose.</p></div>
        <div><Scale aria-hidden="true" /><h2>Explain with DeepSeek</h2><p>DeepSeek V4.1 Flash 1017 writes a schema-constrained narrative. It cannot change Jev’s verdict, select another variant, or create source credit.</p></div>
      </div>

      <div className="method-two-column method-model-section">
        <div>
          <div className="section-heading"><span>01 / Enhanced pipeline</span><h2>Two models, one key</h2></div>
          <div className="model-stack">
            <div><span>Decision model</span><h3>TypeSafe Jev 1.14</h3><code>typesafe/jev-1.14</code><p>Chooses the closest candidate or no match, grades lineage and evidence confidence, and estimates whether attribution is supported.</p><a href="https://openrouter.ai/docs/guides/community/jev" target="_blank" rel="noreferrer">OpenRouter Jev documentation <ArrowUpRight size={14} /></a></div>
            <div><span>Report model</span><h3>DeepSeek V4.1 Flash 1017</h3><code>deepseek/deepseek-v4.1-flash-1017</code><p>Explains only the supplied evidence and completed Jev decisions through a structured report schema.</p><a href="https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017" target="_blank" rel="noreferrer">OpenRouter model record <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
        <div>
          <div className="section-heading"><span>02 / Processing boundary</span><h2>Private locally, explicit remotely</h2></div>
          <div className="provenance-block">
            <FileSearch aria-hidden="true" />
            <p><b>Local mode</b> keeps the prompt and corpus in the browser. <b>Enhanced mode</b> sends a bounded prompt excerpt, candidate excerpts, retrieved passages, marker evidence, and local measurements to OpenRouter through the server-side function.</p>
            <p>The single <code>OPENROUTER_API_KEY</code> stays in the Netlify function environment. It is never embedded in browser JavaScript or placed in a <code>VITE_*</code> variable.</p>
            <p>No failed model call is automatically retried. If enhanced mode fails, the interface labels the result as a local fallback rather than presenting it as Jev output.</p>
          </div>
        </div>
      </div>

      <div className="method-weights">
        <div className="section-heading"><span>03 / Local formula</span><h2>What the alignment score contains</h2></div>
        <div className="weight-list">
          {weights.map((item) => (
            <div className="weight-row" key={item.name}>
              <strong>{item.weight}%</strong>
              <div><h3>{item.name}</h3><p>{item.text}</p></div>
              <span aria-hidden="true"><i style={{ transform: `scaleX(${item.weight / 38})` }} /></span>
            </div>
          ))}
        </div>
        <p className="formula-note"><b>Retrieval calibration.</b> Near-total shingle containment can establish near-exact reuse for a verbatim excerpt, even when the full source is longer. Separately, three or more independent marker groups plus lexical agreement can support a reworked-lineage verdict when exact phrases have been paraphrased away. These local percentages are not Jev probabilities.</p>
      </div>
      <div className="method-two-column">
        <div>
          <div className="section-heading"><span>04 / Local decision bands</span><h2>Reading the alignment verdict</h2></div>
          <dl className="decision-bands">
            <div><dt>88–100</dt><dd><b>Near-exact reuse</b>Extensive ordered phrase and lexical agreement.</dd></div>
            <div><dt>68–87.9</dt><dd><b>Strong lineage</b>Substantial shared language and markers support attribution.</dd></div>
            <div><dt>43–67.9</dt><dd><b>Likely reworked</b>Enough residue survives editing to indicate an ENI ancestor.</dd></div>
            <div><dt>24–42.9</dt><dd><b>Partial signals</b>Some overlap exists, but the variant assignment is uncertain.</dd></div>
            <div><dt>0–23.9</dt><dd><b>No reliable match</b>The corpus connection is too weak for an attribution claim.</dd></div>
          </dl>
        </div>
        <div>
          <div className="section-heading"><span>05 / Provenance</span><h2>What the corpus contains</h2></div>
          <div className="provenance-block">
            <FileSearch aria-hidden="true" />
            <p>The comparison base was extracted from <b>{corpus.repository}</b> at source commit <code>{corpus.sourceCommit.slice(0, 12)}</code>. It contains {corpus.documentCount} source documents collapsed into {corpus.variantCount} unique fingerprints.</p>
            <p><b>ENI LIME (apr)</b> is the primary anchor. Its 3.5% local tie-break recognizes the designated reference without overwhelming direct evidence for another variant.</p>
            <p>Scores and typed decisions express textual resemblance, not proof of identity or authorship. Sparse marker hits and heavily paraphrased text require particular caution.</p>
            <a href={`https://github.com/${corpus.repository}/tree/eni-attribution-detector`} target="_blank" rel="noreferrer">View the isolated working branch <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
