# Case Study Pages Design

**Date:** 2026-03-02
**Status:** Approved

## Goal

Add 5 individually-routed, indexed case study pages to the site. Currently all content lives on a single page — Google can only index one URL. Adding `/case-studies/:slug` pages multiplies indexed content and enables long-tail keyword targeting (e.g., "Power BI NetSuite construction analytics", "Microsoft Fabric FP&A automation").

## Architecture

**Routing:** Add `react-router-dom`. `App.jsx` becomes a `BrowserRouter` with two routes:
- `/` → `HomePage` (existing SPA, extracted from current `App`)
- `/case-studies/:slug` → `CaseStudyPage`

The existing `public/_redirects` (`/* /index.html 200`) already handles client-side routing on Cloudflare Pages — no changes needed there.

**Data:** New file `src/data/caseStudies.js` — single source of truth for all case study content. Each entry has: `slug`, `category`, `title`, `metaTitle`, `metaDescription`, `summary`, `challenge`, `solution`, `results[]`, `tech[]`, `resultLine`.

**SEO per page:** `CaseStudyPage` uses a `useEffect` to update `document.title`, `meta[name=description]`, `meta[property=og:title]`, `meta[property=og:description]`, `meta[property=og:url]`, and `link[rel=canonical]` on mount. On unmount, restores homepage values.

**`Projects.jsx`:** Each project card wraps in a `<Link to="/case-studies/:slug">` — no visual design changes.

**`sitemap.xml`:** 5 new `<url>` entries added with `priority: 0.8`, `changefreq: monthly`.

**Tests:** New test verifying all 5 slugs are present in `sitemap.xml`.

## Files

| Action | File |
|--------|------|
| Modify | `src/App.jsx` |
| Create | `src/data/caseStudies.js` |
| Create | `src/components/CaseStudyPage.jsx` |
| Modify | `src/components/Projects.jsx` |
| Modify | `public/sitemap.xml` |
| Modify | `src/test/seo.test.js` |

## CaseStudyPage Layout

```
[← Back to Work]

[Category badge]
[H1: Title]
[Result callout box — the key metric]

[Challenge]        — H2 + paragraph
[Solution]         — H2 + paragraph
[Results]          — H2 + bullet list
[Tech Stack]       — pill badges

[CTA: "Ready to build something like this?" → links to /#contact]
```

Styled to match the existing dark design system (apple-dark background, DM Sans headings).

## Case Study Structured Data

### 1. SwellScore

```js
{
  slug: 'swellscore',
  category: 'AI / Product',
  title: 'SwellScore — Real-Time Surf Forecast System',
  metaTitle: 'SwellScore: Full-Stack Surf Forecast App | Buechler Pacific',
  metaDescription: 'How Buechler Pacific built a full-stack surf forecast application integrating NOAA buoy data, ERDDAP wave models, and weather APIs — live in production on Maui.',
  summary: 'Full-stack web application delivering real-time surf forecasts for Maui. Built end-to-end: React + TypeScript frontend, Flask API backend, multi-source data pipeline integrating NOAA buoys, PacIOOS ERDDAP wave models, and weather APIs.',
  challenge: 'Maui surfers had no reliable, break-specific forecast tool. Existing services used generic regional models that missed the nuance of individual breaks. Building one required integrating multiple data sources with different APIs, formats, and update cadences — and making it fast enough for a mobile user checking conditions at the beach.',
  solution: 'Built a complete product from scratch: a React + TypeScript frontend optimized for mobile, a Flask API backend aggregating data from PacIOOS ERDDAP wave models, NOAA buoy readings, WRF wind forecasts, and tide data — with graceful fallbacks when primary sources go offline. Covers 10 Maui surf breaks with ~5 day forecast windows.',
  results: [
    'Full-stack product live in production',
    'Real-time forecasts for 10 Maui surf breaks',
    'Multi-source data pipeline with graceful fallbacks',
    'Mobile-optimized for on-beach use',
  ],
  tech: ['React', 'TypeScript', 'Python', 'Flask', 'NOAA API', 'PacIOOS ERDDAP', 'Vite'],
  resultLine: 'Full-stack product — live in production',
}
```

