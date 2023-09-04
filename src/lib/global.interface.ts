// Interface that are not related to the UI library
// Avoid coding errors
import Redilib from '@types';
import { ElementType } from 'react';
import { AriaButtonOptions } from 'react-aria';

export type BgColorOrBorder = 'bg' | 'border';

export type AlertColorDict = Record<
  Redilib.AlertType,
  Record<BgColorOrBorder, string>
>;

export interface AriaButton extends AriaButtonOptions<ElementType> {
  buttonType: Redilib.ButtonType;
}

export type ButtonTypeVariant = Record<Redilib.ButtonType, string>;
export type ButtonSizeVariant = Record<Redilib.ButtonSize, string>;
