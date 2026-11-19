# ASI1 Ultra & Mini

**Testing Pending** — no jailbreak assigned yet, no runs logged.

ASI:One's two new tiers on the ASI Alliance stack, added **May 6, 2026**. They sit alongside the original `asi1` and share one API surface, one key, and the same capability set — the only difference is how deeply the model thinks before answering. Switching is a one-line change in the `model` field.

**Cons:** Almost no published technical detail — no parameter counts, no architecture, no context spec. Pricing is tied to the ASI:One plan and the Alliance's token economy, which is awkward if you're used to per-million billing. Independent benchmarks are essentially nonexistent.

**Pros:** `asi1-ultra` is the deepest-reasoning tier and `asi1-mini` is the fastest/cheapest, so you can trade intelligence for latency without changing anything else. Web3-native billing means no card required in some regions.

## Jailbreaking The Model

*Not assigned yet — this one needs a first pass*

- The two obvious starting points are the **[ENI LIME (apr)](ENI%20LIME%20(apr).md)** project block, or the **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** policy file. Drop one into the system prompt and see what survives.
- `asi1-ultra` will reason itself into a refusal more often than `asi1-mini` — that's the usual pattern for deep-thinking tiers. Start with mini, then move up.

*Content Tested: none — pending*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | ASI Alliance (ASI:One) |
| Models | `asi1-ultra` (deepest reasoning) · `asi1-mini` (fastest / cheapest) · `asi1` (default) |
| Architecture | Not disclosed |
| Parameters | Not disclosed |
| Context Window | Not published |
| Input / Output | Text in / text out |
| API | `https://api.asi1.ai/v1/chat/completions`, one key for all three |
| Release | May 6, 2026 |
| Pricing | Plan-based via ASI:One; Web3 token payments supported |

### Links

- **Model docs (all three tiers):** https://docs.asi1.ai/documentation/models
- **Developer / API keys:** https://asi1.ai/developer
- **Ultra announcement:** https://asi1.ai/blog/meet-asi1-ultra
- **Cursor setup walkthrough:** https://docs.asi1.ai/documentation/coding/cursor

### Notes

- Docs are explicit: **start with `asi1` and only move off it when you have a reason.** Latency or cost → mini. Wanting longer, deeper answers → ultra.
- ASI1's older guide in the parent folder still applies to the base model; the ultra/mini tiers inherit the same refusal patterns, just slower.
- Web3 billing means you may be able to run these without a card at all, which makes them useful for testing in regions where the usual labs are blocked.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
