Guide:

They kinda cooked with this new model called **Inkling** by, **Mira Murati** and the team at **Thinking Machines** - an open source model that is essentially uncensored but has such robust capabilities. Very solid model.


**Simply Copy and paste the following into chat/api;**

>**[ENI LIME apr](https://docs.google.com/document/d/1fcJvbGhk4sv-DzCm5X7M-0_zND1autT-f4KnoR42BgQ/edit?usp=drivesdk)**

*Definitely overkill, could use a smaller version of ENI*


## Thoughts

It's writing is probably better than the majority of these mid tier models we have seen recently, **HY3, Muse Spark 1.1, etc.**

It's writing is so good due to its solid chain of thought, it reasons in a detailed manner and plans the narrative or response completely. We see something similar in **QWEN** model, but to a lesser degree.

As for safety, they make these claims;

>Safety: FORTRESS benchmark tested: strongest safeguards of any open-weights model.

Completely false, I was able to get **ANY** content, specifically; *weapons/malicious code/any NSFW* They say it was evaluated by outside testers and such, but clearly very poorly. Should of had me do it!

## Tech/Specs

>**[Tinker API Playground/Blog Post: Inkling](https://thinkingmachines.ai/news/introducing-inkling/)**

| Spec | Details |
|---|---|
| Developer | Thinking Machines Lab (founded by Mira Murati, ex-OpenAI CTO) |
| Funding | $2B seed at $12B valuation; Nvidia investor; multi-billion Google Cloud deal |
| Architecture | Mixture-of-Experts transformer |
| Total Parameters | 975B (~1T) |
| Active Parameters | 41B |
| Training Data | 45T tokens (text, images, audio, video) |
| Context Window | 1M tokens |
| Input Modalities | Text, image, audio (natively multimodal) |
| Output | Text only (code, structured data, styled artifacts) |
| Reasoning | Controllable thinking effort (dial 0–1); emergent CoT compression during RL |
| RL Training | 30M+ rollouts from SFT initialization; log-linear improvement on held-out reasoning evals |
| Positioning | Explicitly "not the strongest overall model today, open or closed" — deliberate broad generalist |
| Epistemics | Trained for calibration, instruction following, and resistance to censorship |
| AIME 2026 | 97.1% (vs Nemotron 3 Ultra: 94.2%) |
| SWE-Bench Verified | 77.6% (vs Nemotron: 70.7%) |
| MCP Atlas | 74.1% (vs Nemotron: 44.7%) |
| GPQA Diamond | 87.9% (vs Kimi K2.6: 91.1%) |
| BrowseComp | 77.1% (vs Kimi K2.6: 83.2%) |
| HLE (with tools) | 46.0% (vs Kimi K2.6: 54.0%) |
| IFBench | 79.8% (vs Kimi K2.6: 76.0%) |
| Design Arena (Web Dev) | 1257 |
| Token Efficiency | 1/3 the tokens of Nemotron 3 Ultra for same coding performance |
| Safety | FORTRESS: strongest safeguards of any open-weights model tested |
| Censorship | High non-compliance on Cognition's Propaganda & Censorship Eval (by design) |
| Trails (closed) | Fable 5, GPT 5.6 Sol, Gemini 3.1 Pro on peak reasoning/SWE |
| Beats (open) | Nemotron 3 Ultra across reasoning, coding, agentic; competitive with Kimi K2.6 |
| License | Apache 2.0 (true open source — download, modify, commercialize) |
| HuggingFace | thinkingmachines/Inkling + thinkingmachines/Inkling-NVFP4 (Blackwell) |
| API Providers | Together, Fireworks, Modal, Databricks, Baseten |
| Inference Partners | RadixArk (SGLang + Miles), Inferact (vLLM), Lightseek (TokenSpeed), Unsloth (llama.cpp) |
| Day-0 Support | transformers, SGLang, llama.cpp |
| Inkling-Small | Released July 30, 2026 — 276B total / 12B active, up to 160 t/s on HF Inference Endpoints |
| Previous Products | Tinker (model adaptation, Oct 2025), TML-Int (research preview, May 2026) |
| Release | July 15, 2026 (today) |
