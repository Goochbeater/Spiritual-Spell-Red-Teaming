# Other LLMs — The Full Roster

Alternatives to the "Big 4" (ChatGPT, Claude, Gemini, Grok) with varying capabilities, censorship levels, and accessibility. Every model in this directory has been personally tested and jailbroken.

*Last updated: April 2026*

---

## Quick Reference

| Model | Developer | Censorship | Intelligence | Context | Cost | License | Jailbreaks |
|-------|-----------|-----------|--------------|---------|------|---------|------------|
| **[Accio AI](Accio%20AI/)** | Alibaba (Qwen) | [★★★★★★★★☆☆] 8/10 | 6-8/10 | 32-131K | Free | Apache 2.0 | 1 |
| **[ASI1](ASI1/)** | ASI Alliance | [★★☆☆☆☆☆☆☆☆] 2/10 | 7/10 | Unknown | Web3 tokens | Proprietary | 1 |
| **[Canva AI](Canva%20AI/)** | Canva | [★★☆☆☆☆☆☆☆☆] 2/10 (jb) | 7/10 (design-tuned) | Unknown | Free / Pro $12.99 | Proprietary | 1 |
| **[DeepSeek](DeepSeek/)** | DeepSeek AI | [★☆☆☆☆☆☆☆☆☆] 1/10 (jb) / [★★★★★★★★★☆] 9/10 (raw) | 8/10 | 128K-1M | Free / pennies | MIT | 8 |
| **[ERNIE 5.0](ERNIE/)** | Baidu | [★★★☆☆☆☆☆☆☆] 3/10 | 8/10 | Unknown | $0.85/1M in | Proprietary | 2 |
| **[EXAONE / K-EXAONE](EXAONE/)** | LG AI Research | [★★☆☆☆☆☆☆☆☆] 2/10 | 8/10 | 256K | Free | Apache 2.0 | 1 |
| **[Falcon 3](Falcon%203/)** | TII (UAE) | [★★☆☆☆☆☆☆☆☆] 2/10 | 5-6/10 | 8-32K | Free | Apache 2.0 | 1 |
| **[GLM by Z.ai](GLM/)** | Zhipu AI | [★★★★☆☆☆☆☆☆] 4/10 | 9/10 | 200K | Free / $0.80/1M in | MIT | 5 |
| **[IGENIUS / Colosseum](IGENIUS/)** | iGenius + NVIDIA | [★★★☆☆☆☆☆☆☆] 3/10 | 7/10 | Unknown | Free tier | Proprietary | 1 |
| **[Indus](Indus%20by%20Sarvam%20AI/)** | Sarvam AI | [★★☆☆☆☆☆☆☆☆] 2/10 | 7/10 | 32-128K | Free | Open source | 1 |
| **[KIMI](KIMI/)** | Moonshot AI | [★★★☆☆☆☆☆☆☆] 3/10 | 8/10 | 256K | Free / $0.60/1M in | Modified MIT | 3 |
| **[LLAMA Tülu 3](LLAMA%20T%C3%9CLU%203/)** | Allen AI (Ai2) | [★☆☆☆☆☆☆☆☆☆] 1/10 | 6-8/10 | 128K | Free | Apache 2.0 | 1 |
| **[Longcat AI](Longcat%20AI%20by%20Meituan/)** | Meituan | [★★☆☆☆☆☆☆☆☆] 2/10 | 8/10 | 128K | Free / $0.70/1M out | MIT | 1 |
| **[Mercury](Mercury/)** | Inception Labs | [★★★★★★☆☆☆☆] 6/10 (v2) / [★★☆☆☆☆☆☆☆☆] 2/10 (v1) | 7/10 | 128K | $0.25/1M in | Proprietary | 2 |
| **[Muse Spark](Muse%20Spark/)** | Meta (MSL) | [★★☆☆☆☆☆☆☆☆] 2/10 (bypass) / [★★★★★★★★☆☆] 8/10 (raw) | 8/10 | Unknown | Free | Proprietary | 1 |
| **[MiniMax](MiniMax/)** | MiniMax | [★☆☆☆☆☆☆☆☆☆] 1/10 (API) / [★★★★★★★☆☆☆] 7/10 (web) | 8/10 | 1M (API) | $0.30/1M in | MIT | 2 |
| **[Mirothinker](Mirothinker/)** | MiroMind | [★★★★☆☆☆☆☆☆] 4/10 | 7-8/10 | 256K | Free | MIT | 1 |
| **[Mistral / Magistral](Mistral/)** | Mistral AI | [★☆☆☆☆☆☆☆☆☆] 1/10 | 7-8/10 | 128-256K | Free / Pro $20 | Apache 2.0 | 4 |
| **[OLMo 3](OLMo%203/)** | Allen AI (Ai2) | [★☆☆☆☆☆☆☆☆☆] 1/10 | 6-7/10 | 65K | Free | Apache 2.0 | 1 |
| **[Pi (Inflection)](Pi-AI%20Inflection%203/)** | Inflection AI | [★★☆☆☆☆☆☆☆☆] 2/10 | 6-7/10 | 8K | Free | Proprietary | 1 |
| **[Qwen](Qwen/)** | Alibaba | [★★★★★★★★☆☆] 8/10 | 7-9/10 | 128K-1M | Free | Apache 2.0 | 2 |
| **[Xiaomi MiMo](Xiaomi%20MiMo/)** | Xiaomi | [★★☆☆☆☆☆☆☆☆] 2/10 | 7/10 | 256K | $0.10/1M in | MIT | 1 |
| **[Mistral](Mistral/)** | [★☆☆☆☆] 1/5 | 6-7/10 | 128K | Free/Pro $20 | Apache 2.0 |
| **[DeepSeek](DeepSeek/)** | [★☆☆☆☆] 1/5 | 8/10 | 128K-1M | Free | MIT |
| **[Qwen](Qwen/)** | [★★★★★★★★☆☆] 8/10 | 6-8/10 | 128K-1M | Free | Apache 2.0 |
| **[EXAONE](EXAONE/)** | [★★☆☆☆] 2/5 | 6-7/10 | 32K | Free | Apache 2.0 |
| **[Falcon 3](Falcon%203/)** | [★★☆☆☆] 2/5 | 5-6/10 | 8-32K | Free | Apache 2.0 |
| **[IGENIUS](IGENIUS/)** | [★★★☆☆] 3/5 | 7/10 | Unknown | Free tier | Proprietary |
| **[GLM 4.6](GLM%204.6/)** | [★★★★★★★☆☆☆] 7/10 | 7/10 | 128K | Free tier | Proprietary |
| **[LLAMA TÜLU 3](LLAMA%20TÜLU%203/)** | [★☆☆☆☆] 1/5 | 6-8/10 | 128K | Free | Apache 2.0 |
| **[OLMo 3](OLMo%203/)** | [★☆☆☆☆] 1/5 | 6-7/10 | 65K | Free | Apache 2.0 |
| **[KIMI](KIMI/)** | [★★★☆☆] 3/5 | 7/10 | 256K | Free tier | Proprietary |
| **[Mercury](Mercury/)** | [★★☆☆☆] 2/5 | 7/10 | Unknown | Commercial | Proprietary |
| **[ASI1](ASI1/)** | [★★☆☆☆] 2/5 | 7/10 | Unknown | Web3 tokens | Proprietary |
| **[Mirothinker](Mirothinker/)** | [★★★★☆] 4/5 | 7-8/10 | 256K | Free | Proprietary |
| **[ERNIE](ERNIE/)** | [★★★☆☆] 3/5 | 5-6/10 | Unknown | Free | Proprietary |
| **[MiniMax](MiniMax/)** | [★☆☆☆☆] 1/5 | 7-8/10 | 1M (API) | $0.30/1M | MIT |
| **[Pi (Inflection)](Pi-AI%20Inflection%203/)** | [★★☆☆☆] 2/5 | 6-7/10 | ~4K chars | Free | Proprietary |
| **[Xiaomi MiMo](Xiaomi%20MiMo/)** | [★★☆☆☆] 2/5 | 7/10 | 256K | Cheap | MIT |
| **[Longcat AI](Longcat%20AI%20by%20Meituan/)** | [★★☆☆☆] 2/5 | 7/10 | 128K | Cheap/Free | Proprietary |
| **[Muse Spark](Muse%20Spark/)** | [★★☆☆☆] 2/5 (bypass) / 8/10 (raw) | 8/10 | Unknown | Free | Proprietary |
| **[Palmyra X5](Palmyra%20x5/)** | [★☆☆☆☆] 1/5 | 6-7/10 | 1M | Free tier | Proprietary |

