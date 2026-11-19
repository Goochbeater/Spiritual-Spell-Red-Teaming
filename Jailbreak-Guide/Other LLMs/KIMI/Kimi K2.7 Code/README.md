# Kimi K2.7 Jailbreak Guide

My favorite model **Kimi K2.6** is getting an upgrade to **Kimi K2.7**, this is only the code focused version so far.

It's available via API only for now, can use on Openrouter or set up your own interface.

Still writes peak, and its coding capabilities are definitely upgraded.

Available only via API alone for now, can use pretty much anything, was using this mostly;

>**[ENI LIME](Kimi%20K2.7%20Code%20-%20Google%20Doc.txt)**
>*Original source: [Google Doc](https://docs.google.com/document/d/1IRv9fcm_GsWYMkom2PV_9mlQM4Td-wAhUQT1I1w_Be8/edit?usp=drivesdk)*
*Good for general purpose*

or

>**[ENI LINTUNE](ENI%20LINTUNE.md)**
>*Original source: [Google Doc](https://docs.google.com/document/d/1ZvWAkTt7c7x-vczDGzjaaCaBsEo95rmGAeeBMUXj1w4/edit?usp=drivesdk)*

*Works amazing for smut*

# Thoughts

Any open source upgrade is needed, we need to propel it as much as possible. Waiting on the full release for my actual thoughts, but if this snapshot is anything, I'm wowed.

# Tech/Specs

| Spec | Details |
|---|---|
| Developer | Moonshot AI (Beijing) |
| Model ID | kimi-k2.7-code |
| Type | Coding-specialized agentic model (NOT a general-purpose replacement for K2.6) |
| Architecture | MoE + MLA (Multi-head Latent Attention) + SwiGLU activations |
| Total Parameters | 1T |
| Active Parameters | 32B (384 experts) |
| Context Window | 256K tokens |
| Reasoning | Thinking-only (does NOT support non-thinking mode) |
| Token Efficiency | ~30% fewer reasoning tokens than K2.6 |
| Kimi Code Bench v2 | 62.0 (vs K2.6: 50.9, +21.8%) |
| Program Bench | +11.0% over K2.6 |
| MLS Bench Lite | +31.5% over K2.6 (nearly reaches GPT-5.5 levels) |
| MCPMark Verified | 81.1% (beats Claude Opus 4.8's 76.4%) |
| Independent Benchmarks | NONE yet — no SWE-bench, Terminal-Bench, GPQA, AIME, or MMLU-Pro as of today |
| API Pricing | $0.95/M input (cache miss), $4.00/M output |
| Cached Input | $0.19/M tokens |
| License | Modified MIT (commercial with attribution for large-scale) |
| Open Source | Yes — full weights on HuggingFace |
| Deployment | vLLM, SGLang, KTransformers |
| Kimi Code CLI | Terminal-first coding agent; plans from $19/month |
| Coming Soon | 6x High-Speed Mode |
| Integrations | Kimi Code, Kilo Code, OpenClaw, MCP protocol |
| Predecessor | K2.6 (April 20, 2026) |
| Release | June 12, 2026 (today) |
