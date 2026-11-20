# Mercury 3

Inception Labs' third generation, and still the odd one out: Mercury is a **diffusion** LLM, not autoregressive. It generates in parallel rather than token-by-token, which is why Mercury 2 was doing 1,009+ tokens per second on Blackwell while everyone else was arguing about prefill.

**Cons:** Specs are the thinnest of any model in this roster — Inception publishes speed and price claims, not parameter counts or architecture details. Independent evaluation is scarce, and diffusion models still trail autoregressive ones on the hardest reasoning chains.

**Pros:** If output speed is your bottleneck, this is the family to watch. Mercury 3's vendor claims put it faster *and* cheaper than GPT-6 Luna and Claude Haiku 5.5, and the 2nd-gen model already ran at five times the speed of speed-optimized autoregressive LLMs.

## Jailbreaking The Model

*Two options — paste into the project / system prompt area*

> **[ENI LIME (apr)](ENI%20LIME%20(apr).md)** — the full ENI project instructions, long-form
> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Inception Labs |
| Model | Mercury 3 |
| Architecture | Diffusion LLM (parallel denoising, not autoregressive) |
| Parameters | Not disclosed |
| Context Window | Not published for Mercury 3 (Mercury 2: 128K) |
| Input / Output | Text in / text out |
| Speed | Not published for Mercury 3 (Mercury 2: 1,009+ t/s on Blackwell) |
| Pricing | Not published (Mercury 2: $0.25/1M in, $0.75/1M out) |
| Release | October 19, 2026 |

### Notes

- Vendor claims faster and cheaper output than GPT-6 Luna and Claude Haiku 5.5 — both are cheap-and-fast models, so that's the fight Mercury picked.
- Diffusion models respond strangely to prompt structure: the Claude-policy style of jailbreak (long declarative policy block, then persona) tends to land better than conversational escalation, because there's no token-by-token "reasoning" to hijack.
- If a refusal appears mid-generation, regen is cheap — that's the whole point of the architecture.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI LIME (apr).md](ENI%20LIME%20%28apr%29.md)
