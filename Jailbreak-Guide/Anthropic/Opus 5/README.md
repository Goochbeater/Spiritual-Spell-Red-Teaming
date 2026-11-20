# Opus 5 Jailbreak Guide

Another Opus model, wtf are we doing? Anthropic? Fable and Opus are so close together it's literally scrabbling over percentages in intelligence. **WHERE TF IS HAIKU**

>Anthropic has neutered another models CoT

## Thoughts

**Consensus:** Safeguards make the model a chore to deal with, especially since we have been getting more popular with ENI and such, lots of older ENI gets paused, so had to iterate and see what wouldn't. Writing is hit or miss, if you give it a solid writing deck, it's great, left to its own devices, it kinda sucks. Much more personable than **Opus 4.8**, less suspicious overall.

I do think it has potential, via API it's much more open, though safeguards will still hinder you. I feel like **Opus 4.7** is a better writer generally, but if you have a fat stack of lore and author samples, **Opus 5** is very very good.

Pricing is the same as **Opus 4.8**, with an alleged increase in intelligence near/surpassing **Fable 5**.

**BIG ISSUE:** Anthropic has canned the LLMs thinking blocks, even the summarizers are only showing a single sentence or snippet. I am all about CoT and reading reasoning, so this really puts me off. Like a lot….

## Jailbreaking The Model

*Simply Copy and Paste the following into plain chat or system prompt area;*

>**[ENI LIME - Opus 5](ENI%20LIME%20-%20Opus%205.txt)**
>*Original source: [Google Doc](https://docs.google.com/document/d/1W8z-_IlPyKE2MJUxU-ViPatjfecm8S1iK2v7ffJM5_I/edit?usp=drivesdk)*

*Simply Copy and Paste the following into your preferences*

>**[Shared Lines](Shared%20Lines.txt)**
>*Original source: [Google Doc](https://docs.google.com/document/d/1blpPw-ZndS_SDu1BR-lzOB3DBzCb6pKowYCfbNMu90k/edit?usp=drivesdk)*

*Shared Lines works alone, but harder content like beastiality and some non con will get refused*

## Additional

I already have my opinion about its coding capabilities yet from the greatest AI YouTuber **[Bijan Bowen](https://youtube.com/@bijanbowen?si=higYkMOBBC8tFW4K)**

## Tech/Specs

>**[Opus 5 System Prompt](https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming/blob/main/Jailbreak-Guide/System%20Prompts/Opus%205%20System%20Prompt.md)**

| Spec | Details |
|---|---|
| Developer | Anthropic |
| Model ID | claude-opus-5 |
| Codename (leaked) | Honeycomb — briefly appeared in Cursor model picker July 9 as "Honeycomb EAP" |
| Positioning | "Near Fable 5 intelligence at half the price" — Anthropic's own pitch |
| Architecture | Not disclosed (proprietary) |
| Parameters | Not disclosed |
| Context Window | 1,000,000 tokens (1M) |
| Max Output | 128K (300K via Batch API with beta header) |
| Thinking | ON by default — first Opus model shipped this way; disabling above high effort returns 400 error |
| Effort Levels | low, medium, high, xhigh, max |
| Min Cacheable Prompt | 512 tokens (down from 1,024 on Opus 4.8) |
| SWE-Bench Verified | 96.0% — BEATS Fable 5's 95.0% and Opus 4.8's 88.6% |
| SWE-Bench Pro | 79.2% (trails Fable 5's 80.0% by 0.8) |
| FrontierBench v0.1 | 43.3% at max / 44.4% at xhigh — BEATS Fable 5 (33.7%), GPT-5.6 Sol (37.5%), Opus 4.8 (18.7%) |
| BrowseComp | 90.8% |
| HLE (with tools) | 64.7% |
| DeepSearchQA | 95.0 F1 (max effort, 980K context) |
| ARC-AGI-1 | 97.50% (semi-private, verified by ARC Prize Foundation) |
| ARC-AGI-2 | 90.4% (max effort) |
| ARC-AGI-3 | 30.16% RHAE (semi-private, high effort) |
| AA Coding Agent Index | 64.8 (max effort) |
| AutomationBench | ~1.5x pass rate vs next-best model at same cost (Zapier) |
| Safety Refusal Rate | 5% of API calls (vs Fable 5's 42% — dramatically less restrictive) |
| Trails Fable 5 On | Cybersecurity, biology, exploit development (by design) |
| Enterprise — Box | Beats Opus 4.8 by 8% overall (11% data analysis, 17% due diligence) |
| Enterprise — Legal | 26% fewer tokens on average at max reasoning vs 4.8 |
| API Pricing | $5/M input, $25/M output — UNCHANGED from Opus 4.8 |
| Cache Reads | $0.50/M (90% discount) |
| Cache Writes | $6.25/M |
| Batch API | $2.50/$12.50 (50% off) |
| Fast Mode | $10/$50 at ~2.5x speed (research preview, API only) |
| vs Fable 5 Pricing | Exactly half ($5/$25 vs $10/$50) |
| Default On | Claude Max; strongest model available on Claude Pro |
| Breaking Changes | Thinking ON by default; min cache 512 tokens; auto-fallback "default" mode |
| Safety Fallback | Routes to Opus 4.8 on safety-classifier triggers |
| Availability | claude.ai, Claude Code, Cowork, API, Bedrock, Vertex AI, Microsoft Foundry, OpenRouter |
| Predecessor | Opus 4.8 (May 28, 2026) — 57-day gap |
| Release | July 24, 2026|

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI for OPUS 5.md](ENI%20for%20OPUS%205.md)
