# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a GitHub Pages personal site branded as **Lyranova — Cloud & .NET Architecture**, built with **Next.js 14** (App Router, static export), served on the custom domain `lyranova.com.au` (see `public/CNAME`).

## Repository structure

```
app/
  layout.js           — Root layout: imports global CSS, renders <Nav> + {children} + <Footer>
  page.js             — Home page
  services/page.js    — Services page
  work/page.js        — Case Studies page
  about/page.js       — About page
  contact/
    page.js           — Contact page (server; exports metadata)
    ContactPage.js    — 'use client' component with form state and interactive elements

components/
  Nav.js              — 'use client' sticky nav with scroll-aware transparent→solid transition
  Footer.js           — Server component footer

css/
  design-system.css   — design tokens, typography, layout helpers (.nb-container, .nb-eyebrow, etc.)
  components.css      — component styles: buttons, badges, cards, nav, footer, responsive grids

public/
  fonts/              — self-hosted IBM Plex Mono (400/500/600) and IBM Plex Sans (700) as woff2
  icons/
    icon-6eb1084d.svg — Lyranova logo mark (dark backgrounds / transparent nav)
    icon-a2eee9cc.svg — Lyranova logo mark (light backgrounds / solid nav)

.github/workflows/deploy.yml — GitHub Actions: npm ci → next build → deploy out/ to GitHub Pages
```

The legacy `*.html` files at the root are the original plain-HTML versions and can be deleted.

## How the site works

- **Framework** — Next.js 14 App Router with `output: 'export'` (generates static HTML in `out/`).
- **Icons** — `lucide-react` npm package; import named components e.g. `import { ArrowRight } from 'lucide-react'`.
- **Navigation** — `components/Nav.js` is a client component; uses `useEffect` for the scroll listener and `usePathname()` to highlight the active link.
- **Contact form** — `app/contact/ContactPage.js` is a client component; uses `useState` for the success-state toggle.
- **CSS** — global CSS files in `css/` imported in `app/layout.js`. Font paths use absolute `/fonts/...` URLs served from `public/`.

## Editing content

- **Copy / structure** — edit the relevant `app/*/page.js` file.
- **Styles / design tokens** — edit `css/design-system.css` for tokens, `css/components.css` for component styles.
- **Nav / footer** — edit `components/Nav.js` or `components/Footer.js` once; changes apply to all pages.

## Development

```bash
npm run dev    # start dev server at localhost:3000
npm run build  # static export → out/
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm run build` and deploys the `out/` directory to GitHub Pages via the Actions Pages deployment API.

**One-time setup required:** In the repo's Settings → Pages, set the Source to **"GitHub Actions"** (not "Deploy from a branch").
