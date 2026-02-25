# Buechler Pacific

AI systems for finance. Based in Maui, Hawaii.

**Live site:** [buechlerpacific.com](https://buechlerpacific.com)

---

## What This Is

Marketing website for Buechler Pacific LLC — a consultancy that builds AI-powered financial intelligence systems. The site showcases case studies, services, and positioning for mid-market companies ready to move beyond spreadsheets.

For brand positioning, case study source material, and design documentation, see [`docs/`](docs/).

## Tech Stack

- **React 19** + **Vite 7** — fast dev, optimized builds
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **Lucide React** — SVG icon library
- **Vitest** + **Testing Library** — component and integration tests
- **Cloudflare Pages** — deployment target (auto-deploys from `main`)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm test           # Run test suite
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx   # Sticky nav, mobile hamburger, frosted glass on scroll
│   ├── Hero.jsx          # Full-screen hero — "AI Systems for Finance."
│   ├── Services.jsx      # 4 service cards (AI lead, FP&A, Power BI, Data Arch)
│   ├── Impact.jsx        # 3 animated stat counters
│   ├── HowIWork.jsx      # 4-step process (Understand → Build → Transfer → Iterate)
│   ├── Projects.jsx      # 5 case study cards
│   ├── About.jsx         # Bio, credential tags, LinkedIn
│   ├── Contact.jsx       # Contact form (Formspree) + info sidebar
│   ├── Footer.jsx        # Nav links, social icons, copyright
│   └── useInView.js      # Intersection Observer hook for scroll-reveal
├── App.jsx               # Root — assembles all sections
├── main.jsx              # Entry point
└── index.css             # Tailwind config, custom properties, animations
docs/
├── case-studies/          # Detailed writeups for each case study
├── positioning.md         # Target audience, value props, differentiators
└── design.md              # UI theme, typography, color system, components
```

## Updating Content

All content is defined inline within each component:

| Content | File | What to edit |
|---------|------|-------------|
| Case studies | `Projects.jsx` | `projects` array |
| Services | `Services.jsx` | `services` array |
| Impact stats | `Impact.jsx` | `stats` array |
| About / bio | `About.jsx` | Text and credential tags |
| Contact info | `Contact.jsx` | Email, phone, Formspree endpoint |
| SEO | `index.html` | `<title>`, meta description, OG tags |

## Contact Form

The form POSTs to [Formspree](https://formspree.io) (`xbdapwzb`). To change the endpoint, update the `fetch` URL in `Contact.jsx` `handleSubmit`.

## Images

Placeholder areas exist for:

- **About headshot** — 4:5 aspect ratio (`About.jsx`)
- **Hero background** — currently CSS radial gradient

## Deployment

The site deploys to Cloudflare Pages. Pushes to `main` trigger automatic builds.

Manual deploy:
```bash
npm run build
npx wrangler pages deploy dist
```

## Documentation

See [`docs/`](docs/) for:
- **[Case Studies](docs/case-studies/)** — source material for all case studies, including those not currently on the site
- **[Positioning](docs/positioning.md)** — target audience, value propositions, differentiators, methodology
- **[Design](docs/design.md)** — UI theme, color palette, typography, component patterns
