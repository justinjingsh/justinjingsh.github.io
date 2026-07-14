# Photon Design System — Conventions for Claude Design

Photon is the brand for **justinjingsh.github.io** — an enterprise AWS consulting boutique. The aesthetic is engineering-grade, neutral, and premium: think Bloomberg Terminal meets Vercel dashboard.

## Setup

No provider or root wrapper required. Link `styles.css` and the bundle is ready. Import components from `window.PhotonDS`:

```jsx
const { Button, Card, Badge, Eyebrow, Stat, IconBadge, Field, Input, Textarea, BlueprintSection, Container } = window.PhotonDS;
```

## Styling idiom

**CSS custom properties (`var(--*)`) + CSS class modifiers (`nb-*`).** There are no Tailwind utilities, no theme prop system. Layout glue (padding, gap, flex, grid) uses inline `style` with `var(--space-*)` or `var(--section-y)` tokens. Do not invent class names that don't appear in `_ds_bundle.css`.

### Colour tokens (use these, not raw hex)

| Token | Value | Use for |
|---|---|---|
| `--navy-900` / `--navy-950` | `#0A1A2A` / `#06121E` | dark backgrounds, primary button |
| `--accent-500` | `#14AEE0` | electric azure CTA colour |
| `--text-strong` | `var(--navy-900)` | headings on light |
| `--text-body` | `var(--gray-700)` | body copy |
| `--text-muted` | `var(--gray-500)` | secondary labels |
| `--text-on-inverse` | `rgba(255,255,255,0.94)` | all text on dark blueprint bg |
| `--text-on-inverse-muted` | `rgba(213,226,238,0.66)` | secondary text on dark bg |
| `--bg-page` | `var(--gray-25)` | page background |
| `--surface-card` | `var(--gray-0)` | card white |
| `--surface-inverse` | `var(--navy-950)` | dark section background |
| `--border` | `var(--gray-200)` | standard border |
| `--accent` | `var(--accent-500)` | accent fill |
| `--shadow-sm` | `0 2px 8px …` | card resting shadow |
| `--shadow-accent` | `0 8px 24px …` | accent button glow |

### Spacing tokens

`--space-1` (4px) through `--space-12` (128px). Use these for gap, padding, and margin. `--section-y` for top/bottom padding on page sections, `--gutter` for horizontal container padding.

### Typography

IBM Plex Sans for body and headings (`var(--font-sans)`). IBM Plex Mono for labels, badges, eyebrows, and technical data (`var(--font-mono)`). Weight scale: `--weight-regular` (400), `--weight-medium` (500), `--weight-semibold` (600), `--weight-bold` (700).

Heading sizes: `--text-h1-size` (40px) → `--text-h4-size` (20px). Hero text: `.nb-display-1` (fluid 48→84px) and `.nb-display-2` (fluid 38→56px).

### Component class vocabulary (for layout glue)

| Class | Use |
|---|---|
| `.nb-container` | centred content column (max 1200px) |
| `.nb-container--wide` | wide column (max 1320px) |
| `.nb-grid-2/3/4` | responsive CSS grid |
| `.nb-eyebrow` | mono section label with left rule |
| `.nb-display-1` | largest hero heading |
| `.nb-blueprint` | dark navy grid background |
| `.nb-blueprint--light` | light grey grid background |

## Idiomatic layout example

```jsx
const { Eyebrow, Card, Button, Stat, Container, BlueprintSection } = window.PhotonDS;

function ServicesPreview() {
  return (
    <>
      {/* Dark hero */}
      <BlueprintSection style={{ padding: 'var(--section-y) 0' }}>
        <Container>
          <Eyebrow onInverse>Cloud Architecture</Eyebrow>
          <h1 className="nb-display-1" style={{ color: 'var(--text-on-inverse)', margin: '12px 0 24px' }}>
            Enterprise AWS for APAC
          </h1>
          <div style={{ display: 'flex', gap: 40, marginTop: 48 }}>
            <Stat value="40" suffix="%" label="Cost Reduction" />
            <Stat value="12" suffix="×" label="Deploy Frequency" />
            <Stat value="99.9" suffix="%" label="Uptime SLA" />
          </div>
          <Button variant="accent" size="lg" style={{ marginTop: 40 }}>Book a Discovery Call</Button>
        </Container>
      </BlueprintSection>

      {/* Light content section */}
      <section style={{ padding: 'var(--section-y) 0', background: 'var(--bg-page)' }}>
        <Container>
          <Eyebrow>Our Services</Eyebrow>
          <h2 style={{ fontSize: 'var(--text-h2-size)', lineHeight: 'var(--text-h2-lh)', margin: '8px 0 40px', color: 'var(--text-strong)' }}>
            What We Deliver
          </h2>
          <div className="nb-grid-3">
            <Card>
              <h3 style={{ fontSize: 'var(--text-h3-size)', marginBottom: 8 }}>Cloud Migration</h3>
              <p style={{ color: 'var(--text-body)', fontSize: 'var(--text-sm-size)' }}>
                Zero-downtime migrations from on-premise to AWS.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
```

## Where the truth lives

- **Token reference**: `_ds_bundle.css` — all `:root` custom properties
- **Component styles**: `_ds_bundle.css` — `.nb-*` class definitions
- **Component API**: `components/photon/<Name>/<Name>.d.ts`
- **Usage examples**: `components/photon/<Name>/<Name>.prompt.md`
