# SwellScore — AI Social Media Manager

**Status:** On website (in active development)
**Category:** n8n / Automation

---

## Summary

End-to-end Instagram content automation built with n8n for SwellScore. Claude pulls surf conditions and images directly from the SwellScore backend to generate ready-to-post content. A Discord bot presents each post for one-click approval before auto-publishing to Instagram. A secondary pipeline surfaces relevant accounts and hashtags to engage with, suggesting comments and likes to grow organic reach.

**Website result line:** Automated content pipeline — from backend to Instagram feed

---

## Why This Is Worth Showing

1. **Real workflow automation, not just AI.** This isn't a chatbot or a dashboard — it's a multi-step operational pipeline connecting a backend, an LLM, a messaging platform, and a social API. Each node has a job; the whole thing runs without touching a computer.

2. **Human-in-the-loop by design.** The Discord approval gate is a deliberate architectural choice, not a limitation. Final editorial say stays with the operator before anything goes public.

3. **n8n as a differentiator.** n8n is widely used in marketing and operations automation. Fluency with it opens doors to clients well outside the finance and data world.

4. **Demonstrates product thinking.** Building an engagement recommendation layer — not just a posting scheduler — shows understanding of how social media growth actually works.

---

## Technical Architecture

### Content Generation Pipeline
- **n8n** orchestrates the full workflow end-to-end
- Pulls live surf conditions and images from the SwellScore Flask backend
- **Claude** generates captions, hashtags, and post copy from live data
- Posts queued for Discord review before publishing

### Approval Workflow
- Discord bot delivers a post preview (image + caption) to a private channel
- One-click approve/reject via Discord message buttons
- Approved posts auto-publish to Instagram via the Graph API

### Engagement Recommendations
- Keyword and hashtag matching surfaces relevant content to engage with
- Surfaces suggested accounts to like, follow, and comment on
- Goal: grow organic reach in parallel with published content

### Stack
- n8n (workflow orchestration)
- Claude API (content generation)
- SwellScore backend (live data source)
- Discord API (approval layer)
- Instagram Graph API (publishing)

---

## Positioning Value

This case study answers a different question than the finance work: *"Can you automate creative and marketing workflows, not just data pipelines?"*

The answer is yes — and the architecture (LLM + human approval gate + auto-publish) is directly reusable for any brand that needs to maintain a consistent social presence without a full-time content team.

---

## Service Opportunity

The system is built generically enough to be offered as a service. Any brand with a content backend — product photos, listings, event schedules, blog posts — can be connected to this pipeline. Initial target: small marketing teams spending hours per week on manual social posting.

---

## Gaps to Fill

- [ ] Run first full cycle: generated post → Discord approval → live Instagram post
- [ ] Refine engagement recommendation logic (keyword matching + hashtag signals)
- [ ] Capture metrics: posts per week, time saved vs. manual posting
- [ ] Document client onboarding process if offered as a service
