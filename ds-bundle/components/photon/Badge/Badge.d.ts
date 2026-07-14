import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 'tech' = monospace grey chip for technology labels; 'accent' = tinted azure for category tags */
  variant?: 'tech' | 'accent';
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
