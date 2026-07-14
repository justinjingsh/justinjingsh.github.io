import * as React from 'react';

export interface FieldProps {
  /** Label text rendered above the child input */
  label?: string;
  /** `htmlFor` wired to the label's `for` attribute */
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export declare function Field(props: FieldProps): JSX.Element;
export declare function Label(props: LabelProps): JSX.Element;
export declare function Input(props: InputProps): JSX.Element;
export declare function Textarea(props: TextareaProps): JSX.Element;
