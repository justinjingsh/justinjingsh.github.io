# Design Sync Notes

## 2026-06-27 — First sync

- **Shape**: `package` (no Storybook; this is a Next.js site, not a component library)
- **Build method**: Manual. Thin React wrappers written by hand in `ds-src/components.jsx`, bundled via `esbuild --format=iife --global-name=PhotonDS`.
- **Font strategy**: `_ds_bundle.css` omits `@font-face` blocks (which reference self-hosted woff2 at `/fonts/…`). `styles.css` loads IBM Plex Sans + Mono from Google Fonts CDN instead. If the self-hosted fonts are needed for design-accurate previews, the `@font-face` blocks from `css/design-system.css` (lines 14–388) can be restored and fonts uploaded to `ds-bundle/fonts/`.
- **Sync anchor**: Minimal — no content hashes. A future re-sync will re-verify all 8 components.
- **Components synced**: Button, Badge, Card, IconBadge, Stat, Eyebrow, Field (+ Label/Input/Textarea), BlueprintSection.
- **Not synced**: ServiceCard, BeforeAfter, CaseStudy (page-specific compound components; add if needed for design exploration).

## Re-sync command

```bash
npx esbuild@0.21.5 ds-src/components.jsx --bundle --format=iife --global-name=PhotonDS --outfile=ds-bundle/_ds_bundle.js --define:process.env.NODE_ENV='"production"'
```

Then update component docs in `ds-bundle/components/photon/` and run `/design-sync`.
