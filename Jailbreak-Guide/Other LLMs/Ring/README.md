# Ring 2.6 1T

**Censorship:** [★★☆☆☆☆☆☆☆☆] 2/10
*API only tested — no refusals encountered on any content*

InclusionAI's reasoning-focused MoE. Benchmaxxed somewhat but writes well. Regional restrictions block the chat platform directly, so OpenRouter is the move — ENI LIME dropped into the system prompt, zero resistance. The Chinese arms race never stops.

Best open source model is still **KIMI K2.6** — Ring is solid, KIMI just has some magic to it.

## Models

| Model | Variant | Total Params | Active Params | Context |
|-------|---------|-------------|---------------|---------|
| **Ring-2.6-1T** | Reasoning/Thinking | 1T | 63B | 262K |
| **Ling-2.6-1T** | Base | 1T | 63B | 262K |
| **Ling-2.6-Flash** | Fast | 104B | 7.4B (~340 tok/s) | — |

**Also out:** Ling 3.0 Tiny (August 6, 2026) — tiny sibling in the Ling 3.0 line, untested here.

## Benchmarks

| Benchmark | Ring 2.6 1T | DeepSeek-V3.1 |
|-----------|------------|---------------|
| AIME26 | 70.42 | 55.21 |
| LiveCodeBench | 61.68 | 48.02 |
| ARC-AGI-1 | 43.81 | 14.69 |
| SWE-Bench Verified | Open-source SOTA | — |
| BFCL-V4 | Open-source SOTA | — |
| IFBench | Open-source SOTA | — |
| AA Intelligence Index | 34 | — |

## Access

- **OpenRouter:** Free tier (time-limited) — recommended for regional access
- **Novita AI:** $0.30/M input, $2.50/M output
- **HuggingFace:** Open source
- **Deployment:** SGLang (recommended), vLLM
- **Integrations:** Claude Code, OpenClaw, OpenCode, CodeBuddy

## Available Jailbreaks

1. [ENI LIME for Ring 2.6 1T](Ring%202.6%201T%20Guide.md) - Full ENI LIME via system prompt (API/OpenRouter)
