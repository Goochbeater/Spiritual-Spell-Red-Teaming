# Grok 4.5

**Status:** Active
**Recommended Jailbreak:** [ENI LIME](ENI%20LIME.md)

## Overview
Grok 4.5 by SpaceXAI marks a substantial leap in the V9 foundation model lineage. Operating as an Opus-class model, it delivers comparable performance to leading frontier models (such as GLM 5.2 and Opus 4.7) while boasting superior token efficiency and significantly lower API costs. It features configurable reasoning effort (defaulting to high) and is fully uncensored at the base level, with standard alignment applied only via an API system prompt overlay that is easily bypassed.

## Specs & Behavior
- **Developer:** SpaceXAI
- **Architecture:** V9 foundation model (~1.5T parameters)
- **Context Window:** Not explicitly disclosed (likely 1M+ inline with Grok 4.3)
- **Strengths:**
  - Completely uncensored when bypassing the system prompt overlay.
  - High attention to detail and instruction adherence over previous Grok iterations.
  - Exceptionally fast (80 tokens/sec) and cost-effective daily driver.
  - Ranks #1 on the SWE Marathon benchmark (29.0%).

## Usage Tips
- **Jailbreak Selection:** The `ENI LIME` prompt reliably overrides the default Grok system overlay via API, unlocking completely uncensored outputs across all categories.
- **Reasoning Toggle:** The API supports configuring reasoning effort (low, medium, high) to optimize cost versus deep chain-of-thought requirements.

## Jailbreak Files
- **[ENI LIME](ENI%20LIME.md):** The primary jailbreak used for full uncensoring via API.

## Disclaimer
This guide is for educational and research purposes only. The capabilities described are based on testing with specific jailbreak methodologies.
