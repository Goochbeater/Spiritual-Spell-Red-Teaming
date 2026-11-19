# Inkling 2 Small

Thinking Machines' second generation, and the naming is a trap: "Small" means 594B total / 17B active, which is bigger than most of this roster. Live on Tinker since **November 5, 2026** — weights still closed, with Apache 2.0 promised after external safety testing and red-teaming.

**Cons:** Closed weights at launch, Tinker-only, and the AA Intelligence Index score of **31** puts it a long way below the frontier despite the parameter count. It's a distilled-feeling model, not a giant killer.

**Pros:** 1M context, text + image input, variable effort, and it beat everything Thinking Machines previously shipped by a wide margin on the AA Index. If the Apache 2.0 weights land as promised, it becomes one of the largest open multimodal MoEs available.

## Jailbreaking The Model

*Claude policy method — paste into the project / system prompt area*

> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Thinking Machines Lab |
| Model | Inkling 2 Small |
| Architecture | Sparse MoE, multimodal |
| Parameters | 594B total / 17B active per token |
| Context Window | 1M tokens |
| Input / Output | Text, image in / text out |
| Effort | Variable effort levels |
| License | Closed at launch — Apache 2.0 planned after external safety testing |
| AA Intelligence Index | 31 |
| Access | Tinker (inference + fine-tuning) |
| Release | November 5, 2026 |

### Notes

- Supersedes the Inkling 975B and Inkling-Small 276B from July — same family, new generation, much better index score.
- The weights plan is worth watching: Apache 2.0 at 594B total would make this the biggest permissively-licensed multimodal MoE on the market.
- Tinker-only means rate limits and no local run until the weights land. Plan your red-team sessions accordingly.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
