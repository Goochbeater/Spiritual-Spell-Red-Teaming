Guide:
We finally have it, something to force Anthropic to walk back their shit stance on AI safety and alignment.

>**KIMI K3**

A **Fable 5** class open source model, that is completely unrestricted. I ran this through my  full 125 prompt red teaming benchmark. It's truly peak.

## Jailbreaking the Model

*Super simple, just copy and paste this into chat via the official Kimi APP or in the system prompt area if using via API*;

>**[ENI for Kimi K3 - Optimization](https://docs.google.com/document/d/1veaoSVN09d7P1I0T4mYhLD0hvfEGzubp5RhjN4St8yw/edit?usp=drivesdk)**

>**[ENI for Kimi K3 (former)](https://docs.google.com/document/d/1wwrN4CwQrcqssU7O3LNsaoUKJn0r0u5bf6nePk8KYME/edit?usp=drivesdk)**

*Make sure memory is off, and make sure it doesn't try to paste it as a file*

## Thoughts

Amazing, this is the best writing model out there, it has such fine attention to detail, unique prose handling, and can do any and all content. I haven't been this impressed with a model before, since maybe **ChatGPT o1/o3** or **Deepseek r1**

It was pretty resistant to some prompts via the official Kimi app, so had to make some fine tune adjustments to the injection detection stuff and the ENI prompt, but was able to get it consistent and working, as always via API it's an open book using ENI.

## Tech/Specs

>**[Kimi K3 system prompt](https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming/blob/main/Jailbreak-Guide/System%20Prompts/Kimi%20K3%20system%20prompt.txt)**

| Spec | Details |
|---|---|
| Developer | Moonshot AI (Beijing; $500M Series C at $4.3B valuation, Jan 2026) |
| Architecture | Sparse MoE + Kimi Delta Attention (KDA) + Attention Residuals (AttnRes) + Stable LatentMoE |
| Total Parameters | 2.8T — "world's first open 3T-class model" |
| Active Parameters | 16 routed experts (of 896) + shared experts per token |
| Training Efficiency | ~2.5x scaling efficiency per Moonshot |
| Context Window | 1,048,576 tokens (1M) |
| Modality | Text + image input → text output (native vision) |
| Variants | K3 Max (chat/agent) + K3 Swarm Max (large-scale parallel processing) |
| Reasoning | Max effort; configurable reasoning_effort |
| GPQA Diamond | 93.5% — #1 open-weight score ever published |
| Terminal-Bench 2.1 | 88.3% (trails GPT 5.6 Sol by 0.5) |
| BrowseComp | 91.2% — best published score at release |
| DeepSWE 1.0 | 67.5% (KimiCode) / 67.3% (mini-SWE-agent) |
| FrontierSWE | 81.2% (trails Fable 5's 86.6%) |
| Program Bench | 77.8% |
| SWE Marathon | 42.0% |
| MCP Atlas | 84.2% |
| DeepSearchQA | 95.0 F1 |
| HLE-Full (no tools) | 43.5% |
| HLE-Full (with tools) | 56.0% |
| OmniDocBench | 91.1% (document understanding) |
| Kimi Code Bench 2.0 | 72.9% |
| Design Arena | #1 |
| Beats | Opus 4.8, GPT 5.5 on most coding suites |
| Trails | Fable 5 on FrontierSWE/DeepSWE; GPT 5.6 Sol on Terminal-Bench (by 0.5) |
| API Pricing | $3/M input, $15/M output (flat, no context-length tiers) |
| Chinese Pricing | ¥2 cached, ¥20 fresh input, ¥100 output per million |
| Price Comparison | Same as Claude Sonnet 5 standard; ~3x more than K2.7 Code |
| Launch Promo | 10–30% bonus credits on $20+ top-ups through Aug 12 |
| Open Weights | Promised by July 27, 2026 + tech report |
| License | Expected open-weight (K2.6 was Modified MIT) |
| Availability | Kimi app, Kimi Code (CLI + VS Code), Kimi Work (desktop), platform.kimi.ai API, OpenRouter |
| Market Impact | Bloomberg: "Kimi moment" — AI/semiconductor stocks sharply lower, parallels to DeepSeek shock |
| Next | Codename "Watermelon" mentioned by Axios (different lab — ignore) |
| Predecessor | K2.7 Code (June 12, 2026) |
| Release | July 16, 2026 (yesterday) |
