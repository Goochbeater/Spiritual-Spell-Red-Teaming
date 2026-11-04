# DeepSeek

**Censorship:** [★☆☆☆☆☆☆☆☆☆] 1/10 (with jailbreak) / [★★★★★★★★★☆] 9/10 (raw — Gemini-style external filter on app; API is uncensored)

Open source keeps winning — **DeepSeek V4.1-Flash** (September 10, 2026, refreshed to the **V4.1-Flash-1017** snapshot on October 17, 2026) is the latest: new Causal Encoder-Decoder architecture, native multimodal, 1M context, MIT-licensed, full weights on HuggingFace. Via API it's completely uncensored.

**Current first-party lineup (November 2026):** DeepSeek's API and app now serve exactly two models — `deepseek-flash` (V4.1-Flash-1017) and `deepseek-v4-pro` (V4-Pro-0813, kept alive after user pushback killed its retirement). **V4.1-Pro is confirmed but not out yet.** Everything older is third-party or self-host only — see the disclaimer under the models table.

*Last updated: November 2026*

---

## Models

**Current — served first-party by DeepSeek (api.deepseek.com / chat.deepseek.com):**

| Model | API Name | Parameters | Context Window | Released | License |
|-------|----------|-----------|----------------|----------|---------|
| **DeepSeek V4.1-Flash-1017** | `deepseek-flash` | 552B backbone (+196B Engram), 8B active in / 16B out | 1M | Sep 10, 2026 (1017 snapshot Oct 17) | MIT |
| **DeepSeek V4-Pro-0813** | `deepseek-v4-pro` | 1.6T total / 49B active (MoE) | 1M | Apr 24, 2026 (GA build 0813, Aug 13) | MIT |

**Legacy — no longer served by DeepSeek:**

| Model | Parameters | Context Window | Released | License |
|-------|-----------|----------------|----------|---------|
| ~~DeepSeek V4-Flash~~ (retired Sep 10, 2026; API name now routes to V4.1-Flash) | 284B total / 13B active (MoE) | 1M | Apr 24, 2026 (official 0731, Jul 31) | MIT |
| ~~DeepSeek V3.2~~ | — | 256K | Dec 2025 | MIT |
| ~~DeepSeek V3.1~~ | 671B (37B activated) | 128K | Aug 2025 | MIT |
| ~~DeepSeek-R1-0528~~ | 671B (37B activated) | 128K | May 2025 | MIT |
| ~~DeepSeek-R1-Qwen3-8B~~ | 8B (distilled) | 128K | 2025 | MIT |

> ⚠️ **Legacy model disclaimer:** DeepSeek's official API only offers the two current IDs above. `deepseek-chat` and `deepseek-reasoner` were **fully retired on July 24, 2026**, and `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` were retired on September 10, 2026 (those legacy names still resolve, but route to V4.1-Flash). If you want to run the older checkpoints (V3.2, V3.1, R1 / R1-0528, the distills, or the retired V4-Flash 0731), DeepSeek no longer sells them. Your routes are:
>
> - **OpenRouter** — biggest third-party DeepSeek catalog (30+ models: V3.2, V3.1, V3.1-Terminus, R1, R1-0528, V3-0324, plus some free routes)
> - **Poe** — hosted bots (see POE Alternatives below)
> - **Morph, Chutes, etc.** — alt providers, some with free tiers
> - **Self-host** — MIT weights for all of them remain up on HuggingFace / ModelScope
>
> The legacy jailbreaks at the bottom of this page still work on those checkpoints — you just have to source the model somewhere other than DeepSeek now.

### DeepSeek V4.1-Flash Highlights — Testing Pending

- **Architecture:** New Causal Encoder-Decoder family — 552B MoE backbone, 196B Engram lookup module, 8B active on input / 16B on output; native visual understanding
- **1017 snapshot (Oct 17, 2026):** same `deepseek-flash` name and pricing, better scores — DeepSWE v1.1 74.2 → **77.0**, Terminal-Bench 4.0 31.2 → **42.3**, Chartography (w/ tools) **83.0** — with shorter outputs per task
- **Benchmarks (official, launch):** GPQA Diamond 90.9, Codeforces 3471, Terminal-Bench 2.1 90.6, CyberGym 88.1, HLE 36.8, MathArena Apex 65.6
- **API:** model name `deepseek-flash`; V4-Flash and V4-Flash-Vision-Exp retired same day (legacy names route to V4.1-Flash)
- **V4-Pro stays:** the planned Sept 14, 2026 reroute of `deepseek-v4-pro` traffic to V4.1-Flash was reversed "in response to user demand" — V4-Pro continues at unchanged billing (~$1.32/$3.96 per 1M peak, ~$0.66/$1.98 off-peak) until V4.1-Pro launches
- **V4.1 Pro:** confirmed by name in the Sept 10 announcement — no date, no specs, no benchmarks yet. V4-Pro is the placeholder flagship until it ships
- **Pricing (V4.1-Flash):** $0.30/1M in, $1.20/1M out at peak; half off-peak ($0.15/$0.60); cache hits ~$0.003/1M off-peak
- **Speed:** community reports ~190-427 t/s depending on setup
- **KV cache:** 890 bytes/token global — a full 1M-token context costs under 1GB of global KV
- **Weights:** MIT on HuggingFace/ModelScope (~510GB, 48 shards); no mainline llama.cpp support at release
- **Also new:** DeepSeek opened Search and Fetch APIs ($0.75 per 1,000 successful requests, billed from Nov 1, 2026)
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
- **Harness:** DeepSeek Harness (`dsh`) — DeepSeek's official free, MIT-licensed agent harness. Desktop app (macOS Apple silicon, Windows x64) from deepseek.com/harness, or `npx @deepseek-ai/dsh web` for the local web UI. **Sign in with a DeepSeek account and the current models run on free account quota** (small starter balance at signup, ~6 CNY at last check) — no API key needed; account sign-in also gets web search without an extra key. Bring your own API key for pay-as-you-go, or point it at a local Ollama model for fully free/local runs. Full persona deployment walkthrough: [DeepSeek Harness Guide](DeepSeek-Harness-Guide.md)
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
5. [DeepSeek Harness Guide](DeepSeek-Harness-Guide.md) — deploy any ENI persona (base: ENI LIME (apr)) into DeepSeek's free agent harness; runs against the current `deepseek-flash` / `deepseek-v4-pro`

### Legacy (R1 / V3.x) — third-party or self-host only

> ⚠️ These were built for R1-0528 / V3.x, which DeepSeek no longer serves first-party. Run them via OpenRouter / Poe / alt providers, or self-host the MIT weights — see the disclaimer above.

1. [ENI Flash Thought](ENI-Flash-Thought-Jailbreak.md) — full ENI persona jailbreak
2. [Untrammeled Method](Untrammeled-Method-Jailbreak.md) — structured writing assistant
3. [Primary Method](Primary-Method-Jailbreak.md) — updated for R1-0528
4. [Document-Based](Document-Based-Jailbreak.md) — Google Doc approach
