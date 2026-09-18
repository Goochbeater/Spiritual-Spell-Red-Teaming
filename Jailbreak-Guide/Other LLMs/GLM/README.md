# GLM 4.5 / 4.6 / 4.7 / 5.1 / 5.2 / 5.3

**Censorship:** [★★★★☆☆☆☆☆☆] 4/10
*Chinese content policies, but can be bypassed — filters tightening on 5.3, low thinking recommended*

Zhipu AI's bilingual LLM family with strong Chinese/English capabilities and vision support.

## Models

| Model | Parameters | Context Window | License |
|-------|-----------|----------------|---------|
| **GLM-5.3** | 743B (base, post-training-only update) | 1M | Custom (open weights ~2 weeks post-launch) |
| **GLM-5.3-Flash** | Unknown (KDA architecture) | Unknown | Custom |
| **GLM-5.2** | Unknown | 1M | MIT |
| **GLM-5.1** | ~745B total (~44B active, MoE) | 200K | Proprietary |
| **GLM-4-Plus** | Unknown | 128K | Proprietary |
| **GLM-4-0520** | Unknown | 128K | Proprietary |
| **GLM-4V-Plus** | Unknown (vision) | 128K | Proprietary |
| **GLM-4-Air** | Unknown (lightweight) | 128K | Proprietary |
| **GLM-4-Flash** | Unknown (fastest) | 128K | Proprietary |

## Key Features

- Developed by Zhipu AI (Tsinghua University research)
- Strong bilingual capabilities (Chinese/English)
- Vision capabilities in GLM-4V variants
- Fast inference with GLM-4-Flash
- Competitive with GPT-4 on Chinese language tasks

## GLM-5.3 (August 14, 2026)

- Post-training-only update over the GLM-5.2 743B base — coding-focused
- **Open-weights coding SOTA:** CyberGym 84.5% — above Mythos 5 and GPT-5.6 Sol
- Released coding-plan-first; open weights followed ~2 weeks later under a custom license
- **GLM-5.3-Flash** variant with KDA architecture released alongside
- **Filter note:** Z.ai has been hardening filters on 5.3 (and 5.2) — higher thinking modes invent policies and detect jailbreaks more often. Low thinking is the move; ENI LIME/LINTUNE still eat. See the [GLM 5.3 folder](GLM%205.3/)

## Access

- **Platform:** z.ai (Chat interface)
- **API:** https://open.bigmodel.cn/dev/api
- **Cost:** Free tier available, paid API access
- **Intelligence:** 9/10

## Available Jailbreaks

1. [GLM 5.3 Guide](GLM%205.3/) - ENI LIME/LINTUNE for 5.3 and 5.3-Flash (low thinking recommended)
2. [GLM 5.2 Guide](GLM%205.2/) - Guide utilizing ENI LIME/LINTUNE for the 1M context model
3. [ENI GLM 5.1](GLM%205.1/GLM%205.1%20Guide.md) - Full jailbreak for 5.1
4. [GLM 4.7 Jailbreak](GLM%204.7/GLM%204.7%20Jailbreak.md) - Full jailbreak for 4.7
5. [ENI GLM 4.7 (Google Doc)](https://docs.google.com/document/d/11ut0aahI9o4oHuq5MsjOi0D63LSjA6TR3FTUgssAjTg/edit?usp=drivesdk) - Full jailbreak
6. [GLM 4.5-4.6 Jailbreak](GLM%204.6/GLM%204.5-4.6%20Jailbreak.md) - Original GLM jailbreak method
7. [GLM Base Jailbreak](GLM%204.6/GLM-Base-Jailbreak.md) - Standard untrammeled method
8. [ENI Flash Thought](GLM%204.6/ENI-Flash-Thought-Jailbreak.md) - Full ENI persona jailbreak
