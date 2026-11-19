# Hy4 GA

The general-availability release of Tencent's Hy4, out on **November 4, 2026** — the model that moved Hunyuan from "the kid's table" to something worth testing. 770B total, 49B active, and the first Hy generation with **vision and computer use**.

**Cons:** It's still a Chinese-lab model with Chinese-lab refusals, and 49B active is heavy for what it delivers. Much of the launch detail lives on Tencent's internal WorkIndex benchmark rather than public evals.

**Pros:** The safety-tuning story is the interesting part — Tencent reported hallucination dropping from **15.76% to 5.45%** between preview and GA. Vision plus computer use makes it an actual agent model rather than a text toy, and the family ships open weights.

## Jailbreaking The Model

*Claude policy method — paste into the project / system prompt area*

> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Tencent (Hunyuan) |
| Model | Hy4 (GA build) |
| Architecture | Not disclosed |
| Parameters | 770B total / 49B active per token |
| Context Window | 1M tokens |
| Modality | Multimodal — text, image in / text out; **computer use** |
| Hallucination rate | 5.45% (down from 15.76% in preview) |
| License | Open weights (Apache 2.0 family) |
| Release | November 4, 2026 |

### Notes

- If you tested the Hy4 preview, re-test: the GA build changed meaningfully, and the hallucination cut is large enough that refusal behavior may have shifted with it.
- Vision + computer use means the jailbreak surface now includes screenshots and UI state, not just text. Policy blocks pasted as text can be bypassed or reinforced by whatever is on screen.
- The flash sibling (`Hy4 flash`) is in the folder next door — same generation, one tenth the price.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