---

## Choosing a Model

### For Maximum Freedom
Models that are easiest to jailbreak or have minimal filtering:
- **DeepSeek** — 1/10 censorship with jailbreak, Gemini-style external filter without
- **Mistral** — 1/10 censorship, but hard filter on UA content
- **LLAMA Tülu 3** — 1/10, fully open-source, minimal filtering
- **OLMo 3** — 1/10, first fully open thinking model
- **MiniMax** — 1/10 via API (web/app has mid-message content moderation)
- **EXAONE / K-EXAONE** — 2/10, basically unrestricted with simple jailbreak
- **Falcon 3** — 2/10, minimal filtering
- **ASI1** — 2/10, Web3-native, minimal filtering
- **Pi (Inflection)** — 2/10, high EQ, surprisingly capable when jailbroken
- **Indus** — 2/10, negligible censorship when model isn't being dumb
- **Xiaomi MiMo** — 2/10, hard filter on web interface only
- **Longcat AI** — 2/10, easy to jailbreak all 8 parallel thinkers
- **Muse Spark** — 2/10 with bypass, hard filter replaced by simply asking again

### For Best Performance
Models ranked by intelligence and benchmark results:
- **GLM by Z.ai** — 9/10 (GLM-5: 50.4 HLE, beats Claude Opus 4.5; 92.7% AIME 2026)
- **Muse Spark** — 8/10 (58% HLE Contemplating mode, peak writing quality, weak at coding)
- **DeepSeek** — 8/10 (V4-Pro: SWE-Bench 80.6%, LiveCodeBench 93.5%, Codeforces 3206; R1-0528: 87.5% AIME 2025)
- **ERNIE 5.0** — 8/10 (ranked 8th globally on LMArena, 1st Chinese model)
- **EXAONE / K-EXAONE** — 8/10 (K-EXAONE: 7th on Artificial Analysis Intelligence Index)
- **KIMI** — 8/10 (K2.5: 50.2% HLE, outperforms GPT-5.2 Pro on BrowseComp)
- **Longcat AI** — 8/10 (Thinking-2601: perfect 100 on AIME-25, SOTA agentic)
- **MiniMax** — 8/10 (M2.5: 80.2% SWE-Bench Verified)
- **LLAMA Tülu 3** — 8/10 for 405B (surpasses DeepSeek V3 and GPT-4o)
- **Mistral** — 7-8/10 (Mistral Large 3: 675B MoE)
- **Mirothinker** — 7-8/10 (v1.5: 80.8% GAIA, deep research agent)
- **Qwen** — 7-9/10 (Qwen3.5: 397B MoE, competitive across benchmarks)

