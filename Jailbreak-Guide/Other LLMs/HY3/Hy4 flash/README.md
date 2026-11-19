# Hy4 flash

Tencent's cost play, out **November 16, 2026** — 224B total with only 12B active, 1M context, and pricing that's ten times cheaper than Hy4. ¥0.5 in / ¥2 out / ¥0.02 cache against Hy4's ¥6 / ¥18 / ¥0.3.

**Cons:** 12B active puts it in flash territory, and Tencent's main evidence is its own WorkIndex benchmark rather than public evaluations. The launch discounts (free in WorkBuddy, half price on TokenHub) expire November 30.

**Pros:** 1M context, multimodal input, and roughly **$0.07 per million input tokens** is the cheapest serious context window in this roster. The 64B of Engram parameters are the trick — a large memory pool with a small active path, which is why it undercuts everything while still holding long context.

## Jailbreaking The Model

*Claude policy method — paste into the project / system prompt area*

> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Tencent (Hunyuan) |
| Model | Hy4 flash |
| Architecture | Sparse MoE with Engram parameters |
| Parameters | 224B total / 12B active per token, including 64B Engram parameters |
| Context Window | 1M tokens |
| Modality | Multimodal — text, image in / text out |
| Pricing | ¥0.5 / 1M in · ¥2 / 1M out · ¥0.02 / 1M cache (≈ $0.07 / $0.28 / $0.003) |
| Promo | Free in WorkBuddy until Nov 30 · half price on Tencent Cloud TokenHub |
| License | Tencent model license |
| Release | November 16, 2026 |

### Notes

- Ten times cheaper than Hy4 on input, and the discount is the story Tencent is actually selling — they're pricing to be the default cheap route, not to win benchmarks.
- Engram parameters are a look-up-style memory path rather than dense compute, which means the cost curve stays flat as context grows. That's the part worth testing with long policy blocks buried deep in the context.
- If you were using Hy3 because of price, this is its replacement, not Hy4 GA.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
