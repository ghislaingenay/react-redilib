import { DetailedHTMLProps, HTMLAttributes } from 'react';

type BaseHTMLProps<T extends HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

type ButtonProps = BaseHTMLProps<HTMLButtonElement>;
type DivProps = BaseHTMLProps<HTMLDivElement>;