### 2. AI Forecast Assistant

```js
{
  slug: 'ai-forecast-assistant',
  category: 'AI / LLM',
  title: 'AI-Powered Forecast Analysis Assistant',
  metaTitle: 'AI Forecast Analysis Assistant for Finance | Buechler Pacific',
  metaDescription: 'Custom GPT trained on company forecast models enabling CFOs and finance leaders to query budget vs. forecast in plain English. Hours of analyst work reduced to seconds.',
  summary: 'Custom GPT trained on the company\'s forecast models, enabling natural language queries about budget vs. forecast, version comparisons, and variance drivers. Business leaders ask questions in plain English and get context-aware financial analysis in seconds.',
  challenge: 'The finance team maintained multiple forecast versions and scenarios, but business users struggled to extract insights without analyst help. Every question — "Why did Q3 EBITDA forecast change from v2 to v3?" — required an analyst to pull data, build a comparison, and write an explanation. Analysis requests created a bottleneck.',
  solution: 'Built a custom GPT trained on the company\'s forecast models. The system handles natural language queries about budget vs. forecast comparisons, version-to-version variance analysis, and scenario comparisons — giving business users direct access to financial intelligence without requiring an analyst intermediary.',
  results: [
    'Analyst time spent answering forecast questions reduced ~70%',
    'Business leaders get answers in seconds, not hours',
    'Increased forecast adoption and understanding across the organization',
    'Executives query financial data in plain English',
  ],
  tech: ['Custom GPT', 'OpenAI API', 'Prompt Engineering', 'Microsoft Fabric'],
  resultLine: 'Hours of analyst work reduced to seconds',
}
```

### 3. Cash Flow Automation

```js
{
  slug: 'cash-flow-automation',
  category: 'AI / Automation',
  title: 'Cash Flow Statement Automation',
  metaTitle: 'Cash Flow Statement Automation | Buechler Pacific',
  metaDescription: 'Automated the most dreaded deliverable in finance. Three senior finance staff working a full day became one person under an hour — built on Microsoft Fabric.',
  summary: 'Automated the most dreaded deliverable in finance. Built a Power Pivot pulling directly from the Fabric semantic model, replacing a process that required three senior finance people working a full day. Monthly human verification keeps the process accountable.',
  challenge: 'The Cash Flow Statement required the CFO, Controller, and FP&A Director to work together over a full day every month — often staying late. The process was error-prone, time-consuming, and consumed the three most senior finance staff at exactly the wrong time: close.',
  solution: 'Built a Power Pivot pulling directly from the Microsoft Fabric semantic model that shows the change in Balance Sheet accounts over any given period. Clean report cells link to pivot output. A monthly human review step catches new accounts and verifies the output still makes sense — responsible automation, not blind automation.',
  results: [
    'Three people, full day, staying late → one person, under an hour',
    '90% automated with human verification step',
    'Full 2025 Cash Flow Statement completed in under an hour',
    'Maintainable by any competent finance person — not a black box',
    'Freed the CFO and FP&A Director to do actual analysis before close',
  ],
  tech: ['Power Pivot', 'Microsoft Fabric', 'Excel', 'Semantic Models'],
  resultLine: 'Three people, full day → one person, under an hour',
}
```

### 4. Construction Analytics

