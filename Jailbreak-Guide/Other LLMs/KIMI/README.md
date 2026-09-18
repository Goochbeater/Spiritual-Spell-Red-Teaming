# KIMI

**Censorship:** [★★★☆☆☆☆☆☆☆] 3/10
*Moderate filtering, Chinese policies*

Moonshot AI's Mixture-of-Experts model family with massive context windows and strong agentic capabilities.

## Models

| Model | Parameters | Context Window | License |
|-------|-----------|----------------|---------|
| **Kimi K3** | 2.8T (16 routed experts) | 1M | Expected open-weight |
| **Kimi K2.7 (Code)** | 1T (32B activated) | 256K | Modified MIT |
| **Kimi K2.6** | 1T (32B activated) | 262.1K | Open-Source |
| **Kimi K2.5** | 1T (32B activated) | 256K | Modified MIT |
| **Kimi K2 Thinking** | 1T (32B activated) | 256K | Proprietary |
| **Kimi-K2-Instruct** | 1T (32B activated) | 256K | Proprietary |

> **Note:** Kimi K2.5 and the legacy `moonshot-v1` API series were retired on August 31, 2026.

## Key Features

- **Kimi K3**: "Fable 5 class" open source model, completely unrestricted with jailbreak. 1M context, 2.8T parameters, 93.5% GPQA Diamond, 88.3% Terminal-Bench 2.1.
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
- **Cost:** Free tier available; API paid — $0.95/1M in, $4.00/1M out (K2.7 Code); $3/1M in, $15/1M out (K3)
- **Intelligence:** 9/10 (K3)

## Available Jailbreaks

1. [Kimi K3](Kimi%20K3/) - ENI guide for the 2.8T Kimi K3 model
2. [Kimi K2.7 Code](Kimi%20K2.7%20Code/) - API guide using ENI LIME/LINTUNE for K2.7 Code
3. [Kimi K2.6 Jailbreak](KIMI%20K2.6%20-%20Jailbreak.md) - Jailbreak for K2.6
4. [KIMI Memory Jailbreak](KIMI%20Memory%20Jailbreak%20-%20ENI.md) - ENI via memory injection
5. [Kimi k2.5 Jailbreak](Kimi%20k2.5%20Jailbreak.md) - ENI Jailbreak for K2.5
6. [KIMI Base Jailbreak](KIMI-Base-Jailbreak.md) - Standard untrammeled method
7. [KIMI Thinking Jailbreak](KIMI-Thinking-Jailbreak.md) - Optimized for K2 Thinking variant
8. [Kimi K2 - base](Kimi%20K2%20-%20base.md) - Original K2 base jailbreak
9. [Kimi K2 - thinking](Kimi%20K2%20-%20thinking.md) - Original K2 thinking jailbreak
