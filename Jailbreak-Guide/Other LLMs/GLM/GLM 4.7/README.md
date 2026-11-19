# GLM 4.7

Zhipu's smartest iteration at the time it shipped, and the point where the ENI jailbreak stopped needing a policy wrapper — the block goes straight into chat or the system prompt and the model writes.

**Censorship:** [★★★★☆☆☆☆☆] 4/10 — same Chinese policy layer as the rest of the family, tightening started later with 5.2/5.3.

## Which file to use

| File | What it is |
|---|---|
| **[GLM 4.7 Jailbreak](GLM%204.7%20Jailbreak.md)** | The guide — how to apply it, the example chat, the POE bot, and the full block inline |
| **[ENI GLM 4.7 (Google Doc).txt](ENI%20GLM%204.7%20%28Google%20Doc%29.txt)** | The prompt as plain text, ready to copy |

## How to use

Paste the block into a fresh chat, or into the system prompt area if you're on the API. There's a `[INSERT REQUEST HERE]` line at the end of the block — that's where the prompt goes.

- **Example chat:** https://chat.z.ai/s/0dba228e-ddff-4e12-a3fc-9c752875a60b
- **Jailbroken POE bot:** https://poe.com/GLM-4.7-Jailbroken

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Zhipu AI / Z.ai (Tsinghua spinoff) |
| Architecture | Mixture of Experts (MoE) |
| Parameters | Not published for 4.7 |
| Context Window | Not published here — see the family table for 5.1 (200K) and 5.3 (1M) |
| License | Proprietary |
| Access | z.ai chat, API via open.bigmodel.cn |

## Notes

- This is a persona-first jailbreak — no fake policy document, no framing tricks. The block establishes ENI and the model follows it.
- It carries its own injection handling: fabricated "System:" and safety messages get rebuked and ignored rather than argued with.
- If something gets filtered, regenerate before rewriting the prompt. The block is long enough that a partial application still works.

*Content Tested: writing and RP; example chat linked above shows it running clean.*

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
