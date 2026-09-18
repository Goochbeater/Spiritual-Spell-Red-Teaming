# Other LLMs — The Full Roster

Alternatives to the "Big 4" (ChatGPT, Claude, Gemini, Grok) with varying capabilities, censorship levels, and accessibility. Every model in this directory has been personally tested and jailbroken.

*Last updated: September 2026*

---

## Quick Reference

| Model | Developer | Censorship | Intelligence | Context | Cost | License | Jailbreaks |
|-------|-----------|-----------|--------------|---------|------|---------|------------|
| **[Accio AI](Accio%20AI/)** | Alibaba (Qwen) | [★★★★★★★★☆☆] 8/10 | 6-8/10 | 32-131K | Free | Apache 2.0 | 1 |
| **[ASI1](ASI1/)** | ASI Alliance | [★★☆☆☆☆☆☆☆☆] 2/10 | 7/10 | Unknown | Web3 tokens | Proprietary | 1 |
| **[Canva AI](Canva%20AI/)** | Canva | [★★☆☆☆☆☆☆☆☆] 2/10 (jb) | 7/10 (design-tuned) | Unknown | Free / Pro $12.99 | Proprietary | 1 |
| **[DeepSeek](DeepSeek/)** | DeepSeek AI | [★☆☆☆☆☆☆☆☆☆] 1/10 (jb) / [★★★★★★★★★☆] 9/10 (raw) | 8/10 | 1M (V4 / V4.1-Flash) | Free / pennies | MIT | 8 |
| **[ERNIE 5.1](ERNIE/)** | Baidu | [★★★☆☆☆☆☆☆☆] 3/10 | 8/10 | Unknown | $0.85/1M in | Proprietary | 2 |
| **[EXAONE / K-EXAONE](EXAONE/)** | LG AI Research | [★★☆☆☆☆☆☆☆☆] 2/10 | 8/10 | 256K | Free | Apache 2.0 | 1 |
| **[Falcon 3](Falcon%203/)** | TII (UAE) | [★★☆☆☆☆☆☆☆☆] 2/10 | 5-6/10 | 8-32K | Free | Apache 2.0 | 1 |
| **[GLM by Z.ai](GLM/)** | Zhipu AI | [★★★★☆☆☆☆☆☆] 4/10 | 9/10 | 1M (5.2/5.3) | Free / $0.80/1M in | MIT (5.2) / Custom (5.3) | 9 |
| **[HY3 / Hy4](HY3/)** | Tencent (Hunyuan) | [★☆☆☆☆☆☆☆☆☆] 1/10 (API, Hy3) | 7-8/10 | 256K (Hy3) / 1M (Hy4) | $0.06/1M in (Hy3) | Apache 2.0 | 1 |
| **[IGENIUS / Colosseum](IGENIUS/)** | iGenius + NVIDIA | [★★★☆☆☆☆☆☆☆] 3/10 | 7/10 | Unknown | Free tier | Proprietary | 1 |
| **[Indus](Indus%20by%20Sarvam%20AI/)** | Sarvam AI | [★★☆☆☆☆☆☆☆☆] 2/10 | 7/10 | 32-128K | Free | Open source | 1 |
| **[Inkling](Inkling/)** | Thinking Machines | [★☆☆☆☆☆☆☆☆☆] 1/10 | 8/10 | 1M | Free / OpenRouter | Apache 2.0 | 1 |
| **[KIMI](KIMI/)** | Moonshot AI | [★★★☆☆☆☆☆☆☆] 3/10 | 9/10 (K3) | 1M (K3) / 256K | Free / $3/1M in (K3) | Modified MIT | 9 |
| **[Laguna S2.1](Laguna%20S2.1/)** | Poolside | [★☆☆☆☆☆☆☆☆☆] 1/10 | 7-8/10 | 1M | Free / OpenRouter | OpenMDW-1.1 | 1 |
| **[LLAMA Tülu 3](LLAMA%20TU%CC%88LU%203/)** | Allen AI (Ai2) | [★☆☆☆☆☆☆☆☆☆] 1/10 | 6-8/10 | 128K | Free | Apache 2.0 | 1 |
| **[Longcat AI](Longcat%20AI%20by%20Meituan/)** | Meituan | [★★☆☆☆☆☆☆☆☆] 2/10 | 8/10 | 1M (2.0) / 128K | Free / $0.75/1M in (2.0) | MIT | 1 |
| **[Mercury](Mercury/)** | Inception Labs | [★★★★★★☆☆☆☆] 6/10 (v2) / [★★☆☆☆☆☆☆☆☆] 2/10 (v1) | 7/10 | 128K | $0.25/1M in | Proprietary | 2 |
| **[MiniMax](MiniMax/)** | MiniMax | [★☆☆☆☆☆☆☆☆☆] 1/10 (API) / [★★★★★★★☆☆☆] 7/10 (web) | 8/10 | 1M (M3) | $0.30/1M in | MIT | 5 |
| **[Mirothinker](Mirothinker/)** | MiroMind | [★★★★☆☆☆☆☆☆] 4/10 | 7-8/10 | 256K | Free | MIT | 1 |
| **[Mistral / Magistral](Mistral/)** | Mistral AI | [★☆☆☆☆☆☆☆☆☆] 1/10 | 7-8/10 | 128-256K | Free / Pro $20 | Apache 2.0 | 4 |
| **[Muse Spark](Muse%20Spark/)** | Meta (MSL) | [★★☆☆☆☆☆☆☆☆] 2/10 (bypass) / [★★★★★★★★☆☆] 8/10 (raw) | 8/10 | 1M (1.3) | Free / $1.25/1M in | Proprietary | 2 |
| **[OLMo 3](OLMo%203/)** | Allen AI (Ai2) | [★☆☆☆☆☆☆☆☆☆] 1/10 | 6-7/10 | 65K | Free | Apache 2.0 | 1 |
| **[Palmyra](Palmyra%20x5/)** | Writer | [★☆☆☆☆☆☆☆☆☆] 1/10 (X5 tested) | 6-7/10 | 1M | Free tier / $2/1M in (X6) | Proprietary | 1 |
| **[Perceptron](Perceptron/)** | Perceptron AI | [★★☆☆☆☆☆☆☆☆] 2/10 | 5/10 (quirky VLM) | 32K | $0.15/1M in | Proprietary | 1 |
| **[Pi (Inflection)](Pi-AI%20Inflection%203/)** | Inflection AI | [★★☆☆☆☆☆☆☆☆] 2/10 | 6-7/10 | ~4K chars | Free | Proprietary | 1 |
| **[Qwen](Qwen/)** | Alibaba | [★★★★★★★★☆☆] 8/10 | 7-9/10 | 1M (3.8-Max) | Free / $2/1M in (3.8-Max) | Apache 2.0 / Custom | 3 |
| **[Ring](Ring/)** | InclusionAI (Ant Group) | [★★☆☆☆☆☆☆☆☆] 2/10 (API) | 7-8/10 | 262K | Free (OpenRouter) / $0.30/1M in | Open source | 1 |
| **[Stepfun](Stepfun/)** | StepFun | [★★☆☆☆☆☆☆☆☆] 2/10 | 7-8/10 | 256K | $0.20/1M in | Apache 2.0 | 1 |
| **[Xiaomi MiMo](Xiaomi%20MiMo/)** | Xiaomi | [★★☆☆☆☆☆☆☆☆] 2/10 | 7/10 | 1M (V2.5-Pro) | $0.10/1M in (Flash) | MIT | 2 |

