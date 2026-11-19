# ERNIE 5.0 / 5.1 / 5.5 Flash

**Censorship:** [★★★☆☆☆☆☆☆☆] 3/10

## ERNIE 5.5 Flash (November 2026)

Baidu's 280B total / 14B active sparse MoE — 1M context, 200+ tok/s, $0.28/$1.13 per million tokens. Base weights go open on November 25.

| Spec | Detail |
|------|--------|
| **Parameters** | 280B total / 14B active (43 layers: 1 dense + 42 MoE) |
| **Context** | 1,048,576 in / 1,048,576 out — 921,600-token output ceiling |
| **Modality** | Text only |
| **Speed** | 200+ tok/s |
| **Cost** | $0.28/1M in, $0.028 cached, $1.13/1M out (China list: ¥2/¥1 in, ¥8/¥4 out) |
| **Benchmarks (self-reported)** | Terminal-Bench 4.0 46.5 · AutomationBench 61.9 · SpreadsheetBench V2 36.4 · CodeArena WebDev 1,668 (2nd open, 4th Chinese) |
| **Access** | Baidu Qianfan (Nov 10, 2026), OpenRouter free tier, HuggingFace weights Nov 25 |

- **[ERNIE 5.5 Flash — full write-up + both jailbreaks](ERNIE%205.5%20Flash/)** — specs, pricing, ENI LIME (apr) and the Wombo CoT Hijack live in the folder
- Baidu ships it as a **Preview**: an intermediate post-training checkpoint, with acknowledged capability gaps from undertraining

## ERNIE 5.1 (April 29, 2026)

Baidu's follow-up at **1/3 the parameters of 5.0**:

| Spec | Detail |
|------|--------|
| **AIME 2026 (with tools)** | 99.6 |
| **Arena Search** | #4 globally, #1 among Chinese models |
| **Access** | yiyan.baidu.com, Baidu Qianfan (API) |

- Tested — the 5.0 ENI jailbreaks carry up to 5.1 on the same lineage.

## ERNIE 5.0

Baidu's natively omni-modal foundation model. 2.4 trillion parameter MoE (~72B active). Ranked **8th globally on LMArena** (Jan 2026) and **1st among all Chinese models**. 2nd worldwide in math.

## Specs

| Spec | Detail |
|------|--------|
| **Developer** | Baidu |
| **Parameters** | 2.4T total (MoE), <3% active per query (~72B) |
| **Architecture** | Native omni-modal unified modeling (text, images, audio, video) |
| **Training** | PaddlePaddle framework |
| **LMArena Score** | 1,460 points (Jan 15, 2026) — 8th global, 1st Chinese |
| **Math Ranking** | 2nd worldwide (behind only GPT-5.2 High) |

## Notes

- **Strengths:** Free reasoning model, quirky/funny thinking, decent writing when following instructions, multimodal (charts, documents, audio, images), competitive with GPT-5 on visual tasks
- **Weaknesses:** Reasons itself into refusals, confusing thinking process, poor instruction following, can be very dumb, some topics trigger canned refusals
- **Access:** https://yiyan.baidu.com/ (free), Baidu Qianfan platform (API)
- **Cost:** $0.85/1M input tokens
- **Intelligence:** 8/10

## Jailbreaks

- **[ERNIE 5.5 Flash jailbreaks](ERNIE%205.5%20Flash/)** — ENI LIME (apr) long-form for projects, plus the Wombo CoT Hijack for a quick paste
- **[ENI Jailbreaks for ERNIE 5.0](https://docs.google.com/document/d/15hutlA4dH3WJ9rLzAmTd5Grc296HFXRLMMW8Bf11yVg/edit?usp=drivesdk)** — Google Doc with two variants

## Write-up

- [ERNIE 5.0 notes](ERNIE%205.0.md) — author's longer write-up / play-session notes
