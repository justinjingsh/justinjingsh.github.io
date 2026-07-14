import * as React from 'react';

export interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 'navy' uses the sunken surface + navy icon colour instead of the azure-tinted default */
  variant?: 'navy';
  children?: React.ReactNode;
}

export declare function IconBadge(props: IconBadgeProps): JSX.Element;
