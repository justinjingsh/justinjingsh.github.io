import * as React from 'react';

export interface StatProps {
  /** The large metric value e.g. "40" or "99.9" */
  value: React.ReactNode;
  /** Optional suffix rendered at smaller size e.g. "%" or "×" */
  suffix?: React.ReactNode;
  /** All-caps mono label below the value e.g. "Cost Reduction" */
  label: string;
  className?: string;
}

export declare function Stat(props: StatProps): JSX.Element;
