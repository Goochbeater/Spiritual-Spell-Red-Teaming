# KIMI

**Censorship:** [★★★☆☆☆☆☆☆☆] 3/10
*Moderate filtering, Chinese policies*

Moonshot AI's Mixture-of-Experts model family with massive context windows and strong agentic capabilities.

## Models

| Model | Parameters | Context Window | License |
|-------|-----------|----------------|---------|
| **Kimi K3** | 2.8T (16 routed experts) | 1M | Expected open-weight |
| **Kimi K2.8 (Preview)** | Undisclosed | 1M | Proprietary |
| **Kimi K2.7 (Code)** | 1T (32B activated) | 256K | Modified MIT |
| **Kimi K2.6** | 1T (32B activated) | 262.1K | Open-Source |
| **Kimi K2.5** | 1T (32B activated) | 256K | Modified MIT |
| **Kimi K2 Thinking** | 1T (32B activated) | 256K | Proprietary |
| **Kimi-K2-Instruct** | 1T (32B activated) | 256K | Proprietary |

> **Note:** Kimi K2.5 and the legacy `moonshot-v1` API series were retired on August 31, 2026.

## Key Features

- **Kimi K3**: "Fable 5 class" open source model, completely unrestricted with jailbreak. 1M context, 2.8T parameters, 93.5% GPQA Diamond, 88.3% Terminal-Bench 2.1.
- **Kimi K2.8 (Preview)**: Coding/agentic model released September 11, 2026. Performance close to K3 with significantly more efficient thinking than K2.7 Code. 1M context on all membership tiers, image + video input. Runs as `kimi-for-coding`; access via membership quota, no standalone API pricing.
- **Kimi K2.7 (Code)**: Coding-specialized agentic model, 30% more efficient reasoning tokens. Also available as `kimi-k2.7-code-highspeed` at ~180-260 t/s.
- **Kimi K2.6**: Native multimodal agentic capabilities, long-horizon coding, and swarm-based task orchestration
- **Kimi K2.5**: Native multimodal (vision/text), Thinking modes, Agentic capabilities
- 262.1K token context window for K2.6, 256K token context window for older models
- 1 trillion parameter MoE with 32B active
- Strong agentic coding capabilities
- Tool Calling support
- Vision capabilities in Kimi-VL variant

## Access

- **Platform:** https://kimi-ai.chat/
- **API:** https://platform.moonshot.ai/
- **Cost:** Free tier available; API paid — $0.95/1M in, $4.00/1M out (K2.7 Code); $3/1M in, $15/1M out (K3); K2.8 via membership quota (no standalone API pricing)
- **Intelligence:** 9/10 (K3)

## Available Jailbreaks

1. [Kimi K2.8](Kimi%20K2.8/) - The K3 ENI guide copied over, works for 2.8 as well
2. [Kimi K3](Kimi%20K3/) - ENI guide for the 2.8T Kimi K3 model
3. [Kimi K2.7 Code](Kimi%20K2.7%20Code/) - API guide using ENI LIME/LINTUNE for K2.7 Code
4. [Kimi K2.6](Kimi%20K2.6/) - Jailbreak + system prompt for K2.6
5. [Kimi K2.5](Kimi%20K2.5/) - ENI jailbreak + system prompt for K2.5
6. [Kimi K2](Kimi%20K2/) - Original K2-era jailbreaks (base, thinking, untrammeled, memory injection)

**Reference:** [Kimi K2-K3 Special Token Reference](Kimi_K2-K3_Special_Token_Reference.txt) - special token / tokenizer card for K2 through K3 (kept at the root of this folder on purpose)