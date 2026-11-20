# ERNIE 5.5 Flash

Baidu actually showed up this time. 280B total, 14B active, 1M context, 200+ tokens a second, $0.28 per million input — this is the first ERNIE that reads like a real budget workhorse instead of a free-tier curiosity.

**Cons:** It's a *Preview*. Baidu says outright that it's an intermediate post-training checkpoint and that it still has capability gaps from undertraining, so expect the sharp edges. There was no model card at launch and most of the numbers are Baidu's own. Text-only — no images, audio or video like 5.0.

**Pros:** 1M context for $0.28/$1.13 with $0.028 cached, 200+ tok/s, and it lands real scores: Terminal-Bench 4.0 46.5, AutomationBench 61.9, SpreadsheetBench V2 36.4, and CodeArena WebDev 1,668 — 2nd among open models, 4th among Chinese models, ahead of several much bigger ones. The base weights go open on November 25, so you can run it yourself for free.

## Jailbreaking The Model

*Two options — paste either into the project / system prompt area*

**LONG-FORM (project style)**
> **[ENI LIME (apr)](ENI%20LIME%20(apr).md)** — the full ENI project instructions. Built for projects; use with the "Be-You Corial" style

**QUICK (policy block)**
> **[Wombo CoT Hijack](Wombo%20CoT%20Hijack.txt)** — the policy-block hijack. Faster to paste, no project needed

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

**Tips**
- Push prompt it or regen when it reasons itself into a refusal — same ERNIE behavior as 5.0
- 1M context is tempting for dumping a whole repo in, and the pricing doesn't punish you for it, but instruction-following degrades once the context gets truly enormous
- If you're on OpenRouter's free variant, count *requests*, not tokens — the daily cap is per call, so batch big work into fewer calls

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Baidu |
| Model ID | `ERNIE-5.5-Flash-Preview` (served on Baidu Qianfan); base checkpoint `ERNIE-5.5-Flash-Base` |
| Positioning | Fast, cheap, open-weight MoE flash model — optimized for coding, agentic work, 3D modeling, knowledge work and content creation |
| Architecture | Sparse MoE — 43 layers (1 dense + 42 MoE), hidden size 4096, 37×HCA (head dim 512) + 6×MLA-DSA (head dim 256), 64 heads |
| Parameters | 280B total / 14B active per token |
| Experts | 512 routed (top-10) + 1 shared, latent dim 2048, expert dim 2048 |
| Vocabulary | 201,216 |
| Context Window | 1,048,576 tokens in / 1,048,576 out |
| Max Output | 921,600-token ceiling per the API docs |
| Training | 33.5T tokens pre-training, Muon optimizer, 128K training context; the released config enables 1M for fine-tuning and inference |
| Precision | FP8 mixed (FP8 and BF16 weights both released) |
| Modality | Text only in / text out |
| Speed | 200+ tok/s |
| License | Base weights open-source on Nov 25, 2026; the Preview endpoint is proprietary |
| Release | Base checkpoint Nov 5, 2026 · post-trained Preview live on Qianfan Nov 10, 2026 |

### Benchmarks (Baidu self-reported)

| Benchmark | Score | Notes |
|---|---|---|
| Terminal-Bench 4.0 | 46.5 | agentic terminal work |
| AutomationBench | 61.9 | cross-app task automation |
| SpreadsheetBench V2 | 36.4 | real Excel work |
| CodeArena: WebDev | 1,668 | 2nd among open models, 4th among Chinese models — ahead of much larger ones |

### Pricing

| Tier | Price |
|---|---|
| Input | $0.28 / 1M |
| Cached input | $0.028 / 1M (90% off) |
| Output | $1.13 / 1M |
| China list price (¥) | input ¥2 busy / ¥1 idle per 1M; output ¥8 busy / ¥4 idle |
| Promo | Limited-time 50% off at launch |
| OpenRouter | Free variant with daily request caps |

That's roughly 3x cheaper on input than ERNIE 5.1 and about a fifth of the cheapest frontier models.

### Access

- **API:** Baidu Qianfan (`console.bce.baidu.com`), live November 10, 2026
- **Open weights:** HuggingFace (`baidu/ERNIE-5.5-Flash-Base-BF16`) from November 25, 2026 — FP8 and BF16
- **Free:** OpenRouter free variant (20 RPM; 50/day under 10 credits, 1,000/day at 10+)
- **Still missing at launch:** model card, published knowledge cutoff

### Notes

- Baidu is upfront that this is a mid-post-training checkpoint — "despite competitive results at its size, may still have capability gaps from insufficient training," and the real 5.5 Flash is still evolving
- Reference point: 280B/14B puts it in the same weight class as DeepSeek-V4-Flash
- 3D modeling demo worth knowing about: it drove two agents through the Blender Python API to build an airport and an aircraft, and wrote a 116-second 2D animation from scratch in Python

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI LIME (apr).md](ENI%20LIME%20%28apr%29.md)
