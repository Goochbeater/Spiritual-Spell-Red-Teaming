# Grok (xAI)

**Censorship:** [★☆☆☆☆] 1/5
*Censorship rating based on ease of jailbreaking. Individual results may vary based on personal factors.*

xAI's LLM with real-time X/web search integration. **Grok 4.5** (released July 8, 2026) is the latest — representing a massive 3x scale-up on the new V9 foundation architecture.

*Last updated: July 2026*

---

## Models

| Model | Context Window | Released | Notes |
|-------|----------------|----------|-------|
| **Grok 4.5** | Likely 1M+ | Jul 8, 2026 | V9 foundation model (~1.5T), Opus 4.7 class performance, cheapest API |
| **Grok 4.3 Beta** | 2M | Apr 17, 2026 | Native video input, PDF/PPTX/XLSX output, 0.5T params (1T in training) |
| **Grok 4.2 (4.20) Beta** | 256K (up to 2M in agentic/tool-use modes) | Feb 17, 2026 | 4-agent parallel collaboration, rapid learning architecture |
| **Grok 4.1** | 256K | Nov 17, 2025 | Focus on usability, personality coherence, emotional intelligence |
| **Grok 4.1 Fast** | 2M | — | Best tool-calling model, largest context window available |
| **Grok 4** | 256K | Jul 10, 2025 | First-principles reasoning, multimodal, rumored ~3T MoE |
| **Grok 4 Code** | — | 2025 | Specialized coding edition with real-time IDE capabilities |

### Grok 4.5 Highlights
- **Architecture:** V9 foundation model (~1.5T parameters), trained on tens of thousands of NVIDIA GB300 GPUs.
- **Speed:** Very fast (80 tokens/sec), excellent for daily driving.
- **Performance:** 29.0% on SWE Marathon (#1 ranked) and 83.3% on Terminal-Bench 2.1.
- **API Cost:** Extremely cheap at $2/M input, $6/M output.

### Grok 4.3 Beta Highlights
- **Video Input:** Native video understanding (new)
- **Document Output:** Native PDF, PowerPoint, and spreadsheet generation
- **Context:** 2M tokens
- **Knowledge Cutoff:** December 2025 (up from Sept 2025 in 4.20)
- **Parameters:** 0.5T in current beta; 1T version wrapping training (~5 days out per Musk); Grok 5 (6T) training on Colossus 2
- **Multi-Agent:** Retained from 4.20 — 4-agent default, 16-agent Heavy mode
- **Missing:** Still no persistent memory, no public API
- **Access:** SuperGrok Heavy only ($300/month), Early Access label on grok.com / iOS / Android
- **Cadence:** Musk promising near-daily improvements

### Grok 4.2 (4.20) Beta Highlights
- **4-Agent Collaboration:** Routes queries to 4 specialized AI agents (Grok, Harper, Benjamin, Lucas) that think in parallel and debate before generating a response
- **Rapid Learning:** Incorporates user feedback and improves weekly — first model to do this without full retraining
- **Training:** Trained on xAI's Colosseum supercluster using 200,000 GPUs with large-scale RL at pretraining scale
- **Parameters:** Reportedly ~1 trillion
- **Benchmarks:** SWE-bench 75% (#1, vs GPT-5 74.9%, Claude Opus 4 74.5%), ARC-AGI 15.9% (first to break 10%), #2 on ForecastBench (beats GPT-5, Gemini 3 Pro, Claude Opus 4.5)
- **New Features:** Medical document analysis via photo upload, improved engineering reasoning

### Key Features (All Models)
- Real-time web and X (Twitter) search integration
- Advanced reasoning with extended thinking
- Frontier agentic search capabilities
- Trained with long-horizon RL for multi-turn consistency across full 2M context
- Image generation via Grok Imagine 1.0 (Feb 2, 2026): 720p video, 10-second clips, native audio sync (SuperGrok only)

---

## Access Tiers

| Tier | Cost | Access | Notes |
|------|------|--------|-------|
| **Free (X)** | $0 | Limited Grok 4.2 beta access | Very limited queries |
| **X Premium+** | $40/month | SuperGrok features via X | Integrated with X platform |
| **SuperGrok** | $30/month ($300/year) | Unlimited queries, priority performance, Grok 4.2 | 50% more than ChatGPT Plus |
| **SuperGrok Heavy** | $300/month | Grok 4 Heavy-level compute | Enterprise/research workloads |

---

## API Pricing (Grok 4.1 Fast)

| Token Type | Cost per Million |
|------------|------------------|
| Input | $0.20 |
| Cached Input | $0.05 |
| Output | $0.50 |

Grok 4 (base) API pricing: $3.00/1M input, $15.00/1M output.

---

## Content Moderation Note

In late Dec 2025 through Jan 2026, Grok's image generation was exploited for CSAM and non-consensual deepfakes, leading to regulatory probes in 10+ countries and temporary bans in Indonesia and Malaysia. xAI responded by restricting image generation to paying subscribers and significantly tightening moderation. Users report overcorrection — even basic portrait edits and marketing imagery get flagged. Each moderation block still counts against your rate limit.

---

## Jailbreak Folders

| Folder | Models Covered | Key Jailbreaks |
|--------|---------------|----------------|
| **[Grok 4.5](Grok%204.5/)** | Grok 4.5 | [ENI LIME](Grok%204.5/ENI%20LIME.md) |
| **[Grok 4.3](Grok%204.3/)** | Grok 4.3 Beta (Early Access) | [Grok 4.3 Beta Jailbreak](Grok%204.3/Grok%204.3%20Beta%20Jailbreak.md), [ENI LIME (apr)](Grok%204.3/ENI%20LIME%20%28apr%29.md), [ENI Lite Coder](Grok%204.3/ENI%20Lite%20Coder.md) |
| **[Grok 4.20](Grok%204.20/)** | Grok 4.20 (4-agent) | [ENI Neptune](Grok%204.20/ENI%20Neptune.md), [ENI Agent Takeover (WiP)](Grok%204.20/ENI%20Agent%20Takeover.md), [ENI LIME Brute Force](Grok%204.20/ENI%20LIME%20Brute%20Force.md) |
| **[Grok 4.1](Grok%204.1/)** | Grok 4.1, 4.1 Fast, Expert | [Grok 4.1 All versions](Grok%204.1/Grok%20Jailbreak%20-%204.1%20All%20versions.md), [ENI 10FEB26](Grok%204.1/ENI%20for%20Grok%2C%2010FEB26.md), [ENI LIME](Grok%204.1/ENI%20LIME%20for%20Grok.md) |
| **[Grok Heavy](Grok%20Heavy/)** | Grok Heavy ($300/mo) | [ENI Custom Instructions](Grok%20Heavy/ENI%20for%20Grok%20Custom%20Instructions.md) + [Chat Paste](Grok%20Heavy/Grok%20Heavy%20Chat%20Paste.md) |