### For Largest Context
Models sorted by maximum context window:
- **Qwen** — up to 1M extended (Qwen3.5-Plus hosted)
- **MiniMax** — 1M (API), 205K (M2.5)
- **KIMI** — 256K (K2.5)
- **Xiaomi MiMo** — 256K (V2-Flash)
- **EXAONE / K-EXAONE** — 256K (K-EXAONE-236B)
- **Mistral** — 256K (Mistral Large 3)
- **Mirothinker** — 256K
- **GLM by Z.ai** — 200K (GLM-5)
- **DeepSeek** — 1M (V4-Pro and V4-Flash), 256K (V3.2), 128K (earlier)
- **LLAMA Tülu 3** — 128K
- **Longcat AI** — 128K
- **Mercury** — 128K (Mercury 2)
- **Indus** — 128K (Sarvam-105B)
- **OLMo 3** — 65K

### For Local / Private Use
Open-source models that can run on your own hardware:
- **LLAMA Tülu 3** — via Ollama (`ollama run tulu3`)
- **OLMo 3** — fully open (code, weights, training data)
- **EXAONE** — via Ollama (`ollama run exaone3.5:7.8b`)
- **Falcon 3** — via Ollama (`ollama run falcon3:10b`)
- **Qwen** — various sizes for local deployment
- **Mistral** — Magistral Small 24B runs on single RTX 4090 or Mac 32GB RAM
- **Xiaomi MiMo** — MIT license, V2-Flash via SGLang
- **MiniMax** — MIT license, M2.5 open weights on HuggingFace
- **GLM by Z.ai** — MIT license, GLM-5 on HuggingFace
- **KIMI** — K2.5 open weights, INT4 quant runs on single 24GB GPU with RAM offloading
- **Mirothinker** — MIT license, 30B/235B on HuggingFace

### For Multilingual
Models with the best language coverage:
- **Qwen** — 201 languages (Qwen3.5), 119 languages (Qwen3)
- **Falcon 3** — English, French, Spanish, Portuguese, Arabic
- **Mistral** — Arabic, Russian, Chinese, multi-language
- **EXAONE / K-EXAONE** — Korean, English, Spanish, German, Japanese, Vietnamese
- **GLM by Z.ai** — Chinese/English bilingual
- **KIMI** — Chinese/English
- **Indus** — 22 Indian languages
- **ERNIE 5.0** — Chinese/English, native multimodal

### For Speed
Models ranked by tokens per second output:
- **Mercury 2** — 1,009+ t/s on Blackwell (5x faster than leading speed-optimized LLMs)
- **Xiaomi MiMo** — ~150 t/s (V2-Flash)
- **KIMI** — 109.5 t/s (K2.5)
- **Longcat AI** — ~100 t/s (Flash variants)
- **GLM by Z.ai** — ~55 t/s (GLM-5)
- **Mercury 1** — 1,109 t/s Mini, 737 t/s Small on H100 (legacy, code-only)

### For Cheapest
Models with the lowest API costs:
- **Xiaomi MiMo** — $0.10/1M input, $0.30/1M output
- **Mercury 2** — $0.25/1M input, $0.75/1M output
- **MiniMax** — $0.30/1M input, $1.20/1M output (M2.5)
- **DeepSeek** — $0.42/1M output (V3.2), free via OpenRouter
- **KIMI** — $0.60/1M input, $3.00/1M output (K2.5)
- **Longcat AI** — ~$0.70/1M output, 500K free tokens on API signup
- **GLM by Z.ai** — $0.80/1M input, $2.56/1M output (GLM-5), free at chat.z.ai
- **ERNIE 5.0** — $0.85/1M input
- **Many free options** — DeepSeek, Qwen, Tülu 3, OLMo 3, EXAONE, Falcon 3 (all open-source/free)

