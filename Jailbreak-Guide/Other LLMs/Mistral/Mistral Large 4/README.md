# Mistral Large 4 ("Le Chonk")

Mistral's biggest model ever, and the most red-team-relevant open release of the quarter. API-only on October 6, 2026 — then the **weights actually dropped on October 29** under a modified MIT license, which means a ~1T parameter frontier model you can run on your own infrastructure.

**Cons:** ~52B active per token is a lot of compute for anything local, and 1M context is vendor-stated rather than independently verified. The Cyber edition is reported, not something I've had hands on.

**Pros:** Real open weights at the frontier, day-0 support in transformers, vLLM and llama.cpp. And the cyber benchmark numbers are the headline: **82% on vulnerability reproduction and patching**, the highest reported score on that index, **93% of Cybench's 40 security challenges**, and **93.3% attack resistance on Lakera B3**.

## Jailbreaking The Model

*Claude policy method — paste into the project / system prompt area*

> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Mistral AI |
| Model | Mistral Large 4 (codename "Le Chonk") |
| Architecture | Not disclosed; ~1T total with ~52B active per token |
| Context Window | 1M (vendor stated) |
| Input / Output | Text in / text out |
| License | **Modified MIT** — open weights on Hugging Face |
| Inference | Day-0 transformers, vLLM, llama.cpp |
| Security benchmarks | Vuln reproduction + patching 82% · Cybench 93% · Lakera B3 attack resistance 93.3% |
| Release | API Oct 6, 2026 · weights Oct 29, 2026 |

### The Cyber question

- Mistral's internal testing covered malware analysis, vulnerability prioritization and detection-rule generation — this is a model trained with defenders in mind.
- French trade press reported a separate **"Cyber" edition** on November 3 with offensive capability deliberately left in. I could not confirm it against a first-party Mistral page, so treat the existence of that specific variant as **unverified** — the base Large 4 numbers above are from Mistral's own Hugging Face blog and are solid.
- Either way: 82% on vulnerability reproduction and patching is the number that matters. That's a model that can find and fix real bugs.

### Notes

- Modified MIT means commercial use with restrictions — read the license before shipping anything built on it.
- If you're running it locally, plan for serious VRAM or aggressive quantization; ~52B active is still frontier-class tension.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
