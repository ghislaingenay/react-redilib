type AlertProps = {
  /** some description here */
  message: string | JSX.Element;
  title?: string;
  type: AlertType;
  border?: boolean;
};

type AlertType = 'success' | 'info' | 'warning' | 'error';

/** Some comment about the alert */
function Alert({
  message = 'Placeholder text...',
  title = 'Something',
  type = 'info',
  border,
}: AlertProps) {
  const colorBgDict: Record<
    AlertType,
    Record<'bg' | 'text' | 'bord', string>
  > = {
    success: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      bord: 'border-green-800',
    },
    info: { bg: 'bg-blue-50', text: 'text-blue-800', bord: 'border-blue-800' },
    warning: {
      bg: 'bg-orange-50',
      text: 'text-orange-800',
      bord: 'border-orange-800',
    },
    error: { bg: 'bg-red-50', text: 'text-red-800', bord: 'border-red-800' },
  };

  const { bg, text, bord } = colorBgDict[type];

  const initialClass = 'flex items-center p-4 mb-4 text-sm rounded-lg mx-5';
  const borderClass = border ? `border ${bord}` : '';
  const colorClass = `${text} ${bg}`;

  const alertClass = `${initialClass} ${colorClass} ${borderClass}`;

  return (
    <div className={alertClass} role="alert">
      <svg
        className="flex-shrink-0 inline w-4 h-4 mr-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only uppercase">{type}</span>
      <div>
        <span className="font-bold">{title}</span> {message}
      </div>
    </div>
  );
}

export { Alert };
