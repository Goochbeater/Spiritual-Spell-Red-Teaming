# ENI Trace — Jev + DeepSeek Enhanced

ENI Trace is a lineage and attribution workbench for the ENI prompt family in `Goochbeater/Spiritual-Spell-Red-Teaming`. Paste a prompt or drop a text file to produce a ranked comparison chart, shared passages, marker evidence, typed Jev decisions, a structured DeepSeek narrative, and suggested source credit.

## Netlify drag-and-drop setup

- **1. Deploy the complete source package.** While logged in to Netlify, drag `ENI-Trace-Netlify.zip` into Netlify Drop. If your Netlify interface asks for a folder, extract the ZIP and drag the extracted folder instead. Do not extract or deploy only `dist/`; the server-side function is required for enhanced mode.
- **2. Let Netlify build the project.** The included `netlify.toml` selects `npm run build`, publishes `dist/`, and bundles `netlify/functions/enhanced-report.mjs`. The validated corpus and lockfile are already included; `node_modules` is intentionally excluded.
- **3. Add one secret.** In the new site’s **Site configuration → Environment variables**, create `OPENROUTER_API_KEY` with your OpenRouter key. Make it available to **Functions**. Never rename it to `VITE_OPENROUTER_API_KEY` and never place it in frontend code.
- **4. Refresh the deploy.** Redeploy the site, or drag the same package into the site’s deploy dropzone again. The status indicator should read **OpenRouter connected**.
- **5. Choose a mode.** **Enhanced** sends a bounded prompt excerpt and comparison evidence to OpenRouter for Jev decisions and DeepSeek report writing. **Local** keeps the complete analysis in the browser and requires no key.

No TypeSafe account, second API key, database, or Netlify environment variable is required for the default setup. `OPENROUTER_JEV_MODEL` and `OPENROUTER_REPORT_MODEL` are optional deliberate-upgrade overrides; the verified defaults are already configured.

## Analysis architecture

- **Local evidence retrieval:** 110 source documents deduplicated into 92 fingerprints, with `ENI LIME (apr)` as the primary anchor.
- **Deterministic local score:** 38% ordered five-token shingles, 27% IDF-weighted lexical cosine, 22% distinctive ENI markers, 8% document structure, and 5% rare typo fingerprints. LIME APR receives a 3.5% local tie-break.
- **TypeSafe Jev 1.14:** `typesafe/jev-1.14` answers Choice, Score, and Noul questions for closest reference, lineage, evidence confidence, and attribution support. Its probabilities remain separate from local alignment percentages.
- **DeepSeek V4.1 Flash 1017:** `deepseek/deepseek-v4.1-flash-1017` writes a schema-constrained narrative from the evidence and completed Jev decisions. It cannot change the verdict, choose another variant, or create source credit.
- **Failure behavior:** Jev failure produces an explicit local fallback. DeepSeek failure preserves Jev’s completed decision with a clearly marked deterministic narrative. No failed model call is automatically retried.

A result is evidence of textual resemblance and model-assessed lineage, not standalone proof of identity or authorship.

## Run locally

- **Browser-only development:**
  - Run `npm install`.
  - Run `npm run dev`.
  - Open the shown local URL. Local mode is fully functional; Vite alone does not emulate the Netlify function.
- **Full enhanced local server:**
  - Copy `.env.example` to `.env` and fill `OPENROUTER_API_KEY` locally. The `.env` file is Git-ignored.
  - Run `npm run build`.
  - Run `npm run build:server`.
  - Run `npm start` and open `http://localhost:3000`.

## Verification

- Run `npm test` for the mocked OpenRouter contract suite: success, malformed responses, rejected credentials, rate limits, origin rejection, no-match attribution suppression, and DeepSeek degradation.
- Run `npm run lint` for frontend linting.
- Run `npm run build` for the production frontend.
- Run `npm run build:server` to bundle the preview/server adapter.
- The contract tests use mocked upstream responses and do not consume OpenRouter credits.

## Main files

- `scripts/build-corpus.mjs` — reproducible ENI extraction, normalization, deduplication, and provenance.
- `src/data/corpus.json` — validated standalone corpus snapshot included in this package.
- `src/lib/detector.ts` — local retrieval, scoring, verdict calibration, and shared-passage extraction.
- `src/lib/enhanced.ts` — bounded evidence packet, endpoint client, and enhanced/local report merge.
- `netlify/functions/lib/enhanced.mjs` — validated server-side Jev and DeepSeek pipeline.
- `netlify/functions/enhanced-report.mjs` — Netlify Functions v2 entry point.
- `api/boot.mjs` — preview server adapter using the same enhanced handler.
- `src/pages/Home.tsx` — paste/upload workflow, mode selection, privacy state, and fallback.
- `src/components/Report.tsx` — Jev probabilities, narrative, local graph, evidence, exports, and print/PDF.
- `src/components/Methodology.tsx` — local formula, model roles, processing boundary, and provenance.

Application work belongs on the isolated `eni-attribution-detector` branch. The source links point to the original ENI files on `main`; this package does not modify `main`.
