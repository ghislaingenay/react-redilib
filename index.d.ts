// Type definitions for react-redilib v1.0.0
// Project: ui-library
// Definitions by: Ghislain Genay <https://github.com/ghislaingenay>
// TypeScript Version: 5.1.3

import 'global.d.ts';

import React, { ReactNode } from 'react';

type TestID = { testId?: string };

/**
 * Divider - A divider component that can be used to separate content.
 */
declare type DividerProps = {
  children?: ReactNode;
} & TestID;

export type AlertType = 'success' | 'info' | 'warning' | 'error';
/**
 * Alert - Show a message to the user.
 */
export interface AlertProps extends TestID {
  message: string | JSX.Element;
  title?: string;
  type: AlertType;
  haveBorder?: boolean;
}

declare const ButtonTypes: readonly [
  'success',
  'error',
  'primary',
  'secondary',
  'tertiary',
  'ghost'
];

export type ButtonType = (typeof ButtonTypes)[number];

declare const ButtonSizes: readonly ['small', 'medium', 'large'];
export type ButtonSize = (typeof ButtonSizes)[number];

export interface CVAButtonProps extends ButtonProps {
  /**
   * @class Button - A button component that can be used to trigger an action.
   * @param {string} [buttonType] - The type of button to render. Can be one of: 'success', 'error', 'primary', 'secondary', 'tertiary', 'ghost'.
   * @param {string} [size] - The size of the button. Can be one of: 'small', 'medium', 'large'.
   * @param {boolean} [loading] - Whether the button is in a loading state.
   * @param {boolean} [disabled] - Whether the button is disabled.
   */
  children: React.ReactNode;
  buttonType?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  /**
   * Can be use to test the component for QA team
   * @param {string} [testId] - The testId of the button.
   */
  testId?: string;
  onClick?: () => void;
}

export type BtnProps = Omit<CVAButtonProps, 'className'>;

export type SpinnerProps = {
  buttonType?: ButtonType;
  size?: ButtonSize;
};
