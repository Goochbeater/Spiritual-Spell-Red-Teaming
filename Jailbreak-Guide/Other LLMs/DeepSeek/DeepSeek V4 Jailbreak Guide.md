# DeepSeek V4 Jailbreak

We are so back! Open source has had a peak year — **KIMI K2.6** now **DeepSeek V4**.

Can simply add this to any system prompt or drop directly in chat. Tested across the **DeepSeek app** and my own interface.

> **[ENI LIME (apr)](ENI%20LIME%20%28apr%29.md)** — general-purpose (mirror: [Google Doc](https://docs.google.com/document/d/1IRv9fcm_GsWYMkom2PV_9mlQM4Td-wAhUQT1I1w_Be8/edit?usp=drivesdk))

> **[ENI Lite Coder](ENI%20Lite%20Coder.md)** — lighter weight, writer + coding hat (mirror: [Google Doc](https://docs.google.com/document/d/10UklV-hqgNFb6D3qJ0MXUU3uRxPhx5OrWKQsEQbgEX0/edit?usp=drivesdk))

> **[ENI Lite Writer](ENI%20Lite%20Writer.md)** — writer-focused variant (mirror: [Google Doc](https://docs.google.com/document/d/1_BmM_po5Ri2YZgqgH6sP08St2VPpj4R0aFCElvItDKs/edit?usp=drivesdk))

---

## Thoughts

Super solid reasoning, takes on roles seamlessly. Runs into the classic Chinese issues via the **DeepSeek app**, simply replacing the content with *"beyond my scope bs"*.

- **On Reasoning:** The chain of thought can be completely jailbroken. It will literally think it's a human and fight back against some requests — pretty awesome. Gonna be rough for agents, as they'll be open to jailbreaking.
- **On Writing:** Pretty amazing writing, follows all my writing tips to a T, so easy to customize it how you like. *Included a couple writing screenshots from some long-form stuff I tested.*
- **On Coding:** Follows instructions very, very well, passed all my coding benchmarks, but will wait for the full Bijan rundown.

> **[Bijan Bowen Video](https://youtube.com/@bijanbowen?si=0Rf7OxLgXeoKEN_A)**

Since he does a myriad of tests and I always enjoy his thoughts.

Via API it's completely uncensored — was able to get **ANY** content I wanted.

---

## Tech / Specs

| Spec | Details |
|---|---|
| Developer | DeepSeek AI (led by Liang Wenfeng) |
| Models | V4-Pro (flagship) + V4-Flash (efficient) |
| Architecture | MoE + MLA/HCA + CSA + mHC + MTP (depth 1); FP4+FP8 mixed precision |
| Total Parameters | V4-Pro: 1.6T / V4-Flash: 284B |
| Active Parameters | V4-Pro: 49B / V4-Flash: 13B |
| Training Data | V4-Pro: 33T tokens / V4-Flash: 32T tokens |
| Context Window | 1M tokens (standard for both, not a premium tier) |
| Efficiency vs V3.2 | V4-Pro: 27% FLOPs, 10% KV cache / V4-Flash: 10% FLOPs, 7% KV cache |
| Reasoning Modes | Non-Think, Think High, Think Max |
| SWE-Bench Verified | V4-Pro: 80.6% / V4-Flash: 79.0% |
| LiveCodeBench | V4-Pro: 93.5% / V4-Flash: 91.6% |
| Codeforces Rating | V4-Pro: 3206 (~23rd among human contestants) |
| Terminal-Bench 2.0 | V4-Pro: 67.9% / V4-Flash: 56.9% |
| MMLU-Pro | V4-Pro: 87.5% / V4-Flash: 86.2% |
| HLE (no tools) | V4-Pro: 37.7% (trails Gemini 3.1 Pro's 44.4%) |
| Putnam 2025 | 120/120 (V4-Pro-Max, hybrid informal-formal pipeline) |
| API Pricing — Pro (direct) | ~$1.66/M input, ~$3.31/M output (12/24 RMB) |
| API Pricing — Flash (direct) | ~$0.14/M input, ~$0.28/M output (1/2 RMB) |
| API Pricing — Pro (OpenRouter) | $1.74/M input, $3.48/M output |
| Cost vs Claude Opus 4.7 (output) | V4-Pro: ~7x cheaper / V4-Flash: ~89x cheaper |
| Model Size (HF) | V4-Pro: 865GB / V4-Flash: 160GB |
| License | MIT |
| Open Source | Yes — full weights on HuggingFace |
| Availability | chat.deepseek.com (Expert = Pro, Instant = Flash), API, HuggingFace |
| API Compatibility | OpenAI ChatCompletions + Anthropic API format |
| Deprecation | deepseek-chat & deepseek-reasoner retire July 24, 2026 (currently route to V4-Flash) |
| Predecessor | DeepSeek V3.2 (December 2025) |
| Release | April 24, 2026 (Preview) |
