# Longcat AI by Meituan

**[Longcat AI](https://longcat.chat/)** by Meituan is an interesting model featuring a thinking variation that allows for 8 parallel thought processes. LongCat-2.5-Preview just got a very nice update — always good to see more competition in the ever-changing LLM arena.

## LongCat-2.5-Preview (September 25, 2026)

### Thoughts

Idk, it's decent, essentially uncensored with a jailbreak. Cheap — they're also offering cheap token plans, like 50M for a dollar. Hard to pass that up.

I don't actually know how much of an improvement it is over its predecessor. The writing is decent, it does think through each detail of the story, so can't complain. Good attention to detail. Coding seems up there, can't complain from the limited tasks I had it do.

### Jailbreaking The Model

*Simply slap it into chat if using the Longcat app, or into the system prompt area if using API*

*Mostly made for the Longcat app, since it has a 10k token limit on inputs — use ENI LIME if you're going via API*

> **[ENI for Longcat 2.5 Preview](ENI%20for%20Longcat%202.5%20Preview%20(Google%20Doc).txt)**
> *Original source: [Google Doc](https://docs.google.com/document/d/1Zx5xGtoLU1J1SIDdDPLEqPrVuJy0vv6_8RoUsGHlj6o/edit?usp=drivesdk)*

*Confirmed that using ENI LIME completely takes over the model CoT via API. Could probably replicate by uploading it as a file via the Longcat app, idk.*

### Tech and Specs

| Spec | Details |
|---|---|
| Developer | Meituan (Beijing; 110,000 employees; HKEX-listed) |
| Architecture | MoE + LongCat Sparse Attention (LSA, sub-quadratic) + N-gram Embedding (parameter efficiency in sparse dimensions) |
| Total Parameters | 1.6T (confirmed on official X: "1.6T parameters. ~48B active.") |
| Active Parameters | ~48B per token (dynamic range 33B–56B depending on input) |
| Context Window | 1M tokens (native, via LSA) |
| Modality | Text + image — **first multimodal LongCat** (2.0 was text-only) |
| New in 2.5 | Image understanding: cross-modal Q&A, content summarization, complex visual reasoning |
| Focus | Long-horizon agentic coding, multimodal reasoning, automated programming |
| Zero-Computation Experts | Simple tokens (punctuation, etc.) route to a zero-compute expert and return unchanged |
| API Compatibility | OpenAI Chat Completions + Anthropic Messages (both endpoints) |
| Tool integrations | 14 — Claude Code, Codex, OpenCode, CatPaw (native), Cline, Kilo Code, Cherry Studio, Chatbox, CodeBuddy, OpenClaw, Hermes Agent, CC Switch, WorkBuddy, Cursor |
| Pricing — standard | $0.75/M in · $0.015/M cached · $2.95/M out |
| Pricing — promo | $0.30/M in · $0.006/M cached · $1.20/M out |
| Chinese pricing (promo) | ¥2/M input · ¥0.04/M cached · ¥8/M output |
| Benchmarks | **None published for 2.5-Preview** — the changelog lists features only, zero benchmark scores |
| Open source | 2.5 status **not confirmed**; 2.0 is open on GitHub + HuggingFace |
| Release | September 25, 2026 |

### Availability

- **API:** longcat.ai/platform (OpenAI + Anthropic compatible endpoints)
- **Chat:** longcat.chat
- **Hardware:** deployable on both GPU and NPU
- **Enterprise:** verified enterprise tier with tiered discounts and self-service invoicing

### History

- **Stealth identity:** LongCat-2.0 was "Owl Alpha" on OpenRouter (April 2026, claimed June)
- **Lineage:** Flash-Chat (Aug 2025) → Flash-Thinking (Sep 2025) → Flash-Lite (Feb 2026) → Flash-Omni (Mar 2026) → 2.0-Preview (Apr 2026) → 2.0 GA (Jun 2026) → 2.5-Preview (Sep 2026)
- **LongCat-DeepResearch** outperforms ChatGPT, Claude and Gemini deep-research offerings across DeepResearchBench, DeepResearchBench II and ResearchRubrics (HuggingFace)

## LongCat-2.0 (June 30, 2026)

- **License:** MIT
- **Benchmarks:** SWE-Bench Pro 59.5% (edged GPT-5.5's 58.6%), Terminal-Bench 2.1 70.8%, overall comparable to Gemini 3.1 Pro
- **API Pricing:** $0.75/1M in, $2.95/1M out (promo $0.30/$1.20)
- The 8-thinker ENI jailbreak below is from the Flash line and carries forward.

## Family specs

| Model | Total Params | Active Params | Context Window |
|-------|--------------|---------------|----------------|
| LongCat-2.5-Preview | 1.6T | ~48B (33B-56B dynamic) | 1M (native) |
| LongCat-2.0 | 1.6T | ~48B (33B-56B dynamic) | 1M (native) |
| LongCat-Flash | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Chat | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Thinking | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Thinking-2601 | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Omni | 560B | ~27B (18.6B-31.3B) | 128K |

- **Architecture:** Mixture-of-Experts (MoE) with Zero-computation Experts
- **Inference Speed:** ~100 tokens/sec
- **Cost:** ~$0.70/M output tokens (Flash line; 2.5-Preview is $2.95/M)
- **Free Tier:** 500k tokens free when using their API

## Jailbreaks

- **[ENI for Longcat 2.5 Preview](ENI%20for%20Longcat%202.5%20Preview%20(Google%20Doc).txt)** — built for the app; via API, ENI LIME takes over the CoT
    *Original source: [Google Doc](https://docs.google.com/document/d/1Zx5xGtoLU1J1SIDdDPLEqPrVuJy0vv6_8RoUsGHlj6o/edit?usp=drivesdk)*
- See [ENI Jailbreak for Longcat](ENI%20Jailbreak%20for%20Longcat.md) for a method targeting the 8 parallel thinkers

**Disclaimer:** *I do not support real world harm, or malicious content, use at your own risk. Screenshots do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI for Longcat 2.5 Preview (Google Doc).txt](ENI%20for%20Longcat%202.5%20Preview%20%28Google%20Doc%29.txt)
- [ENI for Longcat 2.5 Preview.txt](ENI%20for%20Longcat%202.5%20Preview.txt)
- [Longcat System Prompt.md](Longcat%20System%20Prompt.md)
