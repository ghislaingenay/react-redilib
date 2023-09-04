// Interface that are not related to the UI library
// Avoid coding errors
import { AlertType, ButtonType, ButtonSize } from '@types';
import { ElementType } from 'react';
import { AriaButtonOptions } from 'react-aria';

export type BgColorOrBorder = 'bg' | 'border';

export type AlertColorDict = Record<AlertType, Record<BgColorOrBorder, string>>;

export interface AriaButton extends AriaButtonOptions<ElementType> {
  buttonType: ButtonType;
}

export type ButtonTypeVariant = Record<ButtonType, string>;
export type ButtonSizeVariant = Record<ButtonSize, string>;
