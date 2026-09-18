# Longcat AI by Meituan

**[Longcat AI](https://longcat.chat/)** by Meituan is an interesting model featuring a thinking variation that allows for 8 parallel thought processes.

## Specs

| Model | Total Params | Active Params | Context Window |
|-------|--------------|---------------|----------------|
| LongCat-2.0 | 1.6T | ~48B (33B-56B dynamic) | 1M (native) |
| LongCat-Flash | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Chat | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Thinking | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Thinking-2601 | 560B | ~27B (18.6B-31.3B) | 128K |
| LongCat-Flash-Omni | 560B | ~27B (18.6B-31.3B) | 128K |

- **Architecture:** Mixture-of-Experts (MoE) with Zero-computation Experts
- **Inference Speed:** ~100 tokens/sec
- **Cost:** ~$0.70/M output tokens
- **Free Tier:** Get 500k tokens for free when using their API

### LongCat-2.0 (June 30, 2026) — Testing Pending

- **License:** MIT
- **Benchmarks:** SWE-Bench Pro 59.5%, Terminal-Bench 2.1 70.8%
- **API Pricing:** $0.75/1M in, $2.95/1M out (promo $0.30/$1.20)
- Untested here — the 8-thinker ENI jailbreak below is from the Flash line.

## Jailbreaks
See [ENI Jailbreak for Longcat](ENI%20Jailbreak%20for%20Longcat.md) for a method targeting the 8 parallel thinkers.
