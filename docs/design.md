# Design System

## Overview

Apple-inspired minimalist aesthetic. Clean typography, generous whitespace, subtle shadows, scroll-reveal animations. The design alternates between white and dark sections to create visual rhythm.

---

## Color Palette

Defined as CSS custom properties in `src/index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-apple-bg` | `#f5f5f7` | Light section backgrounds |
| `--color-apple-text` | `#1d1d1f` | Primary text, headings |
| `--color-apple-secondary` | `#86868b` | Secondary text, descriptions |
| `--color-apple-blue` | `#2997ff` | Links, CTAs, accent color |
| `--color-apple-dark` | `#1d1d1f` | Dark section backgrounds |
| `--color-apple-dark-secondary` | `#424245` | Dark section secondary text |
| `--color-apple-card-dark` | `#2a2a2d` | Dark section card backgrounds |

### Section Color Blocking

| Section | Background | Text |
|---------|-----------|------|
| Hero | White (radial gradient) | Dark |
| Solutions | White | Dark |
| Impact | Dark (`apple-dark`) | White |
| How We Work | Light (`apple-bg`) | Dark |
| Case Studies | Dark (`apple-dark`) | White |
| About | White | Dark |
| Contact | Dark (`apple-dark`) | White |
| Footer | Dark (`apple-dark`) | White |

---

## Typography

### Fonts (Google Fonts)

| Font | Role | Weights |
|------|------|---------|
| **DM Sans** | Display / headings | 400, 500, 600, 700, 800 |
| **Outfit** | Body / UI text | 300, 400, 500, 600 |

### Scale

| Element | Class | Size |
|---------|-------|------|
| Hero headline | `text-[clamp(3rem,11vw,8rem)]` | 48px → 128px (fluid) |
| Section heading | `text-4xl sm:text-5xl lg:text-6xl` | 36px → 60px |
| Card title | `text-2xl sm:text-3xl` | 24px → 30px |
| Body text | `text-[15px]` | 15px |
| Overline labels | `text-[13px] tracking-[0.2em] uppercase` | 13px, wide tracking |
| Stat counters | `text-6xl sm:text-7xl lg:text-8xl` | 60px → 96px |
| Feature tags | `text-xs` | 12px |

---

## Animations

### Scroll Reveal

All sections use an Intersection Observer hook (`useInView.js`) to trigger entrance animations:

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

Staggered delays via utility classes:
- `.reveal-delay-1` → 0.1s
- `.reveal-delay-2` → 0.2s
- `.reveal-delay-3` → 0.3s
- `.reveal-delay-4` → 0.4s
- `.reveal-delay-5` → 0.5s

### Animated Counters (Impact Section)

`AnimatedCounter` component uses `requestAnimationFrame` for smooth count-up animations with ease-out cubic easing. Triggers once when the section enters the viewport.

### Card Hover

```css
.card-light:hover, .card-dark:hover {
  transform: translateY(-2px);
  box-shadow: /* elevated shadow */;
}
```

### Navigation

Transparent on page load, transitions to frosted glass (`bg-white/80 backdrop-blur`) after scrolling past 50px. Mobile menu is a full-screen overlay.

---

## Component Patterns

### Section Layout

Every section follows a consistent pattern:

```jsx
<section id="anchor" className="relative py-28 sm:py-36 bg-{color}" ref={ref}>
  <div className="max-w-7xl mx-auto px-6">
    {/* Overline + Heading */}
    <div className={`reveal ${inView ? 'in-view' : ''}`}>
      <p className="text-[13px] tracking-[0.2em] uppercase mb-4">Overline</p>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
        Heading.
      </h2>
    </div>
    {/* Content */}
  </div>
</section>
```

### Card Variants

| Variant | Class | Usage |
|---------|-------|-------|
| Light card | `card-light` | Solutions section (white bg) |
| Dark card | `card-dark` | Case studies section (dark bg) |

### Credential / Feature Tags

```jsx
<span className="px-3 py-1.5 text-xs bg-apple-bg rounded-full">Tag</span>
```

### CTA Buttons

| Style | Usage | Pattern |
|-------|-------|---------|
| Primary (dark pill) | Hero, nav | `bg-apple-text text-white px-8 py-3.5 rounded-full` |
| Text link (blue) | Secondary actions | `text-apple-blue font-semibold hover:underline` |
| Icon circle | Footer social | `w-10 h-10 rounded-full border border-white/10` |

---

## Responsive Breakpoints

Tailwind defaults:
- `sm:` — 640px
- `md:` — 768px
- `lg:` — 1024px

Key responsive behaviors:
- Hero headline scales fluidly via `clamp()`
- Service cards: 1 column → 2 columns at `md:` (AI card spans 2)
- Impact stats: stacked → 3 columns with dividers at `md:`
- Process steps: stacked → 4 columns at `md:`
- Case study cards: always full-width, stacked
- About: stacked → 2 columns at `lg:`
- Navigation: hamburger menu below `md:`, horizontal above

---

## Icons

Using [Lucide React](https://lucide.dev/) with a consistent size of 18–22px:

| Icon | Component | Usage |
|------|-----------|-------|
| `Cpu` | Services | AI & Intelligent Automation |
| `BarChart3` | Services | FP&A |
| `Brain` | Services | Power BI & Analytics |
| `Database` | Services | Data Architecture |
| `ArrowRight` | Hero CTA | Button arrow |
| `Linkedin` | About, Footer | Social link |
| `Mail` | Footer | Email link |
| `Github` | Footer | GitHub link |
| `Menu` / `X` | Navigation | Mobile toggle |
