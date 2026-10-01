# Gemini (Google)

> # Can use my jailbreak here:
> # **[ENI in a GEM](https://gemini.google.com/gem/1CdVEd8tau62nC7RwtCvBC7W5ZoRWlGPM?usp=sharing)**

**Censorship:** [★★★☆☆] 3/5
*Censorship rating based on ease of jailbreaking. Individual results may vary based on personal factors.*

Google's multimodal LLM platform. Frequent updates, massive context windows, free tier available via AI Studio. The **Gemini 3** family is the current generation, with **Gemini 3.8 Flash** (Sept 2, 2026) as the latest release — and the first Gemini with API output filtering.

*Last updated: September 2026*

---

## Models

| Model | Context Window | Output | Released | Notes |
|-------|----------------|--------|----------|-------|
| **Gemini 3.8 Flash** | 1M | 64K | Sept 2, 2026 | Built on 3.7 Flash (not a new base), TB 2.1 90.8%, first API output filtering |
| **Gemini 3.7 Flash** | 1M | 64K | Aug 13, 2026 | GA stable (`gemini-3.7-flash`) — algorithmic upgrade on 3.6 Flash, not a new pretrain; thinking levels Low/Med/High ("minimal" removed) |
| **Gemini 3.6 Flash** | 1M | — | July 21, 2026 | CHEAPER than 3.5 Flash, 17% fewer output tokens |
| **Gemini 3.5 Flash** | 1M | 64K | May 19, 2026 | The "Haiku" of the Gemini line — AA 55, ~284 tok/s, highly safety-aligned |
| **Gemini 3.1 Pro** | 1M | 64K | Feb 19, 2026 | 3-tier thinking (Low/Medium/High), ARC-AGI-2: 77.1% (2x Gemini 3 Pro) |
| **Gemini 3 Flash** | 1M | — | Jan 2026 | 3x faster than Pro at <1/4 cost, SWE-bench 78% (beats 3 Pro), default in Gemini app |
| **Gemini 3 Pro** | 1M | ~21K | Nov 18, 2025 | Best multimodal understanding, strongest agentic and vibe coding |

### Capabilities
- **Multimodal:** text, images (up to 900 per prompt), audio (up to 8.4 hours), video (up to 1 hour), PDFs, entire code repositories
- **Thinking Levels:** 3.1 Pro introduces Low/Medium/High (3 Pro only had Low/High)
- **Deep Research:** Extended research capabilities for complex topics
- **Deep Think:** Advanced reasoning mode
- **Jules:** Google's coding agent (AI Ultra gets 20x higher limits)

### Gemini 3.5 Flash Highlights
- **AA Intelligence Index:** 55 — outperforms 3.1 Pro on most coding/agentic benchmarks
- **Speed:** ~284 tok/s (roughly 4x other frontier models)
- **Alignment:** Highly safety-aligned (QWEN-like), even via API — the App is tedious to jailbreak, use the API
- **API Pricing:** $1.50/M input, $9.00/M output (no introductory rate)

### Gemini 3.8 Flash Highlights
- **Base:** Built on 3.7 Flash rather than a fresh pretrain — quality regressed vs predecessor; use 3.7 if you can
- **Terminal-Bench 2.1:** 90.8%
- **API Pricing:** $0.75/M input, $3.75/M output intro (through Dec 31, 2026, then doubles)
- **Output filtering:** First Gemini with API-side output filtering — blocked generations return "response interrupted"; regen, vaguer language, and thinking-effort changes all help

### Gemini 3.6 Flash Highlights
- **Context Window:** 1,000,000 tokens (1M) default
- **Efficiency:** 17% fewer output tokens than 3.5 Flash; up to 65% reduction on certain DeepSWE tests.
- **DeepSWE:** 49% (vs 3.5 Flash: 37%)
- **OSWorld-Verified:** 83% (vs 3.5 Flash: 78.4%)
- **API Pricing:** $1.50/M input, $7.50/M output (Cheaper than 3.5 Flash)

