export type ToggleProps = {
  isToggled?: boolean;
  onClick?: () => void;
};

function Toggle({ isToggled = false, onClick }: ToggleProps) {
  const checkbox = isToggled ? { checked: true } : { checked: false };
  return (
    <input
      type="checkbox"
      className="form-control toggle toggle-lg rounded-full toggle-success "
      onClick={onClick}
      {...checkbox}
    />
  );
}

export { Toggle };