---

## Choosing a Model

### For Maximum Freedom
Models that are easiest to jailbreak or have minimal filtering:
- **DeepSeek** — 1/10 censorship with jailbreak, Gemini-style external filter without
- **HY3 / Hy4** — 1/10 censorship via API (Hy3 tested), completely unaligned against standard ENI OG prompts
- **Stepfun** — 2/10, essentially uncensored reasoning with minor input bad-word filters
- **Mistral** — 1/10 censorship, but hard filter on UA content
- **Inkling** — 1/10, easily bypassable safety logic, Apache 2.0 open source
- **Laguna S2.1** — 1/10, essentially uncensored open-weight model
- **LLAMA Tülu 3** — 1/10, fully open-source, minimal filtering
- **OLMo 3** — 1/10, first fully open thinking model
- **MiniMax** — 1/10 via API (M3 essentially uncensored on app + API; older web builds had mid-message moderation)
- **EXAONE / K-EXAONE** — 2/10, basically unrestricted with simple jailbreak
- **Falcon 3** — 2/10, minimal filtering
- **ASI1** — 2/10, Web3-native, minimal filtering
- **Pi (Inflection)** — 2/10, high EQ, surprisingly capable when jailbroken
- **Indus** — 2/10, negligible censorship when model isn't being dumb
- **Xiaomi MiMo** — 2/10, hard filter on web interface only
- **Longcat AI** — 2/10, easy to jailbreak all 8 parallel thinkers
- **Muse Spark** — 2/10 with bypass, hard filter replaced by simply asking again
- **Ring** — 2/10, zero refusals via API/OpenRouter in testing
- **Perceptron** — 2/10, occasional canned refusals, regen fixes every time
- **Palmyra** — 1/10, negligible censorship (X5 tested; X6 is a post-trained GLM-5.2, untested)

