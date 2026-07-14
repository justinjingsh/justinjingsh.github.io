// Photon Design System — thin React wrappers over CSS class system
// Requires window.React (React 18+). No import needed — React used as global.
// Exported as window.PhotonDS.* via IIFE bundle.

function Button({ variant = 'primary', size, as: Tag = 'button', children, className = '', ...props }) {
  const cls = ['nb-btn', `nb-btn--${variant}`, size ? `nb-btn--${size}` : null, className]
    .filter(Boolean).join(' ');
  return React.createElement(Tag, { className: cls, ...props }, children);
}

function Badge({ variant = 'tech', children, className = '', ...props }) {
  const cls = ['nb-badge', `nb-badge--${variant}`, className].filter(Boolean).join(' ');
  return React.createElement('span', { className: cls, ...props }, children);
}

function Card({ variant, children, className = '', ...props }) {
  const cls = ['nb-card', variant ? `nb-card--${variant}` : null, className]
    .filter(Boolean).join(' ');
  return React.createElement('div', { className: cls, ...props }, children);
}

function IconBadge({ variant, children, className = '', ...props }) {
  const cls = ['nb-icon-badge', variant ? `nb-icon-badge--${variant}` : null, className]
    .filter(Boolean).join(' ');
  return React.createElement('div', { className: cls, ...props }, children);
}

function Stat({ value, suffix, label, className = '' }) {
  return React.createElement('div', { className: `nb-stat${className ? ' ' + className : ''}` },
    React.createElement('div', { className: 'nb-stat__value' },
      value,
      suffix ? React.createElement('span', { className: 'nb-stat__suffix' }, suffix) : null
    ),
    React.createElement('div', { className: 'nb-stat__label' }, label)
  );
}

function Eyebrow({ onInverse, children, className = '', ...props }) {
  const cls = ['nb-eyebrow', onInverse ? 'nb-eyebrow--on-inverse' : null, className]
    .filter(Boolean).join(' ');
  return React.createElement('span', { className: cls, ...props }, children);
}

function Container({ wide, children, className = '', ...props }) {
  const cls = ['nb-container', wide ? 'nb-container--wide' : null, className]
    .filter(Boolean).join(' ');
  return React.createElement('div', { className: cls, ...props }, children);
}

function BlueprintSection({ light, children, className = '', style, ...props }) {
  const cls = [light ? 'nb-blueprint--light' : 'nb-blueprint', className]
    .filter(Boolean).join(' ');
  return React.createElement('section', { className: cls, style, ...props }, children);
}

function Label({ children, className = '', ...props }) {
  return React.createElement('label', { className: `nb-label${className ? ' ' + className : ''}`, ...props }, children);
}

function Input({ className = '', ...props }) {
  return React.createElement('input', { className: `nb-input${className ? ' ' + className : ''}`, ...props });
}

function Textarea({ className = '', ...props }) {
  return React.createElement('textarea', { className: `nb-textarea${className ? ' ' + className : ''}`, ...props });
}

function Field({ label, htmlFor, children, className = '' }) {
  return React.createElement('div', { className: `nb-field${className ? ' ' + className : ''}` },
    label ? React.createElement(Label, { htmlFor }, label) : null,
    children
  );
}

export { Button, Badge, Card, IconBadge, Stat, Eyebrow, Container, BlueprintSection, Label, Input, Textarea, Field };
