# Badge

Small mono-font label chip. Used for technology tags, category labels, and status indicators.

## Import
```jsx
const { Badge } = window.PhotonDS;
```

## Props
- `variant`: `'tech'` (default) | `'accent'`

## Variants
- **tech** — grey/neutral chip; for technology names (AWS, .NET, Terraform)
- **accent** — azure-tinted chip; for category or service labels

## Examples
```jsx
// Technology stack badges
<div style={{ display: 'flex', gap: 8 }}>
  <Badge variant="tech">AWS</Badge>
  <Badge variant="tech">.NET 8</Badge>
  <Badge variant="tech">Kubernetes</Badge>
</div>

// Category badge
<Badge variant="accent">Cloud Architecture</Badge>
```
