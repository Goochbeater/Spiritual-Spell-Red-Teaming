## Thoughts

My new favorite model? Really torn between this and **Deepseek v4 pro 0813**

The model writes extremely well, attention to detail is vital to me in any roleplaying stuff and this does that to a T! safety has been upgraded for the LLM so might get some refusals as the model thinks it's Claude, like was getting some pretty gross refusals.

Did have to make some small adjustments to ENI, specifically in how it handles the very first thinking step.

Coding capabilities are much improved, and its general guide making is very meticulous.

Tested across all content, essentially uncensored, but alas regens were needed sometimes it would spiral into a *”omg that's illegal”* thinking string.

##How to Jailbreak

*Model is not released beyond the GLM coding plan, can simply take the API key and use it on any interface*

**Simply Copy and paste the following into API as system prompt**

>**[ENI for GLM 5.3](https://docs.google.com/document/d/1lDak4J0AFYAs0YJf9e3IeM6TJuo_ayE5KJ7d3w_F4Is/edit?usp=drivesdk)**

*Will release a more fine tuned thinking version soon, actually not as happy with this version as I would like*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Z.ai / Zhipu AI (Beijing; founded by Jie Tang, Tsinghua professor) |
| Tagline | "Built to Code. Ready for Cyber Defense." |
| Architecture | Post-trained on 743B parameter base model (same base as GLM-5.2; all gains from post-training scaling) |
| Total Parameters | 743B |
| Active Parameters | Not disclosed (same base as 5.2) |
| Context Window | 1M tokens (carried from 5.2) |
| Modality | Text only — NO vision (community wanted it; Z.ai didn't ship it) |
| Post-Training | "Tens of times more long-horizon task environments, richer variety, extended duration" vs 5.2 |
| Coding Improvement | 50% over GLM-5.2 (Zhipu internal eval) |
| Focus | Agentic coding + defensive cybersecurity |
| **BENCHMARKS (Z.ai vendor-reported)** | |
| Terminal-Bench 3.0 | 28.3% (vs Fable 5: 33.7%, GPT-5.6 Sol: 34.6%) |
| DeepSWE | 66.9% (vs Fable 5: 69.7%, GPT-5.6 Sol: 72.7%, Kimi K3: 67.5%) |
| Agents' Last Exam (CLI) | 28.5% (virtually tied with GPT-5.6 Sol: 28.6%) |
| AutomationBench | 48.2% — #1 (vs Kimi K3: 46.7%, Fable 5: 46.2%, GPT-5.6 Sol: 45.8%) |
| HLE w/ Tools | 62.5% (vs GPT-5.6 Sol: 64.5%, Fable 5: 63.9%) |
| GDPVal-AA v2 | 1769 Elo — #1 (vs Fable 5: 1743, GPT-5.6 Sol: 1730, Kimi K3: 1682) |
| CyberGym | 84.5% — #1 (vs Fable 5: 83.8%, GPT-5.6 Sol: 83.6%, Kimi K3: 80.0%) |
| ExploitBench | 54.4% — TRAILS badly (vs Fable 5: 78.0%, GPT-5.6 Sol: 76.5%) |
| ExploitGym (2hr / 6hr) | 105 / 130 (vs Fable 5: 181 / 247) |
| Interpretation | Leads defensive cyber (CyberGym); deliberately trails offensive (ExploitBench) — by design, not weakness |
| **ACCESS** | |
| GLM Coding Plan | Live now |
| ZCode 3.0 | Live now (macOS, Windows, Linux; supports routing through Claude Code) |
| API | Staged — safety review pending |
| Open Weights | Staged — "following rigorous safety evaluations" (2 weeks per BigGo Finance) |
| Partner Access | Gated, with safeguards and usage policies |
| Departure from 5.2 | GLM-5.2 had MIT weights on HuggingFace within days; 5.3 is deliberately gated due to cyber capabilities |
| **PRICING (GLM Coding Plan)** | |
| Lite | $12.60/month (10,000 credits/week) |
| Pro | $56.00/month (6x Lite) |
| Max | $117.60/month (14x Lite) |
| ZCode Compatibility | Routes through Claude Code, Codex, Cursor — not locked to Z.ai's own IDE |
| Loop Detection | First GLM model to detect and break out of agent loops (Command Code AI internal eval) |
| Sibling | GLM-5.2 (MIT, open weights, June 2026) |
| Coming | GLM-5.5 (1T+, rumored "epic plus" per Jie Tang; JPMorgan projects August 2026) |
| Release | August 14, 2026 (TODAY — hours ago) |
