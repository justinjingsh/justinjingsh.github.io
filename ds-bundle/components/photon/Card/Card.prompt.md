# Card

White surface card with navy-tinted shadow. The primary content container across all pages.

## Import
```jsx
const { Card } = window.PhotonDS;
```

## Props
- `variant`: omit for default | `'ruled'` (stronger border) | `'interactive'` (hover lift)

## Examples
```jsx
// Information card
<Card>
  <h3>Cloud Migration</h3>
  <p>Zero-downtime migrations from on-premise to AWS.</p>
</Card>

// Clickable card link
<Card variant="interactive" onClick={...} role="link">
  <h3>View Case Study</h3>
  <p>How we reduced infrastructure costs by 40%.</p>
</Card>
```

## Notes
- Default card padding is 24px; use inline `style` to override for tighter layouts.
- `variant="interactive"` adds `cursor: pointer` — always pair with `role="link"` or wrap in an `<a>`.
