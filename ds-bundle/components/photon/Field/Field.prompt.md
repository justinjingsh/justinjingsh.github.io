# Field / Input / Label / Textarea

Form primitives for the Photon contact and intake forms.

## Import
```jsx
const { Field, Input, Label, Textarea } = window.PhotonDS;
```

## Components

| Component | Element | Class |
|-----------|---------|-------|
| `Field` | `<div>` | `.nb-field` — wraps label + input with correct gap |
| `Label` | `<label>` | `.nb-label` — medium-weight sans label |
| `Input` | `<input>` | `.nb-input` — full-width bordered input |
| `Textarea` | `<textarea>` | `.nb-textarea` — resizable, same styling as Input |

## Examples
```jsx
// Full form
<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
  <Field label="Full Name" htmlFor="name">
    <Input id="name" type="text" placeholder="Justin Jing" />
  </Field>
  <Field label="Work Email" htmlFor="email">
    <Input id="email" type="email" placeholder="you@company.com" />
  </Field>
  <Field label="Message" htmlFor="msg">
    <Textarea id="msg" rows={4} placeholder="Tell us about your project…" />
  </Field>
  <Button variant="accent">Send Message</Button>
</div>
```

## Notes
- `Field` adds a `<Label>` above the child automatically when `label` prop is set.
- `Input` and `Textarea` are `width: 100%` by default — constrain the parent container.
