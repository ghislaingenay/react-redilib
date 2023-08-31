// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type BaseHTMLProps<T extends HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

type ButtonProps = BaseHTMLProps<HTMLButtonElement>;

type TestID = { testId?: string };

type DivProps = BaseHTMLProps<HTMLDivElement>;
type DividerProps = { children?: ReactNode } & TestID;
