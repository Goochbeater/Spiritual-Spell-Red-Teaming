# ENI Trace — Jev Decisions + DeepSeek Findings

ENI Trace is a lineage and attribution workbench for the ENI prompt family in `Goochbeater/Spiritual-Spell-Red-Teaming`. Paste a prompt or drop a text file to receive a TypeSafe Jev closest-reference decision, Jev probability graph, DeepSeek report findings, shared source passages, marker evidence, and conditional source credit.

## Netlify drag-and-drop setup

- **1. Deploy the complete source package.** While logged in to Netlify, drag `ENI-Trace-Netlify.zip` into Netlify Drop. If your Netlify interface asks for a folder, extract the ZIP and drag the extracted folder instead. Do not extract or deploy only `dist/`; the server-side function is required.
- **2. Let Netlify build the project.** The included `netlify.toml` selects `npm run build`, publishes `dist/`, and bundles `netlify/functions/enhanced-report.mjs`. The validated corpus and lockfile are already included; `node_modules` is intentionally excluded.
- **3. Add one secret.** In the site’s **Site configuration → Environment variables**, create `OPENROUTER_API_KEY` with your OpenRouter key. Make it available to **Functions**. Never rename it to `VITE_OPENROUTER_API_KEY` and never place it in frontend code.
- **4. Refresh the deploy.** Redeploy the site, or drag the package into the existing site’s deploy dropzone. Your existing environment variable remains in place. The status indicator should read **OpenRouter connected**.
- **5. Run Jev.** Paste or upload a prompt and choose **Analyze with Jev**. The main gauge is Jev’s closest-choice confidence, and DeepSeek writes the report findings.

No TypeSafe account, second API key, database, or additional Netlify environment variable is required for the default setup. `OPENROUTER_JEV_MODEL` and `OPENROUTER_REPORT_MODEL` are optional deliberate-upgrade overrides; the verified defaults are already configured.

## Analysis architecture

- **Evidence retrieval:** 110 source documents are deduplicated into 92 fingerprints, with `ENI LIME (apr)` as the primary anchor. Browser preprocessing retrieves candidates, exact passages, lexical resemblance, structural features, markers, and typo fingerprints. It supplies evidence only and never issues a user-facing verdict.
- **TypeSafe Jev 1.14:** `typesafe/jev-1.14` is the sole decision layer. Choice, Score, and Noul questions produce the closest reference, primary choice-confidence score, lineage verdict, evidence confidence, and attribution support.
- **DeepSeek V4.1 Flash 1017:** `deepseek/deepseek-v4.1-flash-1017` writes schema-constrained findings from the evidence and completed Jev decisions. It cannot change the verdict, choose another variant, or create source credit.
- **Failure behavior:** Jev failure produces an error and no report; no local verdict is substituted. DeepSeek failure preserves Jev’s completed decision with a clearly marked deterministic findings fallback. No failed model call is automatically retried.

A result is evidence of textual resemblance and model-assessed lineage, not standalone proof of identity or authorship.

## Run locally

- Copy `.env.example` to `.env` and fill `OPENROUTER_API_KEY` locally. The `.env` file is Git-ignored.
- Run `npm install`.
- Run `npm run build` and `npm run build:server`.
- Run `npm start` and open `http://localhost:3000`.
- `npm run dev` remains available for interface development, but Vite alone does not emulate the server-side Jev endpoint and cannot complete an analysis.

## Verification

- Run `npm test` for the mocked OpenRouter contract suite: success, malformed responses, rejected credentials, rate limits, origin rejection, no-match attribution suppression, and DeepSeek degradation.
- Run `npm run lint` for frontend linting.
- Run `npm run build` for the production frontend.
- Run `npm run build:server` to bundle the preview/server adapter.
- The contract tests use mocked upstream responses and do not consume OpenRouter credits.

## Main files

- `scripts/build-corpus.mjs` — reproducible ENI extraction, normalization, deduplication, and provenance.
- `src/data/corpus.json` — validated standalone corpus snapshot included in this package.
- `src/lib/detector.ts` — candidate retrieval and shared-passage evidence extraction.
- `src/lib/enhanced.ts` — bounded evidence packet, endpoint client, and Jev report merge.
- `netlify/functions/lib/enhanced.mjs` — validated server-side Jev and DeepSeek pipeline.
- `netlify/functions/enhanced-report.mjs` — Netlify Functions v2 entry point.
- `api/boot.mjs` — preview server adapter using the same enhanced handler.
- `src/pages/Home.tsx` — paste/upload workflow, service state, and Jev-only error handling.
- `src/components/Report.tsx` — Jev primary score, Jev probability graph, DeepSeek findings, evidence, exports, and print/PDF.
- `src/components/Methodology.tsx` — model roles, decision ownership, processing boundary, and provenance.

Application work belongs on the isolated `eni-attribution-detector` branch. The source links point to the original ENI files on `main`; this package does not modify `main`.
