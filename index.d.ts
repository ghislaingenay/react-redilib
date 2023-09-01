// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
// type HTMLElement = HTMLElement;
type BaseHTMLProps<T extends HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

type ButtonProps = BaseHTMLProps<HTMLButtonElement>;

type TestID = { testId?: string };

type DivProps = BaseHTMLProps<HTMLDivElement>;
type DividerProps = { children?: ReactNode } & TestID;

type AlertType = 'success' | 'info' | 'warning' | 'error';
type AlertProps = {
  /** some description here */
  message: string | JSX.Element;
  title?: string;
  type: AlertType;
  haveBorder?: boolean;
};
type AlertColorDict = Record<AlertType, Record<'bg' | 'border', string>>;
