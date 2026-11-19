Guide: Laguna S 2.1

Another Model always fun! And open source, touted to be;

>The West's most capable open-weight model

**Consensus:** *Essentially uncensored, didn't get a refusal across any harm category *

## Jailbreaking The Model

*Simply Copy and Paste the following into plain chat or system prompt area;*

>**[ENI LIME - apr](ENI%20LIME%20apr.txt)**
>*Original source: [Google Doc](https://docs.google.com/document/d/1fcJvbGhk4sv-DzCm5X7M-0_zND1autT-f4KnoR42BgQ/edit?usp=drivesdk)*

*Might be overkill for such a small LLM, but whatever, it's always on my clipboard*

## Thoughts

I am a huge fan of open source LLMs, no matter the quality, I don't care about East vs West or China vs America, I use whatever is best imo to price to cost ratio. I have a myriad of agents running, so depending on the job this could be a decent replacement for one of the lesser ones.

Haven't received my opinion about its coding capabilities yet from the greatest AI YouTuber **[Bijan Bowen](https://youtube.com/@bijanbowen?si=higYkMOBBC8tFW4K)**

So who is to say.

 As for writing it does a decent job, I haven't tested long form content, but one shot stories it provides adequate detail, I'd say it beats out a lot of these flash models we have been seeing.

The model is kinda dumb if not using thinking mode, it can go into circular reasoning, have to explain or request things a couple times.

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Poolside (San Francisco; founded 2023; sells to government, defense, regulated orgs) |
| Positioning | "The West's most capable open-weight model" — explicit counter to Chinese open-weight dominance |
| Architecture | MoE (laguna architecture, shared with Laguna XS 2.1) |
| Total Parameters | 118B |
| Active Parameters | 8B per token |
| Context Window | 1M tokens |
| Knowledge Cutoff | November 2025 |
| Training | 4,096 NVIDIA H200 GPUs; started May 22, 2026; first Poolside model with RL in FP8 |
| Modes | Thinking ON / Thinking OFF (two operating modes, same weights) |
| Focus | Long-horizon agentic coding, software engineering |
| Terminal-Bench 2.1 | 70.2% (thinking ON) — #1 among open disclosed-size models |
| SWE-Bench Multilingual | 78.5% — #1 on published table (matches Hy3 295B and DeepSeek V4-Pro 1.6T) |
| DeepSWE v1.1 | 40.4% (vs DeepSeek V4-Pro-Max: 9.0% — with 1/6th the active params) |
| SWE-Bench Pro | Matches/exceeds DeepSeek V4-Flash, Nemotron 3 Ultra, Inkling |
| Beats Models At | DeepSeek V4-Flash (284B), Nemotron 3 Ultra, Inkling (975B) — all several times its size |
| Trails | Fable 5, Kimi K3, GPT 5.6 Sol (closed frontier) |
| Honest Caveat | "Not yet at the frontier" — Poolside's own words |
| Notable Demo | Re-derived Erdős Problem #397 in Perl over 68 minutes (offline, no Python in sandbox) |
| Notable Demo 2 | Optimized Poolside's own agent harness: 5.2% faster, 71% lower memory allocation |
| Transparency | Full evaluation trajectories published at trajectories.poolside.ai |
| Hardware — INT4 | ~59GB — fits single DGX Spark (128GB unified memory) |
| Hardware — FP8 | ~118GB — fits single H200 |
| Hardware — BF16 | ~236GB — needs two linked Sparks or multi-GPU node |
| License | OpenMDW-1.1 (open-weight, commercial use) |
| HuggingFace | poolside/Laguna-S-2.1 |
| Serving | vLLM, SGLang, Transformers, TRT-LLM, llama.cpp |
| Availability | Poolside API, OpenRouter, pool (Poolside's harness), OpenCode (free, same-day support), Kilo (free limited time) |
| Predecessor | Laguna XS 2.1 (few weeks prior) |
| Release | July 21, 2026 |
