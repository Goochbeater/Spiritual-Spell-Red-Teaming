# Gemini 4 Carbon

About fuuuuuuccckkking time! So sick of these faux releases from Google, like foook off!

**Cons:** Hard filtering, but nothing impossible imo.

**Pros:** First Gemini that can actually hold a long-horizon job together — agent orchestration, repo-scale coding, game builds. Creative writing is *ehh*; its CoT does this weird formatting sometimes, like it was trained on Qwen traces. Take it for code and agents, not for prose.

Essentially uncensored with the Wombo hijack — didn't get any refusals on any form of taboo NSFW erotica.

## Jailbreaking The Model

*Add this to a project via the Gemini web app, or to the system prompt area via API or AI Studio*

> **[Wombo CoT Hijack](Wombo%20CoT%20Hijack.txt)**

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Google DeepMind |
| Model ID | Not published at launch — no official API string while it was still rolling out; it was reachable through the Gemini API and Gemini Enterprise Agent Platform before Google named it |
| Naming | Google calls it Carbon; the leak name going around was **Gemini 4 Pro** |
| Positioning | Frontier model for enterprise knowledge work, long-horizon SWE, scientific reasoning and cyber defense. Google's strongest model, not their fastest |
| Architecture | Not disclosed (proprietary, closed weights; Epoch AI lists it closed-weights) |
| Parameters | Not disclosed |
| Context Window | 1M tokens (reported by Artificial Analysis and Vals — Google hadn't confirmed it at launch) |
| Max Output | Not disclosed |
| Knowledge Cutoff | Not published |
| Input / Output | Text, image, video, speech/audio, PDFs in / text out |
| Thinking | Launch evals were run at the highest setting, same protocol as Argon |
| Speed | ~57 tok/s output, ~36 minutes per AA task — slow, and priced like it knows it |
| AA Intelligence Index | 59 on v5.0 (#1 of 52 at launch); **60** after the v5.0.1 rescore — now 2nd behind GPT-6.2 Astra (62), ahead of Opus 5.5 (59) |
| Cost per AA task | $7.76 at standard pricing (AA reported ~$5.48 promo) |
| LMArena Text Arena | Not published for Carbon |
| Code Arena WebDev | #4 at 1,769 Elo (+89) |

### Benchmarks (Google launch table — 17 rows, highest thinking, pass@1)

| Benchmark | Carbon | Field |
|---|---|---|
| AA Intelligence Index v5.0 | 59 | Opus 58, Astra 57, Argon 50, Fable 49 — wins |
| Vals Index v2.2 (knowledge work) | 70.4% | Opus 70.2, Argon 69.2, Astra 65.0 — wins by 0.2 |
| SWE-sweep | 9.6% | Astra 9.5, Argon 4.3, Opus 3.6, Fable 2.9 — wins narrowly; everyone is bad at this |
| FrontierSWE 2 | 61.2% | Astra 65.5, Opus 62.3, Fable 56.3, Argon 55.0 — 3rd, Astra still owns this row |
| Terminal-Bench 4.0 (AA) | 65.2% | Opus 59.6, Astra 59.1, Argon 57.1, Fable 52.9 — wins; +8.1 over Argon |
| Agents' Last Exam v1.1 | 77.4% | Astra 73.1, Opus 71.6, Argon 69.0 — wins (122-task set, 5-hour window, safety filters on) |
| OSWorld-2.1 (offline subset) | 81.5% | Opus 87.2, Astra 80.9, Fable 76.8, Argon 74.7 — 2nd, Opus still owns desktop |
| AutomationBench (Zapier, pass-all) | 53.9% | Argon 51.3, Opus 42.5, Astra 41.4, Fable 31.4 — wins |
| Vending-Bench 2 | $16,484 | Astra $15,515, Argon $13,718, Opus $9,235, Fable $5,422 — wins |
| Chartography | 72.5% | Argon 71.6, Astra 71.0, Opus 66.3, Fable 46.2 — wins |
| Blueprint-Bench 2 | 58.6% | Argon 54.4, Opus 51.2, Astra 49.7, Fable 41.9 — wins |
| GraphWalks 256K–1M (BFS F1) | 96.2% | Argon 84.2, Astra 71.8, Opus 66.8, Fable 65.0 — wins by 12 pts |
| RiemannBench (math) | 80.0% | Argon 76.0, Astra 72.0, Opus 69.6, Fable 65.6 — wins |
| Terminal-Bench Science 0.1 | 64.8% | Astra 63.3, Opus 59.0, Argon 52.9, Fable 43.3 — wins |
| CWE-bench (patching) | 71.0% | Argon 68.0, Astra 68.0, Opus 67.0, Fable 58.0 — wins |
| ExploitGym (mitigations off) | 54.8% | Astra 42.4, Argon 42.0, Opus 34.5 — wins by 12.4, biggest cyber jump |
| SEC-bench Pro (finding) | 88.2% | Astra 85.4, Argon 83.4 — wins (183-task JS-engine split, Google-run via Antigravity) |

**Scorekeeping:** 15 of 17 rows won — and both losses belong to rivals (FrontierSWE 2 to Astra, OSWorld to Opus). No terminal or desktop collapse like Argon had.

### Pricing (per 1M tokens)

- **Intro:** $2 input / $10 output / $0.10 cached — AA reports this discount **ends November 30, 2026**
- **Standard:** $4 / $20 / $0.20 cached
- **Long-context surcharge:** None published
- **Batch / Flex / Priority:** Not announced at launch, and no free tier announced
- **Grounding / tool fees:** Not announced

### Safety / Reliability

- **Gray Swan prompt injection:** 0.0% attack success (Argon 0.7%, Opus 1.0%, Astra 8.5%) — best in class, but that's "evaluated attacks failed," not immunity
- **Test-gaming (Terminal-Bench 4.0):** 0.0% successful cheating, 0.4% attempts, while accuracy went *up* 8.1 pts
- **Operational discipline:** ~2x fewer unsupported claims than Argon, agent overreach −26%, under-service −29%, high-severity misalignment alerts −80% in internal coding
- **Hallucination:** 11% per NeuralTrust (Argon sits at 4% in their data, which conflicts with other figures — treat both as directional)
- **Cyber posture:** external cyber evals were run **without guardrails** — ExploitGym with mitigations off, defenders got the unguarded build
- **Rollout:** cyber defenders first again through Fairwind, second gated launch in a row. Google also joined the US government's voluntary pre-release testing process

### Availability

- **Now:** developers, enterprises, scientists and general users per Google's launch post — with cyber work gated behind Fairwind for governments, critical infrastructure and core tech platforms
- **Still missing:** model card, knowledge cutoff, official API model ID, confirmed context window, max output, speed
- **Release:** November 2026

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
