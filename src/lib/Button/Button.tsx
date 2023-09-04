import { cva } from 'class-variance-authority';
import { useButton } from '@react-aria/button';
import { BtnProps } from '@types';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { setTestIdProps } from '@utils';
import { Spinner } from '@lib/Spinner';
import {
  AriaButton,
  ButtonSizeVariant,
  ButtonTypeVariant,
} from '@global/interface';

const buttonCVA = cva('max-w-fit px-5', {
  variants: {
    buttonType: {
      success:
        'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:ring-green-500',
      error:
        'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-500',
      primary:
        'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-500',
      secondary:
        'bg-purple-500  text-white hover:bg-gray-600 active:bg-gray-700 focus:ring-gray-500',
      tertiary:
        'bg-transparent text-black hover:bg-gray-200 rounded-lg active:bg-gray-700 focus:ring-gray-500 underline',
      ghost:
        'bg-transparent border border-gray-500 hover:bg-gray-200 hover:text-black active:bg-gray-400 focus:ring-gray-300 rounded-lg',
    } as ButtonTypeVariant,
    size: {
      small: 'text-sm h-8',
      medium: 'text-base h-10',
      large: 'text-lg h-12',
    } as ButtonSizeVariant,
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
      buttonType: 'success',
      className:
        'bg-green-200 border border-opacity-0.5 border-none cursor-not-allowed hover:bg-gray-500 focus:none active:bg-green-500 ',
    },
    {
      loading: true,
      buttonType: 'error',
      className:
        'bg-red-200 border border-opacity-0.5  border-none cursor-not-allowed hover:bg-gray-500 focus:none ',
    },
    {
      loading: true,
      buttonType: 'primary',
      className:
        'bg-blue-200 border border-opacity-0.5 border-none cursor-not-allowed hover:bg-gray-500',
    },
    {
      loading: true,
      buttonType: 'secondary',
      className:
        'bg-purple-200 border border-opacity-0.5 border-none cursor-not-allowed hover:bg-gray-500',
    },
    {
      loading: true,
      buttonType: 'tertiary',
      className: 'bg-gray-200 cursor-not-allowed hover:bg-gray-500 text-black',
    },
    {
      loading: true,
      buttonType: 'ghost',
      className: 'bg-gray-200 cursor-not-allowed hover:bg-gray-500 text-black',
    },
    {
      disabled: true,
      loading: [true, false],
      buttonType: [
        'success',
        'error',
        'primary',
        'secondary',
        'tertiary',
        'ghost',
      ],
      className: 'cursor-not-allowed hover:bg-gray-500 text-black',
    },
  ],
});

export function Button({
  buttonType = 'primary',
  size = 'medium',
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

  const isGhostBtn = buttonType === 'ghost';

  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const btnElement = document.querySelector(
      `button[data-testid="${testId}"]`
    );
    if (btnElement) {
      const btnWidth = btnElement.children[0].getBoundingClientRect().width;
      const totalWidth = isGhostBtn ? btnWidth + 2 : btnWidth; // ghost contains a 2px border
      setTextWidth(totalWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const textStyle: CSSProperties = loading ? { width: `${textWidth}px` } : {};

  return (
    <button
      className={buttonCVA({ buttonType, disabled, loading, size })}
      {...buttonProps}
      onClick={onClick}
      aria-disabled={disabled}
      {...setTestIdProps(testId)}
    >
      <div className="flex">
        {loading ? (
          <span
            style={textStyle}
            className="flex justify-center animate-pulse"
            aria-disabled={true}
          >
            <Spinner buttonType={buttonType} size={size} />
          </span>
        ) : (
          <span className="leading-none">{children}</span>
        )}
      </div>
    </button>
  );
}
