import { cva } from 'class-variance-authority';
import { useButton } from '@react-aria/button';
import { ElementType, useEffect, useRef, useState } from 'react';
import { ButtonProps } from 'index';
import { AriaButtonOptions } from 'react-aria';
import { setTestIdProps } from '@utils';
import { Spinner } from '@lib/Spinner';

interface CVAButtonProps extends ButtonProps {
  children: React.ReactNode;
  buttonType?: EButtonType;
  size?: EButtonSize;
  loading?: boolean;
  disabled?: boolean;
  testId?: string;
}

type BtnProps = Omit<CVAButtonProps, 'className'>;

interface AriaButton extends AriaButtonOptions<ElementType> {
  buttonType: EButtonType;
}

export enum EButtonType {
  SUCCESS = 'success',
  ERROR = 'error',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  GHOST = 'ghost',
}

export enum EButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const buttonCVA = cva('max-w-fit', {
  variants: {
    buttonType: {
      [EButtonType.SUCCESS]:
        'bg-green-500 border border-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:ring-green-500',
      [EButtonType.ERROR]:
        'bg-red-500 border border-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-500',
      [EButtonType.PRIMARY]:
        'bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-500',
      [EButtonType.SECONDARY]:
        'bg-purple-500 border border-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-500', // Add underline
      [EButtonType.TERTIARY]:
        'bg-transparent text-black hover:bg-gray-200 rounded-lg active:bg-gray-700 focus:ring-gray-500',
      [EButtonType.GHOST]:
        'bg-transparent border border-gray-500 hover:bg-gray-600 hover:text-white active:bg-gray-700 focus:ring-gray-500 rounded-lg',
    },
    size: {
      [EButtonSize.SMALL]: 'text-sm px-5 py-2',
      [EButtonSize.MEDIUM]: 'text-base px-3 py-2',
      [EButtonSize.LARGE]: 'text-lg px-4 py-3',
    },
    disabled: {
      true: 'cursor-not-allowed bg-gray-200 text-gray-500 border border-none',
    },
    loading: {
      true: 'cursor-not-allowed bg-gray-500 text-white',
    },
  },
  compoundVariants: [
    {
      loading: true,
      buttonType: EButtonType.SUCCESS,
      className:
        'bg-green-200 border border-opacity-0.5 border-none cursor-not-allowed hover:bg-gray-500',
    },
    {
      loading: true,
      buttonType: EButtonType.ERROR,
      className:
        'bg-red-200 border border-opacity-0.5  border-none cursor-not-allowed hover:bg-gray-500 ',
    },
    {
      loading: true,
      buttonType: EButtonType.PRIMARY,
      className:
        'bg-blue-200 border border-opacity-0.5 border-none cursor-not-allowed hover:bg-gray-500',
    },
    {
      loading: true,
      buttonType: EButtonType.SECONDARY,
      className:
        'bg-purple-200 border border-opacity-0.5 border-none cursor-not-allowed hover:bg-gray-500',
    },
    {
      loading: true,
      buttonType: EButtonType.TERTIARY,
      className: 'bg-gray-200 cursor-not-allowed hover:bg-gray-500 text-black',
    },
    {
      loading: true,
      buttonType: EButtonType.GHOST,
      className: 'bg-gray-200 cursor-not-allowed hover:bg-gray-500 text-black',
    },
    {
      disabled: true,
      buttonType: Object.values(EButtonType),
      className: 'cursor-not-allowed hover:bg-gray-500 text-black',
    },
  ],
});

export function Button({
  buttonType = 'primary' as EButtonType,
  size = EButtonSize.MEDIUM,
  loading = false,
  disabled = false,
  testId = 'button',
  children = 'Button',
  onClick,
}: BtnProps) {
  const ref = useRef();
  const { buttonProps } = useButton(
    { buttonType, size, loading } as AriaButton,
    ref as unknown as React.RefObject<HTMLElement>
  );

  return (
    <button
      className={buttonCVA({ buttonType, disabled, loading, size })}
      {...buttonProps}
      onClick={onClick}
      {...setTestIdProps(testId)}
    >
      <div className="flex">
        {loading && (
          // Add span to keep the the same width as the text
          <span className="mr-1">
            <Spinner buttonType={buttonType} size={size} />
          </span>
        )}
        {children}
      </div>
    </button>
  );
}
