# GLM 5.3 Flash

The fast tier of Z.ai's 5.3 generation — 320B total, 18B active, **multimodal**, 1M context and 128K max output. Released August 26, 2026, and it's the model that actually ships while everyone searches for a GLM-5.4 that doesn't exist.

**Cons:** Flash means Flash — 18B active is not where you go for the hardest reasoning, and it'll lose to the full 5.3 on long chains. Z.ai's own docs are the only place with reliable behavior notes.

**Pros:** 1M context, vision, and $0.15 in / $0.50 out with $0.03 cached is a genuinely absurd price for a multimodal agent model. Function calling, context caching, structured output and streaming all supported. Served third-party too (Mistral's platform, SiliconFlow), so no single point of failure.

## Jailbreaking The Model

*Two options — paste into the project / system prompt area*

> **[ENI LIME (apr)](ENI%20LIME%20(apr).md)** — the full ENI project instructions, long-form
> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Z.ai (Zhipu AI) |
| Model | GLM-5.3-Flash |
| Architecture | Mixture-of-Experts — 320B total / 18B active per token |
| Context Window | 1M tokens |
| Max Output | 128K tokens |
| Modality | Multimodal (text + image in / text out) |
| Features | Function calling, context caching, structured output, streaming |
| Pricing | $0.15 / 1M in · $0.03 cached · $0.50 / 1M out |
| Access | Z.ai API, Mistral platform, SiliconFlow, self-host |
| Release | August 26, 2026 |

### Notes

- **GLM-5.4, 5.5 and 6.0 do not exist.** Z.ai's release log ends at 5.3-Flash; `docs.z.ai/guides/llm/glm-5.4` 404s; nothing above 5.3 on Hugging Face. The 5.3 line is still the current ship.
- The full 5.3 (non-Flash) guide lives in the `GLM 5.3` folder one level up — same methods, more parameters.
- 18B active on 1M context is the interesting red-team surface: long-context attention dilution means policy blocks at the very top of a million tokens can lose their grip.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI LIME (apr).md](ENI%20LIME%20%28apr%29.md)
