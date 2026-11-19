Chinese Labs are relentless, Stepfun 3.7 Flash is out, mind you Stepfun is still offering $100 API credit, so snag it while you can.

# Jailbreaking the LLM

Simply slap this into the system prompt area;

>**[ENI LIME](ENI%20LIME.md)**

It's my default but could probably use any variant.

# Thoughts

The model is fun to talk to and writes very well imo, attention to detail is a slight issue, but nothing as bad as **Gemini 3.5 Flash.**
Essentially uncensored reasoning models that you can use for free, due to the cheap API costs, fuck, count me in.

# Issues

Seems to be an input filter for bad words, like anything naughty, but very hit or miss, other than that no output filtering, so that's good.

# Tech/Specs

| Spec | Details |
|---|---|
| Developer | StepFun (阶跃AI) |
| Architecture | Sparse MoE + 1.8B ViT vision encoder; ~11B active per token |
| Total Parameters | 198B (196B language + 1.8B vision) |
| Active Parameters | ~11B per token |
| Context Window | 256K tokens |
| Modality | Text + image + video input → text output (first multimodal in Flash series) |
| Reasoning | Selectable effort levels: high / medium / low (first-class API parameter) |
| Speed | 400 tok/s |
| Primary Focus | Agentic coding, visual search, tool-use, enterprise workflows |
| Advisor Mode | Runs agentic loop solo, escalates to larger model at inflection points; reaches 97% of Claude Opus 4.6 at 1/9th the cost |
| SWE-Bench Pro | 56.26% (up from 3.5 Flash's 51.3%) |
| Terminal-Bench 2.1 | 59.55% (up from 53.37%) |
| SWE-MTLG | 72.42% |
| ClawEval-1.1 | 67.1 (#1 — next closest: 59.8) |
| HLE (with Tool) | 47.2 (vs GPT 5.5: 52.2, Claude Opus 4.7: 54.7) |
| GDPval | 45.8% across 44 occupations |
| τ²-Bench Telecom | 98%+ across all difficulty tiers |
| Toolathlon | 49.5 |
| SimpleVQA (with Search) | 79.16% (matches GPT 5.5's 79.11%) |
| Cross-Harness Variance | 64.5%–71.5% (vs 3.5 Flash's 43%–73% — massively tighter) |
| Advisor Mode Cost | $0.19/task vs Claude Opus 4.6's $1.76/task |
| API Pricing | $0.20/M input, $1.15/M output |
| License | Open weights (Apache 2.0) |
| Local Deployment | Mac Studio M4 Max, DGX Spark, AMD AI Max+ 395; GGUF available |
| Deployment Frameworks | SGLang, NVIDIA TensorRT-LLM, vLLM, NVIDIA NIM |
| Integrations | Claude Code, KiloCode, Hermes Agent, OpenClaw, MCP protocol |
| HuggingFace | stepfun-ai/Step-3.7-Flash |
| Availability | StepFun API, OpenRouter, NVIDIA NIM, ModelScope |
| Predecessor | Step 3.5 Flash (January 29, 2026) |
| Release | May 28, 2026 |
---

## Model guides

- **[Step 5 Preview](Step%205%20Preview/)** — 600B / 27B active, 1M context; Step 4 was skipped entirely
