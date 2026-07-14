import * as React from 'react';

export interface BlueprintSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** light = grey grid on white; default = white grid on navy-950 */
  light?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function BlueprintSection(props: BlueprintSectionProps): JSX.Element;
