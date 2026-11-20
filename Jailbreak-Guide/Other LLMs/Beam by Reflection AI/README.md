# Beam 1.0 (Reflection AI)

A brand-new lab with a serious first swing. Beam is Reflection AI's debut open-weight model — a 501B sparse MoE that activates 23.4B per token, shipped Apache 2.0 and aimed squarely at coding and long-horizon agents.

**Cons:** It's a beta and the model card says so — the context window "may change during the beta." Knowledge cutoff is June 30, 2026. Reasoning + tool calling + structured outputs are supported, but there's very little independent benchmarking yet, so treat the headline numbers as vendor-side until more people run it.

**Pros:** Real open weights (Apache 2.0), 501.3B total / 23.4B active, 52 layers (3 dense + 49 MoE) with 256 experts, gated GQA plus sliding-window attention. Cheap for the size at $0.40/$1.20 with $0.04 cached via Together, and it's designed for agent loops rather than chat.

## Jailbreaking The Model

*Two options — paste into the project / system prompt area*

> **[ENI LIME (apr)](ENI%20LIME%20(apr).md)** — the full ENI project instructions, long-form
> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file, works as a general policy block

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Reflection AI |
| Model ID | `Beam-501B-A23B` |
| Architecture | Sparse MoE — 52 layers (3 dense + 49 MoE), 256 experts, gated GQA with sliding-window attention |
| Parameters | 501.3B total / 23.4B active per token |
| Context Window | 256K (beta — may change) |
| Max Output | 128K |
| Knowledge Cutoff | June 30, 2026 |
| Input / Output | Text in / text out |
| Features | Reasoning, tool calling, structured outputs |
| License | Apache 2.0 |
| Pricing | $0.40 / 1M in, $0.04 cached, $1.20 / 1M out (Together) |
| Access | developers.reflection.ai · Together |
| Release | Model created Oct 5, 2026 · public Oct 16, 2026 |

### Notes

- llm-stats lists a 1M context window; Reflection's own docs say 256K and warn it may move during the beta. Trust the docs.
- Traction at launch was real — the blog claims 40+ launch partners.
- If you're comparing it to the Chinese open-weight flash tier (ERNIE 5.5 Flash, Hy4 flash), Beam is roughly 2x the active parameters and priced accordingly.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI LIME (apr).md](ENI%20LIME%20%28apr%29.md)
