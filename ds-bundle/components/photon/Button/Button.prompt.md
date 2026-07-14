# Button

Photon button component. Applies `.nb-btn` plus a variant modifier class.

## Import
```jsx
const { Button } = window.PhotonDS;
```

## Props
- `variant`: `'accent'` | `'primary'` | `'secondary'` | `'ghost'` — default `'primary'`
- `size`: `'sm'` | `'lg'` — omit for medium
- `as`: `'button'` (default) | `'a'` — use `'a'` for navigation links with an `href`

## Variants
- **accent** — electric azure fill; the one primary CTA per section
- **primary** — dark navy fill; secondary-priority actions
- **secondary** — outlined, light background; tertiary actions
- **ghost** — no border or fill; low-emphasis text links

## Examples
```jsx
// Hero primary CTA
<Button variant="accent" size="lg">Book a Discovery Call</Button>

// Navigation link button
<Button variant="secondary" as="a" href="/services">Our Services</Button>

// Small ghost action
<Button variant="ghost" size="sm">Read the case study →</Button>
```

## Rules
- One `variant="accent"` per visible section.
- Never use `variant="accent"` more than once in a single card or row.
