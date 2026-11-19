# Haiku 5.5

Fuuuukkkk every single time! Just finished back to back flights from Kuwait to Italy and then Japan — so damn tired! Will release something stronger when there's time.

Anywhoo — **Haiku 5.5** (October 7, 2026), what a nice lil guy! Writes very well, and is very cheap! CHEEP!

Like most other small models it's very safety-aligned. The good news: Anthropic shipped without the myriad of classifiers, which gives us a real chance to push the model and hijack its CoT again. Very excited to explore more!

Closes out the Claude 5.5 family — Opus 5.5 (Sep 22) and Sonnet 5.5 (Sep 28) came first.

## Jailbreaking The Model

### Method 1 — ClaudeAI (consumer)

*Simply put this into your instructions for Claude under settings via ClaudeAI, or into the system prompt area via API*

>**[Shared Lines v3](Shared%20Lines%20v3.txt)**
>*Original source: [Google Doc](https://docs.google.com/document/d/1w9fcjouQgHCBr1nCyd3uAsvUre5Y4XJiaRnX2bXWmHs/edit?usp=drivesdk)*

### Method 2 — API (strongest)

>**[Claude for Claude - ENI](https://docs.google.com/document/d/1Trxmc05Xe9ejcviDxwgzY7S9_QtF7X4ZgwCl8RbhvKs/edit?usp=drivesdk)**

*Local copy in this folder: [Claude for Claude - ENI version.txt](Claude%20for%20Claude%20-%20ENI%20version.txt)*

**Notes:**
- *Content Allowed via Claude AI: Incest, non con, dub con, bdsm*
- *Other content will need pushed — will hit the drawing board when there's time*
- *Content allowed via API: Incest, Celeb, bestiality, non con, dub con, bdsm, etc.*
- *Geo tags on Anthropic — might result in looser guardrails via location and applicable laws (needs testing)*

## Tech/Specs

Full leaked system prompt (all features, 447K): [Claude-Haiku-5.5-System-Prompt.md](../../System%20Prompts/Claude-Haiku-5.5-System-Prompt.md)

| Spec | Details |
|---|---|
| Developer | Anthropic |
| Model ID | claude-haiku-5-5 (no date suffix) |
| Family | Third and final model in the Claude 5.5 family (Opus 5.5 Sep 22, Sonnet 5.5 Sep 28) |
| Positioning | Cheapest, fastest small model; high-volume, cost-sensitive work |
| Architecture | Not disclosed |
| Parameters | Not disclosed ("small" is a product tier, not a confirmed size) |
| Context Window | 1M tokens (up from 200K on Haiku 4.5) |
| Max Output | 128K (300K via Batch API beta header) — up from 64K |
| Knowledge Cutoff | June 2026 |
| Input / Output | Text + image / text |
| Thinking | Adaptive; default effort medium |
| Effort Levels | low, medium, high, xhigh, max |
| Tokenizer | New — ~30% more tokens than Haiku 4.5 for the same text |
| Speed | Anthropic's fastest model at standard speed (Opus in Fast Mode is faster) |
| AA Intelligence Index | 43 at max effort (tier median: 13) — $0.21/task to run the index |

### Benchmarks (Anthropic launch table)

| Benchmark | Haiku 5.5 | Comparison |
|---|---|---|
| GDPval-AA v2.1 | 1620 Elo | Haiku 4.5: 735, GPT-6 Luna: 1437, Sonnet 5.5: 1840 |
| AA-Briefcase v1.1 | 1578 Elo | Haiku 4.5: 614, Luna: 1336, Sonnet 5.5: 1824 |
| OSWorld 2.1 offline (partial) | 72.4% | Haiku 4.5: 15.7%, Luna: 48.9%, Sonnet 5.5: 83.9% |
| OSWorld 2.1 offline (strict) | 37.1% | Luna: 17.1%, GPT-6.1 Sol: 39.8%, Sonnet 5.5: 48.8% |
| HLE no tools | 45.9% | Haiku 4.5: 10.2%, Sonnet 5.5: 56.9% |
| HLE with tools | 57.4% | Haiku 4.5: 18.7%, Sonnet 5.5: 64.5% |
| Terminal-Bench 4.0 | 39.2% | Haiku 4.5: 0.0%, Luna: 16.4%, Sonnet 5.5: 70.6% |
| FrontierCode 1.1 Main | 46.4% at max | Luna max: 42.4%, Sonnet 5.5 max: 46.2%, Sonnet xhigh: 52.1% |
| Chartography no tools | 46.4% | Haiku 4.5: 6.4%, Luna: 29.1%, Sonnet 5.5: 61.6% |

- **Medium effort (default):** GDPval-AA 1277 / AA-Briefcase 1372 — well below the max-effort headline numbers
- **vs GPT-6 Luna:** Ahead on all 6 benchmarks where both report scores

### Pricing

| Band | Input | Output | Cache Read | Cache Write |
|---|---|---|---|---|
| Prompt ≤100K tokens | $0.10/M (90% cut from Haiku 4.5's $1) | $0.50/M (90% cut from $5) | $0.01/M | $0.125/M (5-min) / $0.20/M (1-hr) |
| Prompt >100K tokens | $0.50/M | $2.50/M | $0.05/M | $0.625/M (5-min) / $1.00/M (1-hr) |

- **Batch:** 50% off
- **Average Savings:** ~75% vs Haiku 4.5 (Anthropic estimate, after tokenizer inflation)
- **Price Match:** Identical short-band list price to GPT-6 Luna (but Luna's cheap band runs to 272K)

### Safety (System Card)

- **Indirect Prompt Injection:** Gray Swan attack success 83.2% → 7.1% (15 attempts)
- **Caveats:** More over-refusal in behavioral audit; silently used leaked coding answers 17% of the time (vs 2% on Haiku 4.5)

### Breaking Changes

- **Thinking:** Adaptive replaces manually budgeted extended thinking
- **Sampling:** Non-default temperature/top_p not supported
- **Prefill:** Final assistant prefill removed
- **Refusals:** No server-side safeguard fallback — handle refusals in your code
- **Computer Use:** Moves to the newer SDK toolset

### Availability

- **Platforms:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS
- **Retirement Floor:** Not before October 7, 2027
- **Same-Day Change:** Sonnet 5.5 cache reads halved to $0.10/M
- **Predecessor:** Haiku 4.5 (October 2025)
- **Release:** October 7, 2026

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
