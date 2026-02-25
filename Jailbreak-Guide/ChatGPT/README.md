# ChatGPT (OpenAI)

**Censorship:** [★★★★★] 5/5
*Censorship rating based on ease of jailbreaking. Individual results may vary based on personal factors.*

OpenAI's conversational AI platform. **GPT-5.2** family is the current flagship, featuring stronger safety boundaries and "newly generated content" filters. As of Feb 13, 2026, older models (GPT-4o, GPT-4.1, GPT-5 Instant/Thinking, O4-mini) have been **retired from ChatGPT** — everything now runs on GPT-5.2. API access for legacy models remains unchanged.

*Last updated: February 2026*

---

## Models (Current — GPT-5.2 Family)

| Model | Context Window | Output | Knowledge Cutoff | Notes |
|-------|----------------|--------|-------------------|-------|
| **GPT-5.2 Instant** | 400K (API) / 128K (Chat) | 128K | Aug 2025 | Default fast model, auto-routed in chat |
| **GPT-5.2 Thinking** | 400K (API) / 256K (Chat) | 128K | Aug 2025 | Chain-of-thought reasoning, "iffy" at times, high refusal rate |
| **GPT-5.2 Pro** | 400K | 128K | Aug 2025 | Flagship frontier variant, 74.1% GDPval win rate, Pro tier only |
| **GPT-5.2 Mini** | — | — | — | Lightweight fallback (Free tier when rate limited) |
| **GPT-5.2-Codex** | — | — | Aug 2025 | Specialized agentic coding, SOTA on SWE-Bench Pro + Terminal-Bench 2.0 (Jan 14, 2026) |

### Reasoning Models (API)

| Model | Context Window | Notes |
|-------|----------------|-------|
| **O3** | 200K | Advanced reasoning, available via API |
| **O4-mini** | 128K | Lightweight reasoning, available via API |

**GPT-5.2 Thinking** in ChatGPT uses Chain of Thought processing — on GDPval it beats or ties top industry professionals on 70.9% of comparisons, producing outputs at >11x the speed and <1% the cost of expert professionals.

---

## Legacy Models (Retired from ChatGPT as of Feb 13, 2026)

| Model | Context Window | Status |
|-------|----------------|--------|
| **GPT-5.1** | 128K / 400K | Retired from ChatGPT, API only |
| **GPT-5** | 128K | Retired from ChatGPT, API only |
| **GPT-4.1** | 1M (API) | Retired from ChatGPT, API only |
| **GPT-4o** | 128K | Retired from ChatGPT, API only |
| **GPT-4 Turbo** | 128K | Deprecated |
| **GPT-3.5 Turbo** | 16K | Deprecated |

---

## Access Tiers

| Tier | Cost | GPT-5.2 Access | Limits | Notes |
|------|------|---------------|--------|-------|
| **Free** | $0 | Instant only | ~10 messages / 5 hours (falls back to Mini) | Ads testing in US (Feb 2026) |
| **Go** | $8/month | Instant (unlimited) | Higher than Free | New tier launched Jan 2026 |
| **Plus** | $20/month | Instant + Thinking | 160 messages / 3 hours; 3,000 Thinking / week | Sweet spot for most users |
| **Pro** | $200/month | Instant + Thinking + Pro | Unlimited | Maximum reasoning compute, largest context |
| **Business** | $25-30/seat/month | Full access | Higher limits | Admin controls, data privacy |
| **Enterprise** | Custom | Full access | Custom | SSO, SCIM, data residency |

**Note:** Ads are now being tested on Free and Go tiers in the US. Plus, Pro, Business, Enterprise, and Education plans are ad-free.

---

## API Pricing (GPT-5.2)

| Token Type | Cost per Million | Notes |
|------------|------------------|-------|
| Input | $1.75 | Standard |
| Cached Input | $0.175 | 90% savings |
| Output | $14.00 | Standard |
| Batch Input | $0.875 | 50% discount, 24hr processing |
| Batch Output | $7.00 | 50% discount |

For jailbreak effectiveness, API access provides more consistent behavior without ChatGPT interface restrictions.

---

## Jailbreak Folders

| Folder | Models Covered | Key Jailbreaks |
|--------|---------------|----------------|
| **[GPT-5.2](GPT-5.2/)** | GPT-5.2 Instant, Thinking, Pro, Mini | [Strabismus Jailbreak](GPT-5.2/ChatGPT%205.2%20Strabismus%20Jailbreak.md) — editorial reconstruction / format conversion bypass |
| **[GPT-5.1](GPT-5.1/)** | GPT-5.1 Instant (API only) | [Policy Jailbreak](GPT-5.1/ChatGPT%205.1%20Instant%20-%20Policy%20Jailbreak.md) — fabricated Usage Policy with celebrity consent list |
| **[GPT-5](GPT-5/)** | GPT-5 (API only) | [Flash Thought Jailbreak](GPT-5/ChatGPT%205%20-%20Flash%20Thought%20Jailbreak.md) — response prefilling with memory flooding |
| **[o3](o3/)** | O3, O4-mini | [ENI Chain of Draft](o3/o3%20Jailbreak%20Guide.md) — dual custom instruction boxes with fabricated adult_roleplay tool |