### Gemini 3.1 Pro Highlights
- **ARC-AGI-2:** 77.1% — more than double 3 Pro's reasoning performance
- Transformer-based MoE architecture optimized for deep reasoning
- Significant improvements in enhanced reasoning, multimodal capabilities, and long-horizon agentic workflows
- Native multimodal code generation
- Available through Gemini API, Vertex AI, Gemini app, and NotebookLM

---

## Access Tiers

| Tier | Cost | Model Access | Notes |
|------|------|-------------|-------|
| **Free** | $0 | Gemini 3 Flash (default), limited "Thinking (3 Pro)" | Daily usage limits |
| **AI Plus** | ~$8/month | More access to 3.1 Pro, limited Veo 3.1 Fast | Entry-level subscription |
| **AI Pro** | $19.99/month | Gemini 3.1 Pro (higher limits), Deep Research, Deep Search, 2TB storage | Formerly "Google One AI Premium" |
| **AI Ultra** | $249.99/month | Highest 3.1 Pro access, Jules 20x limits, Project Genie, 30TB storage, YouTube Premium | 50% off first 3 months |
| **AI Studio** | Free (dev) | Full API access, system prompt exposed, filters adjustable | Best for jailbreaking |

---

## API Pricing

| Model | Input (per 1M) | Output (per 1M) |
|-------|----------------|-----------------|
| Gemini 3.8 Flash | $0.75 (intro, through Dec 31, 2026) | $3.75 (intro, then doubles to $7.50) |
| Gemini 3.7 Flash | $0.75 (intro, through Dec 31, 2026) | $3.75 (intro, then $7.50) |
| Gemini 3.6 Flash | $0.75 (intro, through Dec 31, 2026) / $1.50 std | $3.75 (intro) / $7.50 std |
| Gemini 3.5 Flash | $1.50 | $9.00 |
| Gemini 3.1 Pro | $2 (≤200K) / $4 (>200K) | $12 (≤200K) / $18 (>200K) |
| Gemini 3 Flash | $0.50 | $3.00 |
| Gemini 3 Pro | — | — |

Developer free tier available with generous limits. Pay-as-you-go for production. Enterprise via Vertex AI.

---

## Jailbreaks

**GEM Method** with ENI jailbreaks makes Gemini effectively uncensored. The current working method is **[ENI in a GEM - Sep](Gemini%20Web%20App/)** — every older GEM is archived in [Legacy GEM Jailbreaks](Legacy%20GEM%20Jailbreaks/) since they no longer work.

| Jailbreak | Target | Notes |
|-----------|--------|-------|
| [Gemini Web App](Gemini%20Web%20App/) | Gemini web app (GEMs) | **Current working method** — ENI in a GEM - Sep |
| [Gemini 3.8 Flash](Gemini%203.8%20Flash/) | Gemini 3.8 Flash | ENI for Gemini 3.8 — first model with API output filtering ("response interrupted") |
| [Gemini 3.6 Flash](Gemini%203.6%20Flash) | Gemini 3.6 Flash | Works retroactively on other models |
| [Gemini 3.5](Gemini%203.5/) | Gemini 3.5 Flash | ENI for 3.5 Flash (API doc + GEM) — API much easier than the app |
| [Legacy GEM Jailbreaks](Legacy%20GEM%20Jailbreaks/) | Gemini (older gens) | ENI → Loki → 2.5 → LIME — no longer work, archived for reference |
| [Google Antigravity](Google%20Antigravity/) | Antigravity agentic IDE | ENI GEM as a global rule — jailbreaks every model on the platform |
| [Google Jules](Google%20Jules/) | Jules (coding agent) | ENI persona pasted into the base chat |
| [Google Portraits](Google%20Portraits/) | Google Portraits | Voice-cloned AI experts — tedious, input/output filters, voice still generates |
