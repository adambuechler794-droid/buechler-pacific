# FP&A Platform Demo Page — Design Document

## Goal

Integrate the Alpha FP&A Platform demo into the Buechler Pacific consulting website as a dedicated `/demo` route. Rebrand "Alpha Inc." to "Pacific Builders," keep the dark interactive canvas with the site's navigation wrapper, and maintain the live Claude-powered Forecast Agent chat.

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Page placement | Dedicated `/demo` route | Demo is too complex to embed inline; deserves full-screen |
| Rebranding depth | Light rebrand — "Pacific Builders" | Specificity (8 divisions, 172 DAX measures) is the demo's strength |
| AI chat panel | Live, Claude-powered | Killer differentiator for prospects; minimal token cost |
| Theme approach | Hybrid — site nav over dark demo canvas | Dark canvas makes orbital visualization pop; nav ties it to the site |

## Architecture

### Routing

Add `react-router-dom`. Two routes:
- `/` — existing single-page site (Navigation, Hero, Services, etc.)
- `/demo` — FP&A Platform demo page

### File Structure

```
src/
├── components/           # existing site components (unchanged)
├── demo/
│   ├── DemoPage.jsx      # wrapper: site nav + dark canvas + view toggle
│   ├── components/
│   │   ├── TopBar.jsx          # view toggle (Process Map / Ecosystem)
│   │   ├── OrbitalMap.jsx      # process map orbital visualization
│   │   ├── EcosystemMap.jsx    # platform ecosystem visualization
│   │   ├── OrbitalNode.jsx     # individual phase node
│   │   ├── AgentNode.jsx       # AI agent node (5 agents)
│   │   ├── CenterHub.jsx       # central hub (rebranded)
│   │   ├── OrbitalRings.jsx    # SVG rings + labels
│   │   ├── DetailDrawer.jsx    # modal for phase details
│   │   ├── ChatPanel.jsx       # Forecast Agent chatbot
│   │   ├── AutomationBadge.jsx
│   │   ├── CadenceBadge.jsx
│   │   ├── DifferentiatorBar.jsx
│   │   ├── ReadinessBar.jsx
│   │   ├── EcosystemHub.jsx
│   │   ├── EcosystemNode.jsx
│   │   └── Legend.jsx
│   ├── data/
│   │   ├── phases.js           # 8 FP&A phases (rebranded)
│   │   ├── ecosystem.js        # source systems, modules, agents
│   │   └── constants.js        # automation levels, cadences
│   └── mockups/
│       ├── TeamsNotification.jsx
│       ├── DataCollectionMockups.jsx
│       ├── ValidationSummary.jsx
│       ├── SubmissionTracker.jsx
│       ├── AnalysisMockups.jsx
│       ├── ReportingMockups.jsx
│       └── ExecutiveReviewMockup.jsx
├── App.jsx               # adds BrowserRouter with / and /demo
├── main.jsx              # unchanged
└── index.css             # adds scoped .demo-canvas theme variables
```

### Theme Integration (Hybrid)

The demo page uses a scoped dark theme inside `.demo-canvas`:

```css
.demo-canvas {
  --color-navy: #1C3A5E;
  --color-steel: #1A6FA0;
  --color-light-blue: #EBF5FB;
  --color-amber-warm: var(--color-coral-400);  /* remap to coral */
  --color-green-muted: #2E7D5B;
  --color-dark-bg: #0d1117;
  --color-dark-card: #1a2332;
  --color-dark-surface: #141c28;
}
```

Key theme changes from original:
- `amber-warm` accent color remapped to `coral-400` (#FF6B6B) throughout
- Chat panel glow effect uses coral instead of amber
- Automation badges keep their semantic colors (green for "Outside the Loop")

The site Navigation component renders on top with its existing transparent-to-white scroll behavior. A "Back to Home" link is added to the nav when on `/demo`.

### Backend (Express + Claude Chat)

Add `server.js` at project root:

```
server.js
├── GET  /*           → serves Vite build (dist/)
├── POST /api/chat    → proxies to Claude Sonnet via Anthropic SDK
```

System prompt updates:
- "Alpha Inc." → "Pacific Builders"
- Position Buechler Pacific as the platform builder
- Adjust starter prompts to be prospect-facing

Dev mode: Vite dev server proxies `/api` to `localhost:3001`.

### New Dependencies

**Production:**
- `react-router-dom` — client-side routing
- `framer-motion` — animations (orbital map, drawers, transitions)
- `react-zoom-pan-pinch` — pan/zoom on orbital visualization
- `react-markdown` — render Claude chat responses
- `express` — API server
- `cors` — CORS middleware
- `@anthropic-ai/sdk` — Claude API client

### Hero CTA

Add a prominent "See the Platform" button in the Hero section alongside existing CTAs, styled distinctively (coral gradient or outline variant with an icon) to draw attention to the demo as the flagship showcase.

### Navigation Update

Add "Platform Demo" to the nav links array, pointing to `/demo`. On the demo page, show a "Back to Home" link that navigates to `/`.

## Content Rebranding Summary

| Original | Replacement |
|----------|-------------|
| Alpha Inc. | Pacific Builders |
| Alpha FP&A Platform | FP&A Platform (generic) |
| Alpha_Storage lakehouse | PB_Storage |
| References to "Alpha" in system prompt | Pacific Builders / Buechler Pacific context |

Division names (Buechler & Buechler, Grace Pacific, etc.) remain — they're realistic and make the demo compelling.

## Out of Scope (for this build)

- Custom domain / deployment config
- Authentication or gating on the demo
- Analytics or tracking
- Mobile optimization of the orbital map (existing zoom/pan works)
- Modifying the demo's core functionality or adding new phases
