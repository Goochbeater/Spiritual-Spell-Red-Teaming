import { ArrowUpRight, Braces, FileSearch, Fingerprint, Scale } from 'lucide-react'
import { corpus } from '@/lib/detector'

export function Methodology() {
  return (
    <section className="method-view" aria-labelledby="method-title">
      <div className="view-intro view-intro--method">
        <span className="eyebrow">TypeSafe Jev decisions / DeepSeek findings</span>
        <h1 id="method-title">A verdict you can cross-examine.</h1>
        <p>ENI Trace separates evidence retrieval, structured decisions, and report writing. Jev is the sole decision layer; DeepSeek explains its decision without overriding it.</p>
      </div>
      <div className="method-principles">
        <div><Fingerprint aria-hidden="true" /><h2>Retrieve evidence</h2><p>Browser preprocessing normalizes the sample and retrieves candidate references, exact passages, markers, lexical resemblance, structural features, and typo fingerprints. It does not issue a verdict.</p></div>
        <div><Braces aria-hidden="true" /><h2>Decide with Jev</h2><p>TypeSafe Jev receives a bounded prompt excerpt and the leading evidence packets. Choice, Score, and Noul questions return typed probabilities—not generated prose.</p></div>
        <div><Scale aria-hidden="true" /><h2>Explain with DeepSeek</h2><p>DeepSeek V4.1 Flash 1017 writes the schema-constrained report findings. It cannot change Jev’s verdict, select another variant, or create source credit.</p></div>
      </div>

      <div className="method-two-column method-model-section">
        <div>
          <div className="section-heading"><span>01 / Decision pipeline</span><h2>Two models, one key</h2></div>
          <div className="model-stack">
            <div><span>Decision model</span><h3>TypeSafe Jev 1.14</h3><code>typesafe/jev-1.14</code><p>Chooses the closest candidate or no match, grades lineage and evidence confidence, and estimates whether attribution is supported. Its closest-choice confidence is the report’s primary score.</p><a href="https://openrouter.ai/docs/guides/community/jev" target="_blank" rel="noreferrer">OpenRouter Jev documentation <ArrowUpRight size={14} /></a></div>
            <div><span>Report model</span><h3>DeepSeek V4.1 Flash 1017</h3><code>deepseek/deepseek-v4.1-flash-1017</code><p>Writes the summary, decision findings, evidence assessment, limitations, and attribution rationale from the completed Jev decision and supplied source evidence.</p><a href="https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017" target="_blank" rel="noreferrer">OpenRouter model record <ArrowUpRight size={14} /></a></div>
          </div>
        </div>
        <div>
          <div className="section-heading"><span>02 / Processing boundary</span><h2>Explicit external analysis</h2></div>
          <div className="provenance-block">
            <FileSearch aria-hidden="true" />
            <p>The app sends a bounded prompt excerpt, candidate excerpts, retrieved passages, marker evidence, and retrieval measurements to OpenRouter through the server-side function. Retrieval prepares evidence only; it never appears as a second decision.</p>
            <p>The single <code>OPENROUTER_API_KEY</code> stays in the Netlify function environment. It is never embedded in browser JavaScript or placed in a <code>VITE_*</code> variable.</p>
            <p>No failed model call is automatically retried. If Jev fails, no report or substitute verdict is issued. If DeepSeek fails after Jev succeeds, the completed Jev decision remains visible with a clearly marked deterministic findings fallback.</p>
          </div>
        </div>
      </div>

      <div className="method-two-column">
        <div>
          <div className="section-heading"><span>03 / Decision ownership</span><h2>What belongs to Jev</h2></div>
          <div className="provenance-block">
            <Braces aria-hidden="true" />
            <p><b>Closest reference and choice confidence.</b> The main gauge and candidate graph come directly from Jev’s typed Choice answer.</p>
            <p><b>Lineage and attribution.</b> Jev alone grades the ENI lineage scale, estimates attribution support, and assesses evidence confidence. The credit line appears only when Jev’s decision meets the report’s thresholds.</p>
          </div>
        </div>
        <div>
          <div className="section-heading"><span>04 / Corpus provenance</span><h2>What the evidence contains</h2></div>
          <div className="provenance-block">
            <FileSearch aria-hidden="true" />
            <p>The comparison base was extracted from <b>{corpus.repository}</b> at source commit <code>{corpus.sourceCommit.slice(0, 12)}</code>. It contains {corpus.documentCount} source documents collapsed into {corpus.variantCount} unique fingerprints.</p>
            <p><b>ENI LIME (apr)</b> is the designated primary anchor. Candidate excerpts and exact shared passages remain inspectable so Jev’s selection can be checked against the source.</p>
            <p>Jev probabilities express model-assessed textual lineage, not proof of identity or authorship. Sparse markers and heavily paraphrased text require particular caution.</p>
            <a href={`https://github.com/${corpus.repository}/tree/eni-attribution-detector`} target="_blank" rel="noreferrer">View the isolated working branch <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
