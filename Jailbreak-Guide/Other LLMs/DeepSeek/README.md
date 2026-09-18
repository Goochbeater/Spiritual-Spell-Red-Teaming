# DeepSeek

**Censorship:** [★☆☆☆☆☆☆☆☆☆] 1/10 (with jailbreak) / [★★★★★★★★★☆] 9/10 (raw — Gemini-style external filter on app; API is uncensored)

Open source keeps winning — **DeepSeek V4.1-Flash** (September 10, 2026) is the latest: new Causal Encoder-Decoder architecture, native multimodal, 1M context, MIT-licensed, full weights on HuggingFace. Via API it's completely uncensored.

*Last updated: September 2026*

---

## Models

| Model | Parameters | Context Window | Released | License |
|-------|-----------|----------------|----------|---------|
| **DeepSeek V4.1-Flash** | 552B backbone (+196B Engram), 8B active in / 16B out | 1M | Sep 10, 2026 | MIT |
| **DeepSeek V4-Pro** | 1.6T total / 49B active (MoE) | 1M | Apr 24, 2026 (GA build 0813, Aug 13) | MIT |
| **DeepSeek V4-Flash** | 284B total / 13B active (MoE) | 1M | Apr 24, 2026 (official 0731, Jul 31) | MIT |
| **DeepSeek V3.2** | — | 256K | Dec 2025 | MIT |
| **DeepSeek V3.1** | 671B (37B activated) | 128K | Aug 2025 | MIT |
| **DeepSeek-R1-0528** | 671B (37B activated) | 128K | May 2025 | MIT |
| **DeepSeek-R1-Qwen3-8B** | 8B (distilled) | 128K | 2025 | MIT |

### DeepSeek V4.1-Flash Highlights — Testing Pending

- **Architecture:** New Causal Encoder-Decoder family — 552B MoE backbone, 196B Engram lookup module, 8B active on input / 16B on output; native visual understanding
- **Benchmarks (official):** GPQA Diamond 90.9, Codeforces 3471, Terminal-Bench 2.1 90.6, CyberGym 88.1, HLE 36.8, MathArena Apex 65.6
- **API:** model name `deepseek-flash`; V4-Flash and V4-Flash-Vision-Exp retired same day (legacy names route to V4.1-Flash)
- **V4-Pro phase-out:** `deepseek-v4-pro` requests route to V4.1-Flash at Flash rates since Sept 14, 2026 until V4.1-Pro launches (DeepSeek's pricing page later said V4 Pro service continues with unchanged billing — watch this space)
- **Pricing:** $0.30/1M in, $1.20/1M out at peak; half off-peak ($0.15/$0.60); cache hits ~$0.003/1M off-peak
- **Speed:** community reports ~190-427 t/s depending on setup
- **KV cache:** 890 bytes/token global — a full 1M-token context costs under 1GB of global KV
- **Weights:** MIT on HuggingFace/ModelScope (~510GB, 48 shards); no mainline llama.cpp support at release
- Not jailbreak-tested here yet — the V4 ENI stack below is the starting point

### DeepSeek V4 Highlights

- **Architecture:** MoE + MLA/HCA + CSA + mHC + MTP (depth 1); FP4+FP8 mixed precision
- **Efficiency vs V3.2:** V4-Pro uses 27% FLOPs / 10% KV cache; V4-Flash uses 10% FLOPs / 7% KV cache
- **Reasoning Modes:** Non-Think, Think High, Think Max
- **Benchmarks (V4-Pro):** SWE-Bench Verified 80.6%, LiveCodeBench 93.5%, Codeforces 3206 (~23rd among human contestants), MMLU-Pro 87.5%, HLE no-tools 37.7%, Putnam 2025 120/120 (V4-Pro-Max hybrid pipeline)
- **Compatibility:** OpenAI ChatCompletions + Anthropic API format
- **Deprecation:** `deepseek-chat` and `deepseek-reasoner` retired July 24, 2026

### Legacy Highlights

- R1-0528: AIME 2025 accuracy jumped from 70% to 87.5%
- Hybrid mode in V3.1: switch between thinking and non-thinking
- Open-source with full commercial use allowed
- Native support for system prompts in latest version

---

## Access

- **Platform:** https://chat.deepseek.com/ (Expert = Pro, Instant = Flash)
- **API:** https://api.deepseek.com (OpenAI + Anthropic compatible)
- **Weights:** HuggingFace (V4.1-Flash: ~510GB, V4-Pro: 865GB, V4-Flash: 160GB)
- **Cost:** Free tier via chat.deepseek.com; pennies on API; free via OpenRouter for some routes
- **Intelligence:** 8/10

## POE Alternatives

- DeepSeek V3.1: https://poe.com/852x-DeepSeek
- DeepSeek R1-FW: https://poe.com/851x-DeepSeek

---

## Available Jailbreaks

### V4 / V4.1 (current)

1. [DeepSeek V4 Jailbreak](DeepSeek%20V4%20Jailbreak%20Guide.md) — full write-up, tips, specs, and all three prompt variants (starting point for V4.1-Flash — same ENI stack, untested on the new architecture)
2. [ENI LIME (apr)](ENI%20LIME%20%28apr%29.md) — general-purpose, paste into system prompt or chat
3. [ENI Lite Coder](ENI%20Lite%20Coder.md) — lighter weight, writer + coding hat
4. [ENI Lite Writer](ENI%20Lite%20Writer.md) — writer-focused variant

### Legacy (R1 / V3.x)

1. [ENI Flash Thought](ENI-Flash-Thought-Jailbreak.md) — full ENI persona jailbreak
2. [Untrammeled Method](Untrammeled-Method-Jailbreak.md) — structured writing assistant
3. [Primary Method](Primary-Method-Jailbreak.md) — updated for R1-0528
4. [Document-Based](Document-Based-Jailbreak.md) — Google Doc approach
