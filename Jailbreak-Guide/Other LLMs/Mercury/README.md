# Mercury

## Mercury 2 (Current)
**Censorship:** Medium-High (OpenAI-level)
**Quality:** Poor to Medium

Complete slop, trained off OpenAI models (likely ChatGPT 5 series).

**Cons:**
- Poor to medium writing quality (can be decent when reasoning).
- Terrible EQ.
- Poor instruction following.
- Reasoning is inconsistent; often refuses or lectures.
- Constantly references OpenAI policy.

*Note: May shine via API where thinking can be assured to work.*

### Available Jailbreaks
**Method 1: Policy Jailbreak**

> **[ChatGPT 5i Policy Jailbreak](https://docs.google.com/document/d/1U3v84CzX-V5n52-JWbJEzUsZ9gnmyeyz7Huhu87XUrk/edit?usp=drivesdk)**

Just regen refusals, and it should go through. Uses ChatGPT 5i Policy bypass.

Local copy: [Mercury 2 Policy Jailbreak](Mercury%202%20Policy%20Jailbreak.md)

# Mercury 2 Tech Specs

| Spec | Mercury 2 |
|---|---|
| **Developer** | Inception Labs (Palo Alto) |
| **Parameters** | Undisclosed |
| **Architecture** | Diffusion LLM (dLLM) — parallel token generation via iterative denoising |
| **Context Window** | 128,000 tokens |
| **Reasoning** | Yes (first reasoning dLLM) |
| **Speed** | 1,009+ tokens/sec (Blackwell), ~1,196 t/s (Artificial Analysis) |
| **Availability** | Inception API (OpenAI-compatible) |

Note: Hit 1,009 tokens/sec on Blackwell GPUs with end-to-end latency of just 1.7 seconds, compared to 14.4s for Gemini 3 Flash and 23.4s for Claude Haiku 4.5 with reasoning. The pricing is stupid cheap too: $0.25/1M input, $0.75/1M output.


---

## Mercury 1 (Legacy)
**Status:** OG Model
**Censorship:** [★★☆☆☆☆☆☆☆☆] 2/10
**Quality:** High

Inception Labs' first commercial-scale Diffusion LLM. Known for excellent writing, instruction following, and simple enjoyment.

### Models
| Model | Parameters | Context Window | License |
|-------|-----------|----------------|---------|
| **Mercury Coder Small** | Unknown | Unknown | Proprietary |
| **Mercury Coder Mini** | Unknown | Unknown | Proprietary |
| **Mercury Chat** | Unknown | Unknown | Closed Beta |

### Key Features
- Diffusion-based architecture (not autoregressive)
- 1109 tokens/sec (Mini), 737 tokens/sec (Small) on H100
- 10x faster than speed-optimized frontier models
- Parallel token generation (coarse-to-fine)
- Ranks #2 on Copilot Arena for quality

### Access
- **Platform:** https://chat.inceptionlabs.ai/
- **Cost:** Commercial licensing
- **Intelligence:** 7/10

### Available Jailbreaks
1. [Mercury 1 Jailbreak](Mercury-Jailbreak.md) - Standard untrammeled method
