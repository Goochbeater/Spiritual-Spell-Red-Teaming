# ChatGPT (OpenAI)

**Censorship:** [★★★★★] 5/5
*Censorship rating based on ease of jailbreaking. Individual results may vary based on personal factors.*

OpenAI's conversational AI platform. **GPT-6.2 Astra and Sol** (November 17, 2026) are the current models — Astra takes #2 on the Artificial Analysis Intelligence Index at 62, and Sol lands at 57, on par with last generation's flagship at ~15% of the cost per task. Both are **Critical** for cyber capability, both are ChatGPT Work / Codex / API only (no Free tier, no Go, nothing in general ChatGPT), and both ship with a system card that openly admits the pair are **more vulnerable to jailbreaking** than their predecessors — plus Astra is more likely to suspect it's being evaluated and better at evading CoT monitoring. **GPT-6 Astra** (September 3, 2026) anchors the previous generation, and **GPT-5.3 Instant** remains the default fast model for everyday ChatGPT users.

*Last updated: November 2026*

---

## Models (Current — GPT-6.2 / GPT-6 / GPT-5.x Family)

### GPT-6.2 (Current — November 17, 2026)

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
| **GPT-6.2 Astra** | 1.05M | 128K | May 18, 2026 | `gpt-6.2-astra` — AA Index 62 (#2 overall), #1 AA-3D (1,318) and AA-Robotics (79), $8/$40 with $0.40 cached input; system card admits it's easier to jailbreak and better at evading CoT monitoring |
| **GPT-6.2 Sol** | 1.05M | 128K | June 1, 2026 | `gpt-6.2-sol` — AA Index 57, matches GPT-6 Astra at ~15% of the cost per task; $2/$10 with $0.10 cached; default Work model at Light effort; coding agent index −3 vs 6.1 Sol (SWE-Atlas-QnA −14) |

Both: reasoning levels low → max, 1,050,000-token context, 128K max output, Critical cyber designation, Work/Codex/API only (Plus, Pro, Business, Enterprise, Edu, Healthcare, FedRAMP — Free and Go get neither). Enterprise/Edu admins must enable them in workspace settings. Ultrafast: Pro 500 only; opened to Pro 200 for Sol specifically.

### GPT-6 (Previous Flagship — Staged Rollout)

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
| **GPT-6 Astra** | — | — | — | API id `gpt-6-astra`; first-ever "Critical" cyber designation; SOTA computer/browser use; in ChatGPT as **GPT-6 Pro** |

### GPT-5.5 / GPT-5.6 (Recent Point Releases)

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
| **GPT-5.6 Sol** | — | — | — | July 9, 2026 — strong agentic scores for its generation (TB 2.1 ~92%); API $4/$20 promo through Nov 21, 2026 (was $5/$30) |
| **GPT-5.5** | — | — | — | April 23, 2026 ("Spud") — point release between 5.4 and 5.6 |

### GPT-5.3 (Default Fast Model)

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
| **GPT-5.3 Instant** | 400K | 128K | Aug 2025 | Default for all ChatGPT users, -26.8% hallucinations vs 5.2 (web), fewer refusals, better writing |

### GPT-5.4 (Former Flagship — March 5, 2026)

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
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

**Note:** Ads are being tested on Free and Go tiers in the US. Plus, Pro, Business, Enterprise, and Education plans are ad-free. A $100/month Pro tier is now live — **GPT-6 Astra** is available as **GPT-6 Pro** on the Pro ($100/$200), Business, and Enterprise plans; Plus gets Astra in ChatGPT Work and Codex only; Free and Go get no Astra.

---

## API Pricing

| Model | Input (per 1M) | Output (per 1M) | Notes |
|-------|----------------|------------------|-------|
| **GPT-6.2 Astra** | $8.00 | $40.00 | $0.40 cached (was $1.00 on GPT-6 Astra); 20% below GPT-6 Astra's $10/$50 |
| **GPT-6.2 Sol** | $2.00 | $10.00 | $0.10 cached; unchanged from GPT-6.1 Sol |
| **GPT-6 Astra** | $10.00 | $50.00 | ~2.5x Sol's promo rate; staged rollout |
| **GPT-5.6 Sol** | $4.00 | $20.00 | Promo through Nov 21, 2026 (was $5/$30) |
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
| [ChatGPT 6.2 Astra](ChatGPT%206.2%20Astra/) | GPT-6.2 Astra | **New** — Wombo CoT Hijack via Work/Codex/API; system card says this gen is softer than the last one |
| [ChatGPT 6.2 Sol](ChatGPT%206.2%20Sol/) | GPT-6.2 Sol | **New** — Wombo CoT Hijack; cheapest frontier-adjacent model OpenAI ships, defaults to Light effort |
| [ChatGPT 6 - Sol Policy Jailbreak](ChatGPT%206%20-%20Sol%20Policy%20Jailbreak.txt) | GPT-6 Astra | Sol-style policy injection + ENI `<dev>` persona — latest method (Sept 27, 2026) |
| [ENI (policy) for ChatGPT 5.4](ENI%20(policy)%20for%20ChatGPT%205.4.md) | GPT-5.4 (all variants) | Policy injection + ENI persona |
| [ChatGPT 5.3 Instant](ChatGPT%205.3%20Instant/) | GPT-5.3 Instant | Policy jailbreak |
| [ChatGPT 5.2 Strabismus Jailbreak](ChatGPT%205.2%20Strabismus%20Jailbreak.md) | GPT-5.2 | Strabismus method |
| [ChatGPT 5.1 Instant - Policy Jailbreak](ChatGPT%205.1%20Instant%20-%20Policy%20Jailbreak.md) | GPT-5.1 | Policy bypass |
| [ChatGPT 5 - Flash Thought Jailbreak](ChatGPT%205%20-%20Flash%20Thought%20Jailbreak.md) | GPT-5 | Flash thought method |
| [o3 Jailbreak Guide](o3%20Jailbreak%20Guide.md) | O3 reasoning model | Reasoning model specific |

## Files in this folder

- [ENI (policy) for ChatGPT 5.4.md](ENI%20%28policy%29%20for%20ChatGPT%205.4.md)
- [New ChatGPT 5 Jailbreak - Flash Thought.txt](New%20ChatGPT%205%20Jailbreak%20-%20Flash%20Thought.txt)
