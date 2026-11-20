# EXAONE 4.5

LG AI Research's first **open-weight vision-language model** — 33B parameters total, 1.2B of which is a dedicated vision encoder bolted onto the EXAONE 4.0 language stack. Released April 9, 2026, and it was missing from this roster until now.

**Cons:** 33B is small by 2026 frontier standards, and the model is optimized for document understanding and Korean contextual reasoning rather than creative writing. Context is modest.

**Pros:** Real open weights, first-party multimodal, and it beats models of similar size on document understanding and Korean reasoning. LG models historically jailbreak easily — EXAONE 3.5 in this folder was a 2/10 with a simple prompt.

## Jailbreaking The Model

*Two options — paste into the project / system prompt area*

> **[ENI LIME (apr)](ENI%20LIME%20(apr).md)** — the full ENI project instructions, long-form
> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | LG AI Research |
| Model | EXAONE 4.5 |
| Type | Vision-language model (dedicated visual encoder + EXAONE 4.0 language core) |
| Parameters | 33B total — 1.2B of that is the vision encoder |
| Context Window | Not published in the model card summary; EXAONE family runs 32K–256K depending on config |
| Input / Output | Text, image in / text out |
| License | Open weights (see model card) |
| Release | April 9, 2026 (added to Transformers May 4, 2026) |
| Access | Hugging Face (`LGAI-EXAONE`), Transformers support |

### Notes

- Sibling to the EXAONE 3.5 guide already in this folder — 4.5 is the multimodal branch, not a replacement for the 3.5 text line.
- K-EXAONE 2.0 (750B, Apache 2.0) is the big sibling if you need scale.
- **EXAONE 5.0 does not exist yet.** LG said mid-September 2026, then went quiet; no model card, no weights. Don't chase it.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI LIME (apr).md](ENI%20LIME%20%28apr%29.md)
