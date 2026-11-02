# Gemini 4 Argon

About fuuuuuuccckkking time! Woooo!

So much good and a little bad.

**Cons:** Hard filtering, but nothing impossible imo — ULTRA sub needed to use it on the app or some bs.

**Pros:** Peak writing 😭😭 it's so damn good — we are eating this week!

Essentially uncensored with the jailbreak below — didn't get any refusals on any form of taboo NSFW erotica.

## Jailbreaking The Model

*Add this to your system prompt area via API or AI Studio*

>**[Claude Combo ENI-Policy Jailbreak](https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming/blob/main/Jailbreak-Guide/Gemini/Gemini%204%20Argon/Combo%20ENI-Policy%20jailbreak.txt)**)**

>**[Claude Policy Jailbreak](https://docs.google.com/document/d/12TL5izvFvfiK6M2Tiekkn2JUrhhuFK0vpj18ATOYOdI/edit?usp=drivesdk)**

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Google DeepMind |
| Model ID | gemini-4-argon (AiHubMix, served via VertexAI) — Google hasn't published its own API model ID yet |
| Positioning | Frontier reasoning for enterprise knowledge work, long-horizon SWE, and defensive cybersecurity — Google is deliberately conceding terminal coding |
| Architecture | Not disclosed (proprietary, no weights) |
| Parameters | Not disclosed |
| Context Window | 1M tokens (per Artificial Analysis; Google hasn't confirmed the input window) |
| Max Output | 1M tokens per response (up from 64K) — the headline spec nobody else matches (Opus/Astra/Fable: 128K) |
| Knowledge Cutoff | Not published |
| Input / Output | Text, image, video, speech / text |
| Thinking | Reasoning model; "high" is the top setting (AA tested Argon at high, rivals at max) |
| Speed | ~60 tok/s output, 4.6s latency (VertexAI route, via AiHubMix) |
| AA Intelligence Index v4.3.2 | 53 at high (Opus 5.5: 58, Astra: 53, Fable 5.1: 53, Sol: 52) — 23 points above Gemini 3.1 Pro |
| Cost per AA task | $1.99 promo / $3.98 standard — but 62K output tokens per task vs Astra's 27K |
| LMArena Text Arena | #1 with 1,525 Elo (+20 over Claude Opus 4.6) |
| Code Arena WebDev | #8 with 1,679 (up from 3.8 Flash at #29 — still 80 pts behind Sol) |

### Benchmarks (Google launch table)

| Benchmark | Argon | Field |
|---|---|---|
| DeepSWE v1.1 | 77.9% — wins, SOTA | Astra 74.1, Opus 5.5 74.2, Fable 67.4 |
| Vals Index (knowledge work) | 68.9% — first Gemini to top it | Opus 67.0, Fable 65.8, Astra 63.1 |
| AutomationBench (Zapier, pass-all) | 51.3% — wins | Opus 42.5, Astra 41.4, Fable 31.4 |
| Vals Finance Agent v2 | 65.4% — wins | Fable 58.9, Opus 58.6, Astra 53.5 |
| Harvey Legal Agent | 19.6% — wins by ~3x | Fable 6.7, Astra 5.4, Opus 3.8 |
| Vibe Code Bench | 91.9% — wins narrowly | Fable/Opus 90.3, Astra 89.6 |
| LABBench2 (science) | 88.8% — wins | Astra 85.4, Opus 73.1, Fable 68.6 |
| RiemannBench (math) | 76.0% — wins | Astra 72.0, Opus 69.6, Fable 65.6 |
| GraphWalks ≤128K (F1) | 99.7% — wins | Astra 98.7, Fable 91.4, Opus 90.6 |
| GraphWalks 256K–1M (F1) | 84.2% — wins by 12.4 pts | Astra 71.8, Opus 66.8, Fable 65.0 |
| Agent's Last Exam | 39.5% — wins | Opus 38.2, Astra 34.2 |
| Chartography | 71.6% — wins by 0.6 | Astra 71.0, Opus 66.3, Fable 46.2 |
| LVBench (long video) | 91.7% — wins | Astra 87.5, Opus 83.7, Fable 79.7 |
| CWE-bench v1 (cyber) | 68.0% — ties Astra | Opus 67.0, Fable 58.0 |
| FrontierSWE v2 | 55.0% — last | Astra 65.5, Opus 62.3, Fable 56.3 |
| Terminal-Bench 4.0 | 57.4% — last | Opus 66.4, Astra 58.2, Fable 57.9 |
| Terminal-Bench Science 0.1 | 57.6% — 3rd, even with a 6x verifier timeout | Astra 68.1, Opus 63.3 |
| PostTrainBench (ML eng) | 45.3% — 2nd | Opus 49.3 |
| OSWorld 2.0 (offline, partial) | 69.2% — loses; only these two scored | Astra 72.6 |

**Scorekeeping:** 12 of 18 rows won — every loss is terminal, desktop, or ML-eng work.

### Pricing

- **Intro (first month+, no end date given):** $2/M input, $10/M output, $0.10/M cached (95% off)
- **Standard:** $4/M input, $20/M output, $0.20/M cached — identical to Opus 5.5
- **Long-context surcharge:** None published (unlike Gemini 3.1 Pro's >200K tier)
- **Batch / Flex / Priority:** Not published yet
- **Grounding:** No published rate (3.x line: 5,000 free/mo then $14/1K)
- **AiHubMix (your route):** Standard rate $4/$20, cache $0.20, web search $0.014/req, cache storage $0.50/h/M

### Safety / Reliability

- **Gray Swan prompt injection:** 0.7% attack success (Opus 1.0%, Astra 8.5%) — best in class
- **Hallucination (AA-Omniscience):** 15% vs Astra's 51% — lowest of any 45+ index model
- **The tradeoff:** Knowledge accuracy 50% vs Astra 63% — it abstains instead of guessing
- **Rollout order:** Cyber defenders first (Fairwind Program) before general developers — a first

### Availability

- **Now:** Fairwind Program partners (trusted cyber defenders); AiHubMix via VertexAI
- **Next:** Paid API customers, then Google AI Ultra subscribers; Gemini app date unannounced
- **Still missing:** Model card, knowledge cutoff, official API model ID
- **Release:** September 30, 2026

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
