import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual modifier. Omit for the default subtle-border style. */
  variant?: 'ruled' | 'interactive';
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
