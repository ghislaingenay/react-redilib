// Type definitions for react-redilib v1.0.0
// Project: ui-library
// Definitions by: Ghislain Genay <https://github.com/ghislaingenay>
// TypeScript Version: 5.1.3

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
// type HTMLElement = HTMLElement;
type BaseHTMLProps<T extends HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

type ButtonProps = BaseHTMLProps<HTMLButtonElement>;
type DivProps = BaseHTMLProps<HTMLDivElement>;

type TestID = { testId?: string };

declare namespace Redilib {
  //
  // Components
  // ----------------------------------------------------------------------
  /**
   * Divider - A divider component that can be used to separate content.
   */
  type DividerProps = { children?: ReactNode } & TestID;

  type TestID = { testId?: string };

  type AlertType = 'success' | 'info' | 'warning' | 'error';
  /**
   * Alert - Show a message to the user.
   */
  interface AlertProps extends TestID {
    /** some description here */
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
  type ButtonType = (typeof ButtonTypes)[number];

  declare const ButtonSize: readonly ['small', 'medium', 'large'];
  type ButtonSize = (typeof ButtonSize)[number];

  interface CVAButtonProps extends ButtonProps {
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
  }

  type BtnProps = Omit<Redilib.CVAButtonProps, 'className'>;
}

export = Redilib;
export as namespace Redilib;