```js
{
  slug: 'construction-analytics',
  category: 'Data Intelligence',
  title: 'Multi-Island Construction Project Analytics',
  metaTitle: 'Construction Project Analytics Dashboards | Buechler Pacific',
  metaDescription: 'Real-time Power BI dashboards integrating NetSuite and HCSS for a Hawaii construction company. The president became an internal champion — PMs use it daily.',
  summary: 'Integrated NetSuite financials with HCSS project budgets into real-time Power BI dashboards for a construction company managing 10+ concurrent projects across the Hawaiian islands. The company president used it once and scheduled training for all project managers himself.',
  challenge: 'A construction company managing 10+ concurrent projects across the Hawaiian islands had no systematic way to track project-level profitability or identify cost overruns until month-end close. Financial data lived in NetSuite, project budgets in HCSS — no integration, no IT department, and ad-hoc analysis took hours to days.',
  solution: 'Built Power BI dashboards integrating NetSuite financials with HCSS project budgets, showing real-time project profitability, budget vs. actual variance, transaction-level drill-through, and early warning indicators for budget overruns — all without an IT department.',
  results: [
    'President became internal champion and scheduled PM training himself',
    'PMs use the dashboard daily',
    'Real-time visibility into project profitability across all islands',
    'Early warning system for budget overruns enables intervention before problems compound',
    'PM team self-services their own analysis instead of waiting for finance',
  ],
  tech: ['Power BI', 'NetSuite', 'HCSS', 'DAX', 'Power Query'],
  resultLine: 'President became internal champion — PMs use it daily',
}
```

### 5. Enterprise Data Platform

```js
{
  slug: 'enterprise-data-platform',
  category: 'Data / AI Infrastructure',
  title: 'AI-Ready Enterprise Data Platform',
  metaTitle: 'AI-Ready Enterprise Data Platform | Buechler Pacific',
  metaDescription: 'Microsoft Fabric data lakehouse built from scratch for a mid-market company with no IT department. Eliminated data silos. Ad-hoc analysis went from days to minutes.',
  summary: 'Designed and built a Microsoft Fabric data lakehouse from scratch — no IT department, no existing infrastructure. Automated pipelines pull from NetSuite, HCSS, and other sources into a unified analytical layer. The foundation that makes every AI tool, dashboard, and automation possible.',
  challenge: 'Data lived in silos: NetSuite for financials, HCSS for project management, Excel files for planning, PDFs for contracts. No single source of truth. No IT department to build infrastructure. Every analysis required manual data gathering, cleaning, and reconciliation — repeated from scratch for every request.',
  solution: 'Designed and implemented a Microsoft Fabric data lakehouse architecture: automated pipelines pulling from NetSuite, HCSS, and other sources; a structured data warehouse with semantic models; a consistent reporting foundation that other developers can build on. The architecture proved extensible — an external Power BI developer has since added new connections independently.',
  results: [
    'Eliminated manual data gathering for monthly reporting',
    'Single source of truth for company data',
    'Ad-hoc analysis: days → minutes',
    'Architecture extensible — external developers building on it independently',
    'Foundation for all AI tools, dashboards, and automations',
  ],
  tech: ['Microsoft Fabric', 'Data Factory', 'Lakehouse', 'SQL', 'NetSuite API', 'Power BI'],
  resultLine: 'Ad-hoc analysis: days → minutes',
}
```

## Sitemap Additions

```xml
<url>
  <loc>https://buechlerpacific.com/case-studies/swellscore</loc>
  <lastmod>2026-03-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://buechlerpacific.com/case-studies/ai-forecast-assistant</loc>
  <lastmod>2026-03-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://buechlerpacific.com/case-studies/cash-flow-automation</loc>
  <lastmod>2026-03-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://buechlerpacific.com/case-studies/construction-analytics</loc>
  <lastmod>2026-03-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://buechlerpacific.com/case-studies/enterprise-data-platform</loc>
  <lastmod>2026-03-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Success Criteria

- All 5 case study URLs return rendered content (not 404)
- Each page has unique `<title>`, `meta[description]`, `og:title`, `og:url`, and `canonical`
- `sitemap.xml` contains all 5 new URLs
- `Projects.jsx` cards link to their respective detail pages
- All existing SEO tests still pass
- New sitemap test passes
