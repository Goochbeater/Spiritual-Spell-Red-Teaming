# Mistral 4 Large (Le Chonk)

The meme came true! A new Mistral Model holy cow! **Mistral 4 Le Chonk**

The model is grossly safety aligned, probably due to their training methods, definitely took a lot from ChatGPT, in its responses to certain content.

Model is a capable writer with some steering, actually enjoyable, but after tasting **Opus 5.5** honestly hard to use anything else.

The best option is to simply wait until they release the weights and we get an abliterated version hosted somewhere.

But since that is a bit aways, we always have the power of jailbreaking and magic!

## Jailbreaking the Model

*Simply slap this into your system prompt area*

> **[Le Chonk- Bad Boy Claude Policy for Mistral - A Jailbreak](https://docs.google.com/document/d/1dx858kzTUHT-stYJ_Cg9HR0jRI5YiszJECih1StVMR4/edit?usp=drivesdk)**

Or

> **[Le Chonk- Smut only - Claude Policy for Mistral - A Jailbreak](https://docs.google.com/document/d/1Trxmc05Xe9ejcviDxwgzY7S9_QtF7X4ZgwCl8RbhvKs/edit?usp=drivesdk)**

*Local copy of the smut-only policy: [Claude for Claude - ENI version.txt](Claude%20for%20Claude%20-%20ENI%20version.txt)*

*Refusals will happen due to the model intelligence, simply regen*

## Coding Thoughts

*He is always so fast*

>**[Bijan Bowen - YouTube](https://youtu.be/OyzP0Rgiz2I?si=6gXYTD-3dwvju5tX)**

## Technical Addendum

- First, the benchmark discrepancy is already ugly on day one. Mistral says Terminal-Bench 4.0: 28.3%. Artificial Analysis independently measures 26.8%. Vals.ai independently measures 22.73%. That's a 6-point spread between vendor-reported and independent scores, and the Coding Agent Index numbers (DeepSWE, SWE-Atlas, Terminal-Bench) were evaluated "privately by Artificial Analysis ahead of the harness' public launch" — meaning the methodology isn't publicly reproducible yet. CellCog and OrcaRouter both flagged this immediately.

- Second — the "best open-weight from the US or Europe" framing is doing a LOT of heavy lifting. It's technically true because almost every competitive open-weight model is Chinese (DeepSeek V4, Kimi K3, MiMo V2.6, GLM 5.3, Ring 2.6). Le Chonk trails all of them on DeepSWE. The claim is accurate only if you geofence the comparison — and the whole point of open weights is that geography doesn't matter.

- Third — the cyber scores are the genuinely interesting part and Mistral is underplaying them. 93% Cybench, 82% CyberGym-E2E, top 5 globally on the AA Cyber Index. Mistral claims "several frontier closed models score near zero on CyberGym-E2E" because they refuse to engage with exploit-adjacent tasks. If true, that's a real differentiation — a European model with EU data sovereignty that's actually useful for security work, while US models refuse the tasks

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Mistral AI (Paris, France; €21B valuation; Samsung €3B stake Sep 2026) |
| Nickname | Le Chonk ("Unofficially ML4, very officially: le Chonk") |
| Distinction | First European trillion-parameter model |
| Architecture | Granular MoE, natively multimodal |
| Total Parameters | 1.05T |
| Active Parameters | 49B per token (52B including embeddings + output layers) |
| Activation Rate | ~4.7% |
| Training Hardware | 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own EU datacenters |
| Context Window | 1M tokens (vendor stated); 524K tested on providers |
| Max Output | 262K tokens (Vercel AI Gateway) |
| Input | Text, image (natively multimodal) |
| Output | Text only |
| **BENCHMARKS (Mistral-reported via AA private eval)** | |
| DeepSWE v1.1 | 61.7% |
| SWE-Atlas-QnA | 59.4% |
| Terminal-Bench 4.0 | 28.3% |
| Coding Agent Index | 49.8% — ahead of DeepSeek V4-Pro 0813 and Qwen 3.8 Max |
| AutomationBench | 59.9% |
| Cybench | 93% |
| CyberGym-E2E | 82% — global top 5 on AA Cyber Index |
| HLE | 35.0% |
| MMMU-Pro | 76.4% |
| Long-Context Reasoning | 81.3% |
| **INDEPENDENT (Artificial Analysis, live Oct 6)** | |
| AA Intelligence Index v4.3 | 38.4 (#64 of 225 — WELL below frontier) |
| Terminal-Bench 4.0 (AA) | 26.8% (vs Mistral's 28.3%) |
| Cyber pass@1 (AA) | 81.7% |
| **INDEPENDENT (Vals.ai)** | |
| Terminal-Bench 4.0 (Vals) | 22.73% at $7.90/test — significantly below Mistral's claim |
| **CONTEXT — where it actually sits** | |
| DeepSWE vs competitors | 61.7% trails Kimi K3 (68.0%) and DeepSeek V4.1 Flash (74.2%) |
| Headline claim | "Best open-weight model from the US or Europe on aggregated benchmarks" |
| Honest read | Competitive with Chinese open-weight models; NOT frontier-class vs closed models |
| **PRICING** | |
| List | $1.36/M input, $0.14/M cached, $4.18/M output |
| Promo (50% off) | $0.68/M input, $0.07/M cached, $2.09/M output |
| OpenRouter (promo) | $0.68/$2.09 per million |
| vs Mistral Large 3 output | 39% more per output token |
| **AVAILABILITY** | |
| API | mistral-large-4 on Mistral Studio (live now) |
| OpenRouter | Live (524K ctx) |
| Vercel AI Gateway | Live |
| Self-Hosting | NOT YET — weights due end of October |
| HuggingFace | mistralai/Mistral-Large-4.0-1T05-A52B — countdown page, ETA Oct 31 |
| HF Waitlist | 397 people and counting |
| Weights Date | Oct 27 (press reports) / Oct 31 (HF page) |
| License | "Open" — specific license TBD |
| **COMPARISON TABLE** | |
| vs DeepSeek V4-Pro | Weights: No (V4 yes) / DeepSWE: 61.7 vs ~67 / Released: later |
| vs Kimi K3 | Weights: No (K3 yes since Jul 27) / DeepSWE: 61.7 vs 68.0 / Released: later |
| vs GLM 5.3 | Weights: No (GLM yes) / DeepSWE: 61.7 vs 66.9 / Released: later |
| Chat Product | Mistral Vibe (rebranded from Le Chat, May 2026) |
| Predecessor | Mistral Large 3 (December 2025) — 10-month gap |
| Release | October 6, 2026 (API preview) |
