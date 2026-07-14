# BlueprintSection

Full-width section with the Photon blueprint grid motif. The dark variant (`nb-blueprint`) is the signature brand background — used for hero sections and key CTAs. The light variant (`nb-blueprint--light`) provides subtle structure on interior sections.

## Import
```jsx
const { BlueprintSection, Eyebrow, Button } = window.PhotonDS;
```

## Props
- `light`: `boolean` — light grid on `var(--gray-50)` instead of the dark navy default

## Dark variant (hero/CTA)
```jsx
<BlueprintSection style={{ padding: 'var(--section-y) 0' }}>
  <Container>
    <Eyebrow onInverse>Cloud Architecture</Eyebrow>
    <h1 className="nb-display-1" style={{ color: 'var(--text-on-inverse)', margin: '12px 0 20px' }}>
      Engineering-Grade AWS Solutions
    </h1>
    <p style={{ color: 'var(--text-on-inverse-muted)', maxWidth: 560 }}>
      Photon delivers production-ready cloud infrastructure for APAC enterprise.
    </p>
    <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
      <Button variant="accent" size="lg">Book a Discovery Call</Button>
      <Button
        variant="secondary"
        style={{ borderColor: 'var(--border-inverse)', color: 'var(--text-on-inverse)', background: 'rgba(255,255,255,0.06)' }}
      >
        View Case Studies
      </Button>
    </div>
  </Container>
</BlueprintSection>
```

## Light variant
```jsx
<BlueprintSection light style={{ padding: 'var(--section-y) 0' }}>
  <Container>
    <Eyebrow>Our Approach</Eyebrow>
    <h2>Principal-Led Delivery</h2>
  </Container>
</BlueprintSection>
```

## Rules
- All text on the dark variant must use `var(--text-on-inverse)` or `var(--text-on-inverse-muted)` — never dark body text.
- The `secondary` button on a dark background needs border and background overrides (see example above).
