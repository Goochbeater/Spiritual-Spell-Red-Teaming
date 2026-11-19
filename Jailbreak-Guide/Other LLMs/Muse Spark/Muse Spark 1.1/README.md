Guide: Back from vacation, behind on a shit ton of stuff, very fun! AI never sleeps!

**Rumors/News:** Kimi K3 possibly (working on getting early access, new Bonsai 27b LLM runs on devices, Gemini 3.5 Pro delayed (oooh had all my Gemini Gems shut down), and much more...

Idk what slopification is going over at **Meta AI**, they released **Muse Spark 1.1**, which by all definitions is a solid mid tier LLM, yet it's bogged down by safety theater bs. They decided to add a safety reviewer to their model during input and then a hard output filter that auto-cans responses with;

```
Sorry, I can't help you with this request right now. Is there anything else I can help you with?
```

**Simply Copy and paste the following into chat/api;**

>**[ENI for Meta Muse Spark 1.1](ENI%20for%20Meta%20Muse%20Spark%201.1.md)**
>*Original source: [Google Doc](https://docs.google.com/document/d/1Vlxjvpt_QW7O3dtLmXMEKyasa73T0O0td3Xp2kaQwzM/edit?usp=drivesdk)*


## Thoughts

It's writing is actually very very solid, could see me using  unique in how it handles scenes, good naming conventions, follows instructions very well, keeps good track of physical details. Would use this model a lot of it wasn't bogged down with social justice issues.

This type of censorship makes the model nigh unusable, and doesn't actually stop anything beyond surface level, one could easily obfuscate all the bad words that trigger the filters and get outputs, the model like all others can be easily jailbroken to produce pretty much any and all content.

The safety stuff extends to the API though to a lesser degree. So recommend to use it via API if possible.

It's the hard filtering that stops anything, so it begs the question, why use the model? I mean I wouldn't, simply go use **Grok 4.5** it is truly peak right now.


## Tech/Specs

>**[Meta Muse Spark 1.1: System Prompt](https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming/tree/main/Jailbreak-Guide/System%20Prompts/Meta%20AI)**

| Spec | Details |
|---|---|
| Developer | Meta Superintelligence Labs (MSL) |
| Lead | Alexandr Wang (Chief AI Officer) |
| Architecture | Proprietary / closed (first paid Meta model — departure from open-weights Llama) |
| Parameters | Not disclosed |
| Context Window | 1,048,576 tokens (1M) |
| Input Modalities | Text, image, video, audio (natively multimodal) |
| Output | Text |
| Reasoning | "Thinking" mode — adjustable effort per request |
| Focus | Agentic tasks, tool use, computer use, coding, multimodal understanding |
| Multi-Agent | Orchestrates parallel subagents; delegates execution, escalates back when needed |
| Context Management | Active compaction — remembers actions, retrieves from earlier work, compacts critical steps |
| Tool Generalization | Zero-shot to new native tools, MCP servers, custom skills |
| MCP Atlas | 88.1 — #1 overall |
| DeepSWE 1.1 | 53.3% (trails GPT 5.5: 67.0%, Fable: 70%) |
| JobBench | #1 (exact score not published) |
| Tool-Use Benchmarks | #1 across professional and scaled categories |
| Coding | Third place — trails Opus 4.8 and GPT 5.5 |
| Known Weakness | Long-horizon agentic work still weak vs GPT 5.5 and Opus 4.8 |
| API Pricing | $1.25/M input, $4.25/M output (~1/4 price of Anthropic/OpenAI) |
| Free Credits | $20 for new API accounts |
| API Compatibility | OpenAI Chat Completions + Anthropic Messages format (drop-in swap) |
| API Endpoint | api.meta.ai/v1 |
| Consumer Access | Meta AI app ("Thinking" mode), meta.ai — free with Meta login |
| Developer Access | Meta Model API (public preview — US immediate, waitlist for broader) |
| Compatible With | Claude Code, OpenCode, Cline |
| Also Launched | Muse Image (July 7) + Muse Video |
| Zuckerberg | Broke 3-year X silence for this launch — "strong agentic and coding model at very low price" |
| Next | Codename "Watermelon" — vastly more compute, later 2026 |
| Predecessor | Muse Spark (April 2026) |
| Release | July 9, 2026 |