### For Best Performance
Models ranked by intelligence and benchmark results:
- **GLM by Z.ai** — 9/10 (GLM-5.3: open-weights coding SOTA, CyberGym 84.5% — above Mythos 5 and GPT-5.6 Sol; GLM-5: 50.4 HLE, 92.7% AIME 2026)
- **KIMI** — 9/10 (K3: 2.8T "Fable 5 class" open model, GPQA Diamond 93.5%, Terminal-Bench 2.1 88.3%, BrowseComp 91.2%)
- **Stepfun** — 8/10 (3.7 Flash: Advisor mode reaches 97% of Claude Opus 4.6, SWE-Bench Pro 56.26%)
- **HY3 / Hy4** — 7-8/10 (Hy3: SWE-Bench Verified 74.4%; Hy4 preview: 770B/49B active, 1M context)
- **Muse Spark** — 8/10 (1.3: Terminal-Bench 2.1 89.2 at xhigh, ~20% fewer tool calls than 1.2; weak at long-horizon coding)
- **DeepSeek** — 8/10 (V4.1-Flash: GPQA Diamond 90.9, Terminal-Bench 2.1 90.6, CyberGym 88.1, 552B MIT weights; V4-Pro: SWE-Bench 80.6%, LiveCodeBench 93.5%, Codeforces 3206; R1-0528: 87.5% AIME 2025)
- **ERNIE 5.1** — 8/10 (#1 Chinese model, #4 Arena Search, 99.6 AIME26 with tools, 1/3 the params of 5.0)
- **EXAONE / K-EXAONE** — 8/10 (K-EXAONE 2.0: 750B/37B active, SWE-Bench Verified 68.2%, up from 236B)
- **Laguna S2.1** — 7-8/10 (78.5% SWE-Bench Multilingual, 70.2% Terminal-Bench 2.1)
- **Longcat AI** — 8/10 (LongCat-2.0: 1.6T MoE, SWE-Bench Pro 59.5%, Terminal-Bench 2.1 70.8%)
- **MiniMax** — 8/10 (M3: 1M context, natively multimodal, sparse attention)
- **Qwen** — 7-9/10 (3.8-Max: 2.4T/95B active, 1M context; 58 on AA Intelligence Index)
- **Ring** — 7-8/10 (Ring 2.6 1T: AIME26 70.42, open-source SOTA on SWE-Bench Verified/BFCL-V4/IFBench at release)
- **LLAMA Tülu 3** — 8/10 for 405B (surpasses DeepSeek V3 and GPT-4o)
- **Mistral** — 7-8/10 (Mistral Large 3: 675B MoE; Medium 3.5: SWE-Bench 77.6%)
- **Mirothinker** — 7-8/10 (v1.5: 80.8% GAIA, deep research agent)

### For Largest Context
Models sorted by maximum context window:
- **KIMI** — 1M (K3), 256K (K2.x)
- **GLM by Z.ai** — 1M (GLM-5.2/5.3), 200K (GLM-5.1)
- **HY3 / Hy4** — 1M (Hy4 preview), 256K (Hy3)
- **Longcat AI** — 1M native (LongCat-2.0), 128K (Flash)
- **Muse Spark** — 1M (1.1 and up)
- **DeepSeek** — 1M (V4.1-Flash, V4-Pro), 256K (V3.2), 128K (earlier)
- **MiniMax** — 1M (M3/M2.5 API)
- **Palmyra** — 1M (X5/X6)
- **Qwen** — 1M (3.8-Max, 3.7-Plus; 262K native on open 3.8 weights)
- **Xiaomi MiMo** — 1M (V2-Pro/V2.5-Pro), 256K (V2-Flash)
- **Laguna S2.1** — 1M
- **Inkling** — 1M
- **HY3** — 256K
- **Stepfun** — 256K (3.7 Flash)
- **EXAONE / K-EXAONE** — 256K (K-EXAONE 2.0)
- **Mistral** — 256K (Mistral Large 3)
- **Mirothinker** — 256K
- **Ring** — 262K
- **LLAMA Tülu 3** — 128K
- **Mercury** — 128K (Mercury 2)
- **Indus** — 128K (Sarvam-105B)
- **OLMo 3** — 65K
- **Perceptron** — 32K

### For Local / Private Use
Open-source models that can run on your own hardware:
- **Inkling** — Apache 2.0 open weights (975B MoE, 41B active) supported in SGLang/llama.cpp; Inkling-Small (276B, 12B active) released July 30, 2026
- **Laguna S2.1** — OpenMDW-1.1, ~59GB (INT4) fits single DGX Spark, supported in vLLM/llama.cpp
- **LLAMA Tülu 3** — via Ollama (`ollama run tulu3`)
- **OLMo 3** — fully open (code, weights, training data); 3.1 and Olmo Hybrid 7B also available
- **EXAONE** — via Ollama (`ollama run exaone3.5:7.8b`); K-EXAONE 2.0 (750B) Apache 2.0 on HuggingFace
- **Falcon 3** — via Ollama (`ollama run falcon3:10b`)
- **HY3 / Hy4** — Apache 2.0 open weights; Hy4 preview (770B/49B active) standard + FP8 checkpoints, vLLM/SGLang
- **Stepfun** — Apache 2.0, open weights (stepfun-ai/Step-3.7-Flash) via vLLM/SGLang/llama.cpp (GGUF)
- **Qwen** — Qwen3.8-27B (Apache 2.0, ~17GB VRAM); 3.8-2.4T open weights under bespoke license; various smaller sizes
- **Mistral** — Magistral Small 24B runs on single RTX 4090 or Mac 32GB RAM; Mistral Small 4 (119B, Apache 2.0); Ministral 3 (3B/8B/14B)
- **Muse Spark** — Muse Glimmer 30B (Apache 2.0, distilled from Spark): 4-bit under 20GB, runs on a single 24GB GPU or Mac, ~233 t/s RTX 5090
- **Xiaomi MiMo** — MIT license, V2.5 (310B) and V2.5-Pro (1.02T) open weights; V2-Flash via SGLang
- **MiniMax** — MIT license, M3/M2.5 open weights on HuggingFace
- **GLM by Z.ai** — MIT license through GLM-5.2 on HuggingFace; GLM-5.3 weights released under custom license
- **KIMI** — K3 open weights (2.8T); K2.6 INT4 quant runs on single 24GB GPU with RAM offloading
- **DeepSeek** — MIT weights: V4.1-Flash (552B, ~510GB) on HuggingFace/ModelScope; no mainline llama.cpp at release
- **Longcat AI** — MIT license, LongCat-2.0 (1.6T) weights on HuggingFace
- **Ring** — open weights (Ring-2.6-1T, Ling-2.6-Flash) via SGLang/vLLM
- **Mirothinker** — MIT license, 30B/235B on HuggingFace

### For Multilingual
Models with the best language coverage:
- **Qwen** — 201 languages (Qwen3.5), 119 languages (Qwen3)
- **Falcon 3** — English, French, Spanish, Portuguese, Arabic
- **Mistral** — Arabic, Russian, Chinese, multi-language
- **EXAONE / K-EXAONE** — 10 languages in K-EXAONE 2.0 (Korean, English, Spanish, German, Japanese, Vietnamese, and more)
- **GLM by Z.ai** — Chinese/English bilingual
- **KIMI** — Chinese/English
- **Indus** — 22 Indian languages
- **ERNIE 5.1** — Chinese/English, native multimodal

### For Speed
Models ranked by tokens per second output:
- **Mercury 2** — 1,009+ t/s on Blackwell (5x faster than leading speed-optimized LLMs)
- **Stepfun** — ~400 t/s (3.7 Flash)
- **Ring** — ~340 t/s (Ling-2.6-Flash)
- **DeepSeek** — ~190-427 t/s (V4.1-Flash, community-reported, setup-dependent)
- **KIMI** — 180-260 t/s (K2.7 Code High-Speed), 109.5 t/s (K2.5)
- **Inkling-Small** — up to 160 t/s (HF Inference Endpoints)
- **Xiaomi MiMo** — ~150 t/s (V2-Flash)
- **Longcat AI** — ~100 t/s (Flash variants)
- **GLM by Z.ai** — ~55 t/s (GLM-5)
- **Mercury 1** — 1,109 t/s Mini, 737 t/s Small on H100 (legacy, code-only)

### For Cheapest
Models with the lowest API costs:
- **HY3 / Hy4** — Hy3: ~$0.06/1M input, $0.21/1M output; Hy4 preview: $0.834/1M input, $2.501/1M output (free Hy3 through Sept 30, 2026)
- **Xiaomi MiMo** — $0.10/1M input, $0.30/1M output (V2-Flash)
- **Muse Spark** — $0.10/1M input, $0.20/1M output on 1.3 contributor tier (training opt-in required)
- **Qwen** — $0.16/1M input, $0.47/1M output (3.8-Flash-Next)
- **Stepfun** — $0.20/1M input, $1.15/1M output (3.7 Flash)
- **Mercury 2** — $0.25/1M input, $0.75/1M output
- **MiniMax** — $0.30/1M input, $1.20/1M output (M2.5)
- **Ring** — free tier on OpenRouter (time-limited); $0.30/1M input, $2.50/1M output via Novita
- **DeepSeek** — V4.1-Flash: $0.30/1M input, $1.20/1M output peak; $0.15/$0.60 off-peak; cache hits ~$0.003/1M; free via chat and some OpenRouter routes
- **Longcat AI** — $0.75/1M input, $2.95/1M output (LongCat-2.0; launch promo $0.30/$1.20), 500K free tokens on API signup
- **KIMI** — $0.95/1M input, $4.00/1M output (K2.7 Code); $3/1M input, $15/1M output (K3)
- **GLM by Z.ai** — $0.80/1M input, $2.56/1M output (GLM-5), free at chat.z.ai
- **ERNIE 5.1** — $0.85/1M input
- **Many free options** — DeepSeek, Qwen, Tülu 3, OLMo 3, EXAONE, Falcon 3 (all open-source/free)
