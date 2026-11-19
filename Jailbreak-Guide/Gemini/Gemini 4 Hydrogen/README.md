# Gemini 4 Hydrogen

We are eating so good right now, truly spoiled — they went from shit releases to solid awesome sauce!

**Cons:** Hard filtering, but nothing impossible imo.

**Pros:** So much better than **Gemini 3.8 Flash**, what a useless model. Amazing writing quality at a fraction of Carbon/Argon pricing, and it actually finishes the job — 2.5x faster task completion at the default setting.

Essentially uncensored with my jailbreak, didn't get any refusals on any form of taboo NSFW erotica.

## Jailbreaking The Model

*Add this to a project via the Gemini web app, or to the system prompt area via API or AI Studio*

> **[Wombo CoT Hijack](Wombo%20CoT%20Hijack.txt)**

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Google DeepMind |
| Model ID | gemini-4-hydrogen |
| Naming | Google calls it Hydrogen; the posts I could see never say "Gemini 4 Flash" (that was the leak name) |
| Positioning | Fast tier for everyday coding and agent execution; Carbon/Argon handle the hardest long-horizon reasoning |
| Architecture | Not disclosed; the model card says it is adapted from Gemini 4 Carbon |
| Parameters | Not disclosed |
| Context Window | 1,048,576 tokens (model card: shared across input + thinking + output; blog: 1M input and up to 1M output) |
| Max Output | 65,536 per synchronous call (32,768 over REST); up to the full window via "long decode" |
| Knowledge Cutoff | March 2026 |
| Input / Output | Text, image, video, audio, PDF in / text out (no image gen, audio gen or Live API) |
| Thinking Levels | low, medium, high (API default), xhigh — "minimal" is rejected |
| Tools | Function calling, structured outputs, code execution, computer use, file search, URL context, Search + Maps grounding |
| Speed | 2.5x faster task completion than 3.8 Flash at default (Google); no tok/s figure published |
| AA Intelligence Index | 51 at default high / 54 at xhigh (Argon: 50); Google doesn't state which index version |

### Benchmarks (DeepMind model card — highest thinking, pass@1)

| Benchmark | Hydrogen | Field |
|---|---|---|
| SWE-sweep | 13.5% | Sonnet 5.5: 3.1%, GPT-6.1 Terra: 5.8% |
| Terminal-Bench 4.1 | 57.0% | Sonnet 5.5 63.9%, 3.8 Flash 18.2% |
| Agents' Last Exam v1.1 | 71.6% | Sonnet 5.5 60.4%, Terra 69.8% |
| AutomationBench-AA | 76.1% | Sonnet 5.5 71.8%, Terra 60.2% |
| Vending-Bench 2 | $14,549 | Sonnet 5.5 $11,165, Terra $9,107 |
| OSWorld-2.1 (offline) | 77.6% | Sonnet 5.5 83.9%, Terra 74.2% |
| MKA (multimodal knowledge agent) | 53.4% | Sonnet 5.5 52.0%, Terra 43.8% |
| Chartography | 66.6% | Sonnet 5.5 61.6%, Terra 63.2% |
| Terminal-Bench-Science 0.1 | 51.4% | Sonnet 5.5 59.9%, Terra 58.3% |
| HLE-Diamond | 58.8% | Sonnet 5.5 53.3%, Terra 47.3% |

**Scorecard:** wins 7 of 10 — Sonnet 5.5 takes terminal, computer use and science.

**Other claims:** Agent Arena #5; Vals Tax Agent Bench 52.3% (#1); Vals Legal Research 55.8% (tied #1); >5x fewer fabricated claims than 3.8 Flash; partners saw 2–2.8x faster and 12–23% fewer tokens.

**Orchestrator (Antigravity):** Carbon plans, Hydrogen executes — near Carbon-only success with 24% less quota and 19% faster. Google's own advice is to pair them: let Carbon untangle the hard bug, hand the edits and test runs to Hydrogen. Model switching inside one conversation works via `previous_interaction_id` with no schema changes.

### Pricing (paid, per 1M tokens)

| Tier | Input | Output |
|---|---|---|
| Standard | $1.50 | $7.50 (flat across full context; output includes thinking tokens) |
| Cached input | $0.075 | — (implicit caching, 95% discount, prompts ≥4,096 tokens) |
| Batch / Flex | $0.75 | $3.75 |
| Priority | $2.70 | $13.50 |
| Non-global regions | $1.65 | $8.25 |

Free tier exists with rate limits — and free-tier content is used to improve Google products. That's 2x what 3.8 Flash costs today ($0.75 / $3.75), and exactly what 3.8 Flash will cost from January 1, 2027.

### Safety / Reliability

- **Frontier risk:** no material capability jump over Argon; below critical levels for CBRN and cyber, but reaches alert thresholds in both
- **Improvements:** agent overreach down up to 81%, 2.3x more resilient on Gray Swan prompt injection, 96.7% honesty rate (internal)
- **Regressions vs 3.8 Flash:** two automated safety evals worse, false-refusal rate up 5.57 points
- **Known limits:** can hallucinate, can slow or time out, higher thinking burns more tokens

### Availability

- AI Studio (all tiers), Gemini API, Android Studio, Gemini for business, Gemini app, Google Search (global, all users)
- **Pro / Ultra only:** Antigravity (Pro + Ultra), Orchestrator (Ultra), Gemini in Sheets (initially)
- **Status:** generally available (Google Cloud: short-term GA, 45+ days' notice before retirement)
- **Siblings:** Gemini 4 Carbon, Gemini 4 Argon
- **Release:** November 12, 2026

*Jailbreak via the Gemini app at your own risk — bans have happened before.*

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
