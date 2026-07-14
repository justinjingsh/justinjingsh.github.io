# IconBadge

44×44 square chip for an icon, with rounded corners. Used in service and feature cards to visually anchor each item.

## Import
```jsx
const { IconBadge } = window.PhotonDS;
```

## Props
- `variant`: omit for azure-accent default | `'navy'` for navy-on-sunken

## Examples
```jsx
// With a Lucide icon (or any 20×20 SVG)
<IconBadge>
  <svg width="20" height="20" .../>
</IconBadge>

// Navy variant in a feature list card
<div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
  <IconBadge variant="navy">
    <svg width="20" height="20" .../>
  </IconBadge>
  <div>
    <h4>Infrastructure Optimisation</h4>
    <p>Right-sizing and cost reduction for AWS workloads.</p>
  </div>
</div>
```

## Notes
- IconBadge is `flex-shrink: 0` — safe to put next to multi-line text.
- Pass SVG icons at 20×20 for correct visual weight inside the 44px chip.
