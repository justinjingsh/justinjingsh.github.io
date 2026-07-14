# Stat

Metric display: large semibold number + optional suffix + small mono label. Used in hero and proof sections.

## Import
```jsx
const { Stat } = window.PhotonDS;
```

## Props
- `value` — the number/text, displayed large
- `suffix` — optional smaller suffix (%, ×, +, ms) rendered inline at smaller size
- `label` — all-caps mono label below

## Examples
```jsx
// Row of proof metrics
<div style={{ display: 'flex', gap: 40 }}>
  <Stat value="40" suffix="%" label="Cost Reduction" />
  <Stat value="12" suffix="×" label="Deploy Frequency" />
  <Stat value="99.9" suffix="%" label="Uptime SLA" />
</div>
```

## Notes
- Stats are typically placed in a row of 3–4 on a white or lightly tinted background.
- For hero sections on the dark blueprint background, override `--text-strong` or set `color: var(--text-on-inverse)` via `className`.
