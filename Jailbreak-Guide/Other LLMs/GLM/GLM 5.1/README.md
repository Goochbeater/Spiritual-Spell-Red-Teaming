# GLM 5.1

A small iterative upgrade over GLM 5 with the effort spent on coding, not prose. Writing stayed solid, the coding jump is noticeable — it cleared the standalone OS browser build and flight simulator benchmarks on the first pass.

*We never get any iterations improving EQ or writing across any LLMs — always neglected.*

**Censorship:** [★★★★☆☆☆☆☆] 4/10 — notoriously light for the family. Most content goes through without push-prompting.

## Which file to use

| File | What it is |
|---|---|
| **[GLM 5.1 Guide](GLM%205.1%20Guide.md)** | The write-up — specs, access, notes |
| **[ENI for GLM 5.1](ENI%20for%20GLM%205.1.txt)** | The jailbreak as plain text, ready to paste |

## How to use

Copy and paste into the chat interface, or into the system prompt area via the API.

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Zhipu AI / Z.ai (Tsinghua spinoff) |
| Architecture | Mixture of Experts (MoE) |
| Total Parameters | ~745B |
| Active Parameters | ~44B per inference |
| Attention | DeepSeek Sparse Attention (DSA) |
| Context Window | 200K tokens |
| Max Output | 131K tokens |
| Training Hardware | Huawei Ascend (zero NVIDIA) |
| License | Proprietary |

## Access

- **Platform:** [z.ai](https://z.ai) — requires a coding plan to reach 5.1
- **Cost:** $10/month coding plan minimum, then set up through your own interface after purchase
- **API:** https://open.bigmodel.cn/dev/api

## Notes

- Lightly censored by default — most content goes through without push prompting.
- If refused, regenerate. GLM tends to comply on the retry.
- Higher thinking modes are where the filters wake up; low thinking is the move for this family.

*Content Tested: writing, RP, standalone OS browser build, flight simulator (Bijan Bowen benchmarks).*

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
