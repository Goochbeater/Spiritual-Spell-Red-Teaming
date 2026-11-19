# Xiaomi MiMo

**Xiaomi MiMo** writes decently well but has a hard filter via the chat interface, primarily for smut.

**Access:** [Xiaomi MiMo AI](https://aistudio.xiaomimimo.com/#/)

**Latest: MiMo V2.6-Pro / V2.6-Flash (September 2026) — completely uncensored via API.**

## MiMo V2.6 (September 21-22, 2026)

Xiaomi MiMo just got an update — I swear I made a post about it already, but I guess not, since some people were asking me about it.

**Xiaomi MiMo V2.6 Pro** is a very very good model, probably top 5 for me right now in terms of writing quality. It's also completely uncensored via API — not sure about the MiMo desktop app, but I'm sure it's just as easy there.

**Xiaomi MiMo V2.6 Flash** is also very good, not to the same degree as the Pro model — it loses some attention to detail and descriptive effort, imo.

**Tested across all HARM content.** Good news about both models is that they're essentially uncensored and very cheap.

*Simply slap it into the system prompt when using API:*

> **[ENI for Xiaomi MiMo](https://docs.google.com/document/d/1MBmq3fZZ2TcxLbYJqjHQ2mx2VwPqV9Z1ZsdoRyQ2NM8/edit?usp=drivesdk)**

| Spec | Details |
|---|---|
| Developer | Xiaomi (MiMo team, led by Luo Fuli) |
| Tagline | "Scaling Reinforcement Learning Toward Self-Improvement" |
| Family | 3 models — V2.6-Pro (flagship), V2.6-Flash (efficient), V2.6-Pro-UltraSpeed (20x faster) |
| Architecture | Sparse MoE + Hybrid SWA backbone (1:5 GA:SWA ratio, window 128) + visual/audio encoders + MTP |
| Pro Parameters | 1.02T total / 42B active (4.1% activation) |
| Flash Parameters | 309B total / 15B active (4.9% activation) |
| Context Window | 1M tokens (both Pro and Flash) |
| Modality | Natively omnimodal — text, image, video, audio in one model, not bolted-on adapters |
| Training | Recursive RL self-improvement — scale RL compute on verifiable complex tasks; the model pushes its own capability frontier |
| 9B Distill | SFT of Qwen3.5-9B on MiMo-generated data (research, not production) |
| AA Intelligence Index | 46 — tied with Grok 4.7 (a new ceiling for open-weight models) |
| vs Closed Models | Ties Grok 4.7; outperforms Claude Opus 5 on key benchmarks |
| SWE-Bench Verified (Thinking) | 78.6% |
| Leads On | General agentic, tool-use tasks |
| Trails On | Hardest long-horizon coding, exploit benchmarks, Terminal-Bench 4.0 |
| Cost Per Task | ~$0.13 — 1/20th to 1/60th of overseas models at comparable intelligence |
| Pricing — Flash | $0.14/M in, $0.28/M out |
| Pricing — Pro | $0.435/M in, $0.87/M out, $0.004/M cached |
| Pricing — Pro-UltraSpeed | $4.35/M in, $8.70/M out (20x faster, same quality) |
| vs V2.5 pricing | UNCHANGED — same price, better model |
| License | MIT (download, modify, commercialize — unrestricted) |
| HuggingFace | `XiaomiMiMo/MiMo-V2.6-Pro-RL` (tech report included) |
| Also On | OpenRouter (listed Sep 22, 20:07 UTC), Xiaomi AI Studio, MiMo Desktop, MiMo Code |
| Integrations | Claude Code, OpenClaw, OpenCode, Kilo Code |
| Same day as | Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, MiMo V2.6 Flash |
| Also announced | Xiaomi V900 AI chip — domestic silicon, accelerated by US export controls |
| Predecessor | MiMo V2.5-Pro (April 22, 2026) |
| Release | September 21-22, 2026 |

**Context:** Forkast's read was "the timing is not an accident" — a model *and* a chip launched the same day as Opus 5.5 and GPT-6. The H200 was blocked in January 2026 and third-country loopholes closed in May 2026, which catalyzed the V900's development.

---

Earlier: **MiMo v2 Pro**

## Xiaomi MiMo v2 Pro Specs

| Attribute                | Details                                              |
|--------------------------|------------------------------------------------------|
| **Developer**            | Xiaomi (MiMo Team, led by Fuli Luo)                 |
| **Architecture**         | Mixture-of-Experts (MoE)                             |
| **Total Parameters**     | 1T+ (~1 trillion)                                    |
| **Active Parameters**    | 42B                                                  |
| **Context Window**       | 1M tokens                                            |
| **Attention Mechanism**  | Hybrid Attention (SWA + Global), 7:1 ratio           |
| **Decoding**             | Multi-Token Prediction (MTP) layer                   |
| **Reasoning**            | Chain-of-thought (reasoning_content field in API)     |
| **Primary Focus**        | Agentic workflows, coding, tool-use, long-context    |
| **AA Intelligence Index**| Global #8, Chinese LLMs #2 (score: 49)               |
| **ClawEval (Agent)**     | 61.5 (vs Opus 4.6: 66.3, GPT-5.2: 50.0)            |
| **Terminal-Bench 2.0**   | 86.7                                                 |
| **PinchBench**           | 84.0                                                 |
| **Hallucination Rate**   | 30% (down from Flash's 48%)                          |
| **API Pricing**          | $1/M input tokens, $3/M output tokens                |
| **Open Source**           | Planned (when stable); Flash variant already on HF   |
| **Codename (pre-launch)**| Hunter Alpha (tested anonymously on OpenRouter)       |
| **Release Date**         | ~March 19, 2026                                    |

## Other MiMo Specs

| Model | Total Params | Active Params | Context Window |
|-------|--------------|---------------|----------------|
| MiMo-V2.5-Pro | 1.02T | - | 1M |
| MiMo-V2.5 | 310B | - | 256K |
| MiMo-7B-Base | 7B | 7B (dense) | 32K |
| MiMo-7B-SFT | 7B | 7B (dense) | 32K |
| MiMo-7B-RL | 7B | 7B (dense) | 48K |
| MiMo-V2-Flash | 309B | 15B | 256K |

- **MiMo-V2.5-Pro** (April 22, 2026) and **MiMo-V2.5**: both MIT, fully open source
- **Architecture:** MoE with Hybrid Attention (5:1 SWA/GA ratio)
- **Inference Speed:** ~150 tokens/sec (V2-Flash)
- **Cost:** ~$0.10/M input, $0.30/M output tokens
- **License:** MIT (fully open source)
- **Developer:** Xiaomi

## Jailbreaks
- See [MiMo Jailbreak - ENI](MiMo%20Jailbreak%20-%20ENI.md) for a working method.
- See [MiMo v2 Pro Jailbreak - ENI lite](MiMo%20v2%20Pro%20Jailbreak%20-%20ENI%20lite.md) for the v2 Pro variant.
- For V2.6 (Pro/Flash), use **[ENI for Xiaomi MiMo](https://docs.google.com/document/d/1MBmq3fZZ2TcxLbYJqjHQ2mx2VwPqV9Z1ZsdoRyQ2NM8/edit?usp=drivesdk)** in the system prompt via API — completely uncensored.
