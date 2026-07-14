# Eyebrow

Section label in IBM Plex Mono, uppercase, with a short accent rule to the left. Placed above section headings to identify the content area.

## Import
```jsx
const { Eyebrow } = window.PhotonDS;
```

## Props
- `onInverse`: `boolean` — use `true` when placed on a dark/navy blueprint background

## Examples
```jsx
// On a light surface (default)
<section>
  <Eyebrow>Our Services</Eyebrow>
  <h2>What We Deliver</h2>
</section>

// On the dark blueprint hero/section
<BlueprintSection>
  <Eyebrow onInverse>Cloud Architecture</Eyebrow>
  <h2 style={{ color: 'var(--text-on-inverse)' }}>Engineering-Grade AWS Solutions</h2>
</BlueprintSection>
```

## Notes
- Always place the Eyebrow directly above its associated heading with no extra wrapper between them.
- One Eyebrow per section — do not stack multiple eyebrows.
