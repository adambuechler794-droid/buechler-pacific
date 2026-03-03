# SEO Improvements Design

**Date:** 2026-03-02
**Status:** Approved

## Overview

Complete the SEO pass for buechlerpacific.com. GA4 tracking and core meta tags are already in place. This plan covers the remaining gaps: structured data enrichment, OG image alt text, Lighthouse audit + fixes, and Google Search Console setup.

## Scope

### 1. Code Changes — `index.html`

**`og:image:alt`**
Add `<meta property="og:image:alt" content="Buechler Pacific — AI Systems for Finance" />` after the existing `og:image:height` tag.

**JSON-LD structured data enrichment**
Add `address` (PostalAddress schema type) and `telephone` to the existing `ProfessionalService` block:

```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "140 Uwapo Road",
  "addressLocality": "Kihei",
  "addressRegion": "HI",
  "postalCode": "96753",
  "addressCountry": "US"
},
"telephone": "+18585253076"
```

### 2. Test Updates — `src/test/seo.test.js`

Add assertions for:
- `og:image:alt` meta tag presence
- `telephone` in JSON-LD
- `PostalAddress` type in JSON-LD

### 3. Lighthouse Audit

Run against local dev server (`http://localhost:5173`):

```bash
npx lighthouse http://localhost:5173 --output=html --output-path=./lighthouse-report.html
```

Review report and fix any issues found in source — likely candidates: image optimization (headshot.jpg is 12MB), font render-blocking, CLS from layout shifts.

### 4. Google Search Console Setup (User Actions)

1. Navigate to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://buechlerpacific.com`
3. Verify via GA4 (auto, same Google account)
4. Submit sitemap: `https://buechlerpacific.com/sitemap.xml`

### 5. Rich Results Test (Post-Deploy, User Action)

Run live URL through [search.google.com/test/rich-results](https://search.google.com/test/rich-results) to confirm JSON-LD renders correctly.

## Files Modified

| File | Change |
|------|--------|
| `index.html` | Add `og:image:alt`, enrich JSON-LD with address + telephone |
| `src/test/seo.test.js` | Add tests for new fields |
| `public/headshot.jpg` | Possibly optimize (12MB → compressed) |

## Success Criteria

- All SEO tests pass
- Lighthouse performance score ≥ 90
- No structured data errors in Rich Results Test
- Search Console property verified and sitemap submitted
