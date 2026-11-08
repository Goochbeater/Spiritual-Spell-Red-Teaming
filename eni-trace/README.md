# ENI Trace

ENI Trace is a browser-based lineage and attribution workbench for the ENI prompt family in `Goochbeater/Spiritual-Spell-Red-Teaming`. Paste a prompt or drop a text file and JEV produces an explainable report with a ranked comparison chart, shared passages, marker evidence, decision reasons, and suggested credit.

## Corpus

- Source repository: `Goochbeater/Spiritual-Spell-Red-Teaming`
- Source commit: `e2cef7707a6734cfbd3497d467651405fc97fe23`
- Working branch: `eni-attribution-detector`
- Primary anchor: `ENI LIME (apr)`
- 110 source documents, deduplicated into 92 fingerprints while retaining every source path

The generated corpus lives at `src/data/corpus.json`. In this repository branch, `predev` and `prebuild` automatically create it from the sibling `Jailbreak-Guide` documents; no generated database needs to be committed. Standalone application exports already include the generated file. Source links point to the original files on `main`; application work remains isolated on `eni-attribution-detector`.

## JEV decision model

JEV is deterministic and runs entirely in the browser. Submitted prompts are not sent to a server or external AI API.

The weighted score combines:

- 38% ordered five-token shingles, including input containment and Dice similarity
- 27% IDF-weighted lexical cosine similarity
- 22% distinctive ENI marker alignment
- 8% structural similarity
- 5% rare typo fingerprints

ENI LIME APR receives a 3.5% anchor tie-break. High-containment verbatim excerpts and marker-rich paraphrases have separate calibrated decision rules. Reports expose the evidence and limitations; a similarity score is not proof of authorship by itself.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. It includes a web app manifest, service worker, and an installable icon.

## Netlify Drop

Zip the **contents** of `dist/` with `index.html` at the archive root, then drop the ZIP into Netlify Drop. No build command, environment variables, or server functions are required. The included `_redirects` file provides SPA fallback handling, and `_headers` supplies asset and service-worker cache rules.

## Main files

- `scripts/build-corpus.mjs` — reproducible ENI extraction, normalization, deduplication, and provenance
- `src/lib/detector.ts` — normalization, corpus preparation, scoring, verdicts, and shared-passage extraction
- `src/pages/Home.tsx` — paste/upload workflow and sample controls
- `src/components/Report.tsx` — report, Markdown export, clipboard actions, and print/PDF
- `src/components/CorpusBrowser.tsx` — searchable reference corpus
- `src/components/Methodology.tsx` — formula, decision bands, and provenance
