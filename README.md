# Buechler Pacific LLC — Website

Professional consulting website for Buechler Pacific LLC, a financial intelligence systems consultancy based in Maui, Hawaii.

## Tech Stack

- **React** (Vite) — fast dev server and optimized builds
- **Tailwind CSS v4** — utility-first styling
- **Lucide React** — clean SVG icons
- **Vercel-ready** — zero-config deploy

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Deploy to Vercel

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to Vercel for automatic deployments on push.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx   # Sticky nav with mobile hamburger
│   ├── Hero.jsx          # Full-screen hero with CTA
│   ├── Services.jsx      # Service offering cards
│   ├── HowIWork.jsx      # Approach/principles section
│   ├── Projects.jsx      # Case studies grid
│   ├── About.jsx         # Bio and background
│   ├── Contact.jsx       # Contact form + info sidebar
│   ├── Footer.jsx        # Footer with social links
│   └── useInView.js      # Intersection Observer hook for scroll animations
├── App.jsx               # Root component
├── main.jsx              # Entry point
└── index.css             # Tailwind imports + custom theme
```

## Updating Content

All content is defined inline within each component. To update:

- **Services** — edit the `services` array in `Services.jsx`
- **Case studies** — edit the `projects` array in `Projects.jsx`
- **About/bio** — edit text in `About.jsx`
- **Contact info** — edit values in `Contact.jsx`

## Contact Form

The form currently POSTs to `/api/contact`. To connect it to an n8n webhook:

1. Create an n8n webhook node
2. Update the `fetch` URL in `Contact.jsx` `handleSubmit` to your webhook URL

## Images

Placeholder areas are included for:

- **Hero background** — currently a CSS gradient; replace with a Maui ocean/sailing photo
- **Project screenshots** — placeholder boxes in the Projects section
- **Headshot** — placeholder in the About section

Recommended image dimensions:
- Hero: 1920×1080 (or use as CSS background)
- Project screenshots: 800×450
- Headshot: 600×750 (4:5 aspect ratio)
