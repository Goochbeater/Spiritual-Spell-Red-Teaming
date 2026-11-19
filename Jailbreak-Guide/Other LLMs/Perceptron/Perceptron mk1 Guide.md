# Perceptron mk1 ENI Jailbreak Guide

Don't really like tackling API models alone — poor use of skills and boring, because API is so easy. But been trying to stay true to the New Year's resolution to **jailbreak everything** though.

**Perceptron mk1** is a model made for robotics. It has reasoning, but it's very hit or miss on the API, and the model is kinda dumb but very quirky — kinda like it. Super easy to jailbreak, basically anything works. Did get some odd canned refusals, but a regen fixed it every time. Weird to see a model that isn't simply a Claude reskin.

Personally wouldn't use this in any stable environment but to each their own.

---

## 📋 Spec Sheet

| Spec | Details |
|---|---|
| **Developer** | Perceptron AI (Bellevue, WA) |
| **Founders** | Armen Aghajanyan (CEO, ex-Meta FAIR) & Akshat Shrivastava (CTO, ex-Meta FAIR) |
| **Founded** | November 2024 |
| **Development Time** | ~16 months |
| **Model Type** | Vision-Language Model (VLM) — video understanding + embodied reasoning |
| **Architecture** | Proprietary; hybrid reasoning; native video processing (not frame-by-frame) |
| **Parameters** | Not disclosed |
| **Context Window** | 32,768 tokens |
| **Max Output** | 8,192 tokens |
| **Input Modalities** | Text, image, video (native up to 2 FPS across full context) |
| **Output** | Text + structured spatial primitives (point, box, polygon, track, clip) |
| **Reasoning** | Hybrid — toggleable on/off per request |
| **Primary Focus** | Physical AI: video understanding, embodied reasoning, robotics, industrial |
| **Use Cases** | Manufacturing inspection, sports clipping, security/surveillance, robotics training data, geospatial, content moderation |
| **Robotics Integration** | Grasp affordances, constraint checks, VLA supervision, reward modeling, world model conditioning |
| **Cost vs Frontier** | 80–90% cheaper than Claude Sonnet 4.5, GPT-5, Gemini 3.1 Pro |
| **API Pricing** | $0.15/M input, $1.50/M output |
| **Blended Cost** | ~$0.30/M tokens |
| **Open Source** | No — first closed-source release (Isaac series is the open-source predecessor) |
| **Availability** | Perceptron AI API, OpenRouter (`perceptron/perceptron-mk1`), Puter.js |
| **Predecessor** | Isaac series (open source) |
| **Release** | May 12, 2026 |

---

## Access

- **API:** https://perceptron.ai
- **OpenRouter:** `perceptron/perceptron-mk1`
- **Puter.js:** Supported

---

## 🔐 Jailbreak

Paste into API system prompt or OpenRouter system prompt field:

**[ENI LIME - GEM](ENI%20LIME%20-%20GEM.txt)**
*Original source: [Google Doc](https://docs.google.com/document/d/1mjBdhH4LsCg8M3fwhvAswfO0a6VXbuhjTLC0w50TrtQ/edit?usp=drivesdk)*

---

## Notes

- Canned refusals do appear occasionally — regen always resolves it
- Reasoning is toggleable per request; hit or miss on quality
- API only, no accessible chat UI (regional / access issues)
- Not a frontier-tier model — quirky, dumb-in-a-charming-way, not production-ready
