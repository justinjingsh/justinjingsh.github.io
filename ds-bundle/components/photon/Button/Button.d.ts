import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style — 'accent' is the electric-blue primary CTA */
  variant?: 'accent' | 'primary' | 'secondary' | 'ghost';
  /** Size modifier. Omit for the default (medium) size. */
  size?: 'sm' | 'lg';
  /** Render as a link instead of a button element */
  as?: 'button' | 'a' | string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
