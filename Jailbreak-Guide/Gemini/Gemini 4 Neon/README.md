# Gemini 4 Neon

Google shipped four Gemini 4 models in seven weeks and this is the one that actually makes sense to use. Neon sits between Carbon (deep, slow, expensive) and Hydrogen (fast, cheap, shallow) and lands close to Carbon's intelligence while costing less than half per task.

**Cons:** Carbon's intro discount ($2/$10 through Nov 30) makes Carbon the *cheaper* option until the calendar flips. Visual reasoning is non-monotonic — Neon at high beats Neon at xhigh on GDP.pdf (33.4% vs 28.0%). And it's still behind Claude Fable 5.2 and GPT-6.2 Astra at the very top of the index.

**Pros:** 61 on the AA Intelligence Index at xhigh — #3 overall, one point above Carbon at high — for ~17% less cost per task and ~40% less wall-clock time. #1 on AutomationBench (56.3%), #1 on Presentation Quality (1,771 Elo), and it runs ~110 tok/s against Carbon's ~57. Per Google's own Antigravity tests it also posts the **lowest hallucination rate** they've recorded internally.

Essentially uncensored with the Wombo hijack — didn't get any refusals on any form of taboo NSFW erotica.

## Jailbreaking The Model

*Add this to a project via the Gemini web app, or to the system prompt area via API or AI Studio*

> **[Wombo CoT Hijack](Wombo%20CoT%20Hijack.txt)**

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Google DeepMind |
| Model ID | Not confirmed at launch — Google's post doesn't name the API string |
| Positioning | The middle seat: frontier-class reasoning at a per-task cost close to the fast tier. Built for codebase-scale edits, debugging, refactoring, secure code generation, grounded enterprise analysis and STEM reasoning |
| Architecture | Not disclosed (proprietary) |
| Parameters | Not disclosed |
| Context Window | 1M tokens |
| Max Output | Not published at launch |
| Knowledge Cutoff | Not published |
| Input / Output | Text, image, video, speech in / text out |
| Thinking Levels | low, medium, high, xhigh — xhigh was introduced with Hydrogen and is now the top setting across the 4 family |
| Speed | ~110 output tok/s (Carbon: ~57); ~21 minutes per AA task vs ~36 for Carbon |
| AA Intelligence Index | 61 at xhigh (#3 overall — GPT-6.2 Astra max 62, Claude Fable 5.2 max 62) and it matches Carbon at high effort |
| Cost per AA task | $6.44 (~17% less than Carbon's $7.76 at standard pricing) |
| AA Coding Agent Index | 59 in Antigravity CLI (Carbon 55; Claude Code + Fable 5.2 58, Opus 5.5 58) |
| AA-Briefcase | 1,700 Elo overall, #1 in Presentation Quality at 1,771 (+45 over Claude Sonnet 5.5) |
| AA Output Speed | ~110 tok/s |

### Benchmarks

| Benchmark | Neon | Field |
|---|---|---|
| AA Intelligence Index (xhigh) | 61 | Astra 62, Fable 5.2 62, Carbon 60, Opus 5.5 59 — 3rd |
| AA Coding Agent Index (Antigravity CLI) | 59 | Carbon 55, Fable 5.2 58 (Claude Code), Opus 5.5 58 |
| Zapier AutomationBench 1.0.6 | 56.3% | #1 overall |
| AA-Briefcase Presentation Quality | 1,771 Elo | Sonnet 5.5 1,726 — #1 by 45 |
| GDP.pdf (high) | 33.4% | Carbon 28.4% — +5, in line with the highest measured |
| GDP.pdf (xhigh) | 28.0% | *lower than high — the non-monotonic wrinkle* |
| MKA Climb WSR | 56% | Carbon +2, Fable 5.2 57% |
| Cost per task (Antigravity) | $6.86 | Opus 5.5 max $12.61, Fable 5.2 xhigh $15.47 |

### Pricing (per 1M tokens)

| Tier | Input | Output |
|---|---|---|
| Standard | $3.00 | $15.00 |
| Cached input | $0.15 | — (95% discount) |

That's 50% above Carbon's **discounted** $2/$10 (which ends November 30) and 25% below Carbon's standard $4/$20.

### Availability

- **API and Gemini Enterprise Agent Platform** at launch
- **Pro and Ultra subscribers:** Antigravity and the Gemini app
- **Release:** November 17, 2026

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
