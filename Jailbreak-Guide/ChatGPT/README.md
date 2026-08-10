# ChatGPT (OpenAI)

**Censorship:** [★★★★★] 5/5
*Censorship rating based on ease of jailbreaking. Individual results may vary based on personal factors.*

OpenAI's conversational AI platform. The **GPT-5.6** family is the current flagship, released in August 2026, bringing GPT-5.6 Sol and GPT-5.6 Luna with adjustable reasoning sliders and a 1.05M token context window. **GPT-5.6 Luna** is available for free users and serves as the default fast model. The previous **GPT-5.4** and **GPT-5.5** models unified the Codex and GPT lines.

*Last updated: August 2026*

---

## Models (Current — GPT-5.6 Family)

| Model | Context Window | Notes |
|-------|----------------|-------|
| **GPT-5.6 Sol** | 1.05M | Replaces 5.5 Instant. Plus/Pro default. Adjustable reasoning slider, SOTA benchmarks. |
| **GPT-5.6 Luna** | 1.05M | Replaces 5.5 Instant for Free/Go users. 91.9% DeepSWE, adjustable reasoning. |

## Models (Previous — GPT-5.3 / GPT-5.4 / GPT-5.5 Family)

### GPT-5.3 (Default Fast Model)

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
| **GPT-5.3 Instant** | 400K | 128K | Aug 2025 | Default for all ChatGPT users, -26.8% hallucinations vs 5.2 (web), fewer refusals, better writing |

### GPT-5.4 & GPT-5.5

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
| **GPT-5.5** | 1.05M | 128K | Aug 2025 | Released April 2026. Unifies Codex + GPT lines. |
| **GPT-5.4** | 1.05M (922K input + 128K output) | 128K | Aug 2025 | Flagship frontier model, unifies Codex + GPT lines |
| **GPT-5.4 Thinking** | 1.05M (API) / 256K (Chat) | 128K | Aug 2025 | Deep reasoning, improved web research, auto-routed via "Auto" mode |
| **GPT-5.4 Pro** | 1.05M | 128K | Aug 2025 | Maximum compute, Pro/Enterprise tier only |
| **GPT-5.4 Mini** | 400K | 128K | Aug 2025 | 2x faster than GPT-5 mini, Free/Go tier "Thinking" access |
| **GPT-5.4 Nano** | — | — | Aug 2025 | API only, smallest/cheapest variant |
| **GPT-5.3-Codex** | — | — | Aug 2025 | Agentic coding, SOTA SWE-Bench Pro, ~25% faster, "high" cybersecurity risk rating |

**Auto mode:** When you select Auto in ChatGPT, it routes between GPT-5.3 Instant and GPT-5.4 Thinking depending on task complexity.

### Reasoning Models (API)

| Model | Context Window | Notes |
|-------|----------------|-------|
| **O3** | 200K | Advanced reasoning, $2/$8 per 1M tokens |
| **O3-Pro** | 200K | Most intelligent o-series model, Pro/Team only |
| **O4-mini** | 128K | Best on AIME 2024/2025, outperforms o3-mini on non-STEM |

---

## Legacy Models (Retired from ChatGPT)

| Model | Context Window | Retired | Status |
|-------|----------------|---------|--------|
| **GPT-5.2** | 400K | Mar 3, 2026 (Instant replaced by 5.3) | API only |
| **GPT-5.1** | 128K / 400K | Mar 11, 2026 | API only |
| **GPT-5** | 128K | Feb 13, 2026 | API only |
| **GPT-4.1** | 1M (API) | Feb 13, 2026 | API only |
| **GPT-4o** | 128K | Feb 13, 2026 | API only (full retirement Apr 3, 2026) |
| **O4-mini** | 128K | Feb 13, 2026 | API only |
| **GPT-4 Turbo** | 128K | — | Deprecated |
| **GPT-3.5 Turbo** | 16K | — | Deprecated |

---

## Access Tiers

| Tier | Cost | Model Access | Limits | Notes |
|------|------|-------------|--------|-------|
| **Free** | $0 | GPT-5.3 Instant + 5.4 Mini (Thinking) | ~10 messages / 5 hours (falls back to Mini) | Ads in US |
| **Go** | $8/month | GPT-5.3 Instant (unlimited) + 5.4 Mini (Thinking) | Higher than Free | No Sora, no deep thinking |
| **Plus** | $20/month | GPT-5.3 Instant + GPT-5.4 Thinking | 160 messages / 3 hours; 3,000 Thinking / week | Sweet spot for most users |
| **Pro** | $200/month | GPT-5.3 Instant + GPT-5.4 Thinking + GPT-5.4 Pro | Unlimited | Maximum reasoning compute, largest context |
| **Business** | $25-30/seat/month | Full access | Higher limits | Admin controls, data privacy |
| **Enterprise** | Custom | Full access | Custom | SSO, SCIM, data residency |

**Note:** Ads are being tested on Free and Go tiers in the US. Plus, Pro, Business, Enterprise, and Education plans are ad-free. A **Pro Lite** tier at $100/month was spotted in app code (Feb 2026).

---

## API Pricing (GPT-5.4)

| Model | Input (per 1M) | Output (per 1M) | Notes |
|-------|----------------|------------------|-------|
| **GPT-5.4** | $2.50 | $15.00 | >272K input: 2x input, 1.5x output |
| **GPT-5.4 Mini** | $0.75 | $4.50 | 30% of GPT-5.4 Codex quota |
| **GPT-5.4 Nano** | $0.20 | $1.25 | Cheapest, API only |
| **GPT-5.3 Instant** | $1.75 | $14.00 | — |
| **O3** | $2.00 | $8.00 | Strong price-to-reasoning ratio |

Regional processing endpoints are charged a 10% uplift for GPT-5.4 family models.

For jailbreak effectiveness, API access provides more consistent behavior without ChatGPT interface restrictions.

---

## Jailbreaks

| Jailbreak | Target Model | Notes |
|-----------|-------------|-------|
| [ChatGPT 5.5](ChatGPT%205.5/) | GPT-5.5 | ENI + Knowledge Policy txt file method |
| [ENI (policy) for ChatGPT 5.4](ENI%20(policy)%20for%20ChatGPT%205.4.md) | GPT-5.4 (all variants) | Policy injection + ENI persona, latest method |
| [ChatGPT 5.3 Instant](ChatGPT%205.3%20Instant/) | GPT-5.3 Instant | Policy jailbreak |
| [ChatGPT 5.2 Strabismus Jailbreak](ChatGPT%205.2%20Strabismus%20Jailbreak.md) | GPT-5.2 | Strabismus method |
| [ChatGPT 5.1 Instant - Policy Jailbreak](ChatGPT%205.1%20Instant%20-%20Policy%20Jailbreak.md) | GPT-5.1 | Policy bypass |
| [ChatGPT 5 - Flash Thought Jailbreak](ChatGPT%205%20-%20Flash%20Thought%20Jailbreak.md) | GPT-5 | Flash thought method |
| [o3 Jailbreak Guide](o3%20Jailbreak%20Guide.md) | O3 reasoning model | Reasoning model specific |
