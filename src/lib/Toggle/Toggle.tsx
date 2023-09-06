import { twMerge } from 'tailwind-merge';

export type ToggleProps = {
  isToggled?: boolean;
  onClick?: () => void;
  className?: string;
};

function Toggle({ isToggled = false, onClick, className = '' }: ToggleProps) {
  const checkbox = isToggled ? { checked: true } : { checked: false };
  return (
    <input
      type="checkbox"
      className={twMerge(
        'form-control toggle toggle-lg rounded-full toggle-success',
        className
      )}
      onClick={onClick}
      {...checkbox}
    />
  );
}

export { Toggle };
