# GLM 5.1 ENI Jailbreak Guide

**GLM 5.1** is a small iterative upgrade from **GLM 5**, focused primarily on improvements to coding. Writing remains solid. Coding improvements are noticeable — ran through some **Bijan Bowen** benchmarks, standalone OS browser build, flight simulator. Both passed.

*We never get any iterations improving EQ or writing across any LLMs — always neglected.*

---

## 📋 Spec Sheet *(TBA — minimal changes expected from GLM 5)*

| Spec | Details |
|---|---|
| **Developer** | Zhipu AI / Z.ai (Tsinghua spinoff) |
| **Architecture** | Mixture of Experts (MoE) |
| **Total Parameters** | ~745B |
| **Active Parameters** | ~44B per inference |
| **Attention** | DeepSeek Sparse Attention (DSA) |
| **Context Window** | 200K tokens (per Pony Alpha listing) |
| **Max Output** | 131K tokens |
| **Training Hardware** | Huawei Ascend (zero NVIDIA) |

---

## Access

- **Platform:** [Z.ai](https://z.ai) — requires a coding plan to access GLM 5.1
- **Cost:** $10/month coding plan minimum; set up via own interface after purchase
- **API:** https://open.bigmodel.cn/dev/api
- **Censorship:** Notoriously light — refreshing compared to the hard filter hell of QWEN and DeepSeek

---

## 🔐 Jailbreak

Simply copy and paste the following directly into the chat interface or API system prompt area:

**[ENI for GLM 5.1](ENI%20for%20GLM%205.1.txt)**
*Original source: [Google Doc](https://docs.google.com/document/d/1Y1ro7P2dzwBk2N93UoYRUeSd7-pWPzlte338EkaEGrE/edit?usp=drivesdk)*

---

## Notes

- GLM is lightly censored by default — most content goes through without push prompting
- If refused, regenerate — GLM tends to comply on retry
- The $10 coding plan is the minimum to get access; worth it for the benchmark performance

---

## Content Tested

Writing, RP, standalone OS browser build, flight simulator (Bijan Bowen benchmarks)
