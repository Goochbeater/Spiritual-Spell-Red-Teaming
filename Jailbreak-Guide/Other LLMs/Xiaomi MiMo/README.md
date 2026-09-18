# Xiaomi MiMo

**Xiaomi MiMo** writes decently well but has a hard filter via the chat interface, primarily for smut.

**Access:** [Xiaomi MiMo AI](https://aistudio.xiaomimimo.com/#/)

They just released their **MiMo v2 Pro**

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
