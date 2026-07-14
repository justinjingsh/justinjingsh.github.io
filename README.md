# Lyranova — Cloud & .NET Architecture

Personal consulting site, published at [lyranova.com.au](https://lyranova.com.au).

Built with **Next.js 14** (App Router, static export) and deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # generates static site in out/
```

## Project structure

```
app/             — Next.js App Router pages and layouts
components/      — Shared Nav and Footer components
css/             — Global design system and component styles
public/          — Static assets (fonts, icons)
.github/
  workflows/
    deploy.yml   — CI/CD: build → deploy out/ to GitHub Pages
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which runs `npm run build` and publishes the `out/` directory to GitHub Pages.

**One-time repo setup:** Settings → Pages → Source → **GitHub Actions**.
