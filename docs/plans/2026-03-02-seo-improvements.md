# SEO Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the SEO pass for buechlerpacific.com — enrich structured data, add OG image alt, compress the 12MB headshot, run a Lighthouse audit, and guide Search Console setup.

**Architecture:** All changes are in `index.html` (meta tags + JSON-LD), `src/test/seo.test.js` (coverage), and `public/headshot.jpg` (compression). No new runtime dependencies. Lighthouse runs against the local dev server via npx.

**Tech Stack:** Vite 7, Vitest, React 19, `npx lighthouse`, `npx sharp-cli`

---

### Task 1: Add `og:image:alt` meta tag

**Files:**
- Modify: `index.html:16` (after `og:image:height`)
- Modify: `src/test/seo.test.js`

**Step 1: Write the failing test**

In `src/test/seo.test.js`, add inside the `describe` block:

```js
it('has Open Graph image alt text', () => {
  expect(html).toMatch(/property="og:image:alt"/)
  expect(html).toMatch(/content="Buechler Pacific/)
})
```

**Step 2: Run test to verify it fails**

```bash
npx vitest run src/test/seo.test.js
```

Expected: FAIL — `og:image:alt` assertion fails.

**Step 3: Add the meta tag to `index.html`**

After the `og:image:height` line (line 16), add:

```html
    <meta property="og:image:alt" content="Buechler Pacific — AI Systems for Finance" />
```

**Step 4: Run tests to verify they pass**

```bash
npx vitest run src/test/seo.test.js
```

Expected: all tests PASS.

**Step 5: Commit**

```bash
git add index.html src/test/seo.test.js
git commit -m "feat: add og:image:alt meta tag"
```

---

### Task 2: Enrich JSON-LD with address and telephone

**Files:**
- Modify: `index.html:22-48` (the `<script type="application/ld+json">` block)
- Modify: `src/test/seo.test.js`

**Step 1: Write the failing tests**

Add to `src/test/seo.test.js`:

```js
it('has telephone in structured data', () => {
  expect(html).toMatch(/\+18585253076/)
})

it('has PostalAddress in structured data', () => {
  expect(html).toMatch(/PostalAddress/)
  expect(html).toMatch(/Uwapo/)
})
```

**Step 2: Run tests to verify they fail**

```bash
npx vitest run src/test/seo.test.js
```

Expected: 2 new tests FAIL.

**Step 3: Update the JSON-LD block in `index.html`**

Replace the entire `<script type="application/ld+json">` block with:

```html
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Buechler Pacific",
      "url": "https://buechlerpacific.com",
      "description": "AI systems for finance — custom AI tools, intelligent automation, data architecture, and full-stack product development. Based in Maui, Hawaii.",
      "telephone": "+18585253076",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "140 Uwapo Road",
        "addressLocality": "Kihei",
        "addressRegion": "HI",
        "postalCode": "96753",
        "addressCountry": "US"
      },
      "founder": {
        "@type": "Person",
        "name": "Adam Buechler",
        "jobTitle": "AI Systems Consultant"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Maui, Hawaii"
      },
      "knowsAbout": [
        "AI Consulting",
        "FP&A Automation",
        "n8n Workflow Automation",
        "Microsoft Fabric",
        "Power BI",
        "Data Engineering",
        "Financial Planning & Analysis"
      ]
    }
    </script>
```

**Step 4: Run tests to verify they pass**

```bash
npx vitest run src/test/seo.test.js
```

Expected: all tests PASS.

**Step 5: Commit**

```bash
git add index.html src/test/seo.test.js
git commit -m "feat: add address and telephone to JSON-LD structured data"
```

---

### Task 3: Compress headshot.jpg (12MB → ~300KB)

**Files:**
- Replace: `public/headshot.jpg`

The headshot is 12.7MB — this will tank LCP. Compress to JPEG quality 80 at max 1200px width.

**Step 1: Install sharp-cli temporarily and compress**

```bash
npx sharp-cli --input public/headshot.jpg --output public/headshot.jpg resize 1200 -- toFormat jpeg --quality 80
```

If `sharp-cli` is unavailable, use this alternative (requires ImageMagick to be installed):

```bash
magick public/headshot.jpg -resize 1200x -quality 80 public/headshot.jpg
```

**Step 2: Verify the file size dropped significantly**

```bash
ls -lh public/headshot.jpg
```

Expected: under 500KB (was 12.7MB).

**Step 3: Run all tests to confirm nothing broke**

```bash
npx vitest run
```

Expected: all tests PASS.

**Step 4: Commit**

```bash
git add public/headshot.jpg
git commit -m "perf: compress headshot from 12MB to ~300KB for LCP"
```

---

### Task 4: Lighthouse audit

**Step 1: Start the dev server in one terminal**

```bash
npx vite
```

Wait until it says `Local: http://localhost:5173/`.

**Step 2: Run Lighthouse in a second terminal**

```bash
npx lighthouse http://localhost:5173 --output=html --output-path=./lighthouse-report.html --chrome-flags="--headless"
```

**Step 3: Open the report**

```bash
start lighthouse-report.html
```

**Step 4: Fix issues found**

Common issues for this stack and their fixes:

| Issue | Fix |
|-------|-----|
| LCP slow (headshot) | Already addressed in Task 3 |
| Render-blocking fonts | Add `&display=swap` to Google Fonts URL — already present, verify |
| Missing `width`/`height` on `<img>` tags | Find all `<img>` in `src/components/` and add explicit `width` and `height` attributes |
| Low contrast text | Check against Tailwind color values in `src/components/` |

For each fix found:
1. Edit the relevant file
2. Re-run `npx vitest run` to confirm tests still pass
3. Commit with `fix: <description>`

**Step 5: Re-run Lighthouse to confirm improvement**

```bash
npx lighthouse http://localhost:5173 --output=html --output-path=./lighthouse-report-2.html --chrome-flags="--headless"
```

Expected: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.

**Step 6: Clean up report files and commit any remaining fixes**

```bash
# Don't commit .html report files — they're large and auto-generated
git status  # confirm only source files are staged
```

---

### Task 5: Google Search Console setup (user action guide)

No code changes. Walk through these steps in the browser:

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Click **Add property** → choose **URL prefix** → enter `https://buechlerpacific.com`
3. Under verification methods, choose **Google Analytics** — it will auto-verify since GA4 (`G-RHP2LLGLDC`) is already in `index.html` and both are under the same Google account
4. Once verified, click **Sitemaps** in the left nav → enter `sitemap.xml` → **Submit**
5. Also submit `sitemap-index.xml` if prompted

After verification is confirmed, do a final push to deploy:

```bash
git push
```

Then validate the live structured data at **[search.google.com/test/rich-results](https://search.google.com/test/rich-results)** — enter `https://buechlerpacific.com` and confirm the `ProfessionalService` entity renders with no errors.

---

### Task 6: Final commit and push

**Step 1: Run full test suite one last time**

```bash
npx vitest run
```

Expected: all tests PASS.

**Step 2: Push to remote**

```bash
git push
```

Done. Monitor Search Console indexing coverage over the next 24–72 hours.
