type AlertProps = {
  message: string | JSX.Element;
  title?: string;
  type: AlertType;
  border?: boolean;
};

type AlertType = 'success' | 'info' | 'warning' | 'error';

function Alert({ message, title, type, border }: AlertProps) {
  const colorDict: Record<AlertType, string> = {
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    error: 'red',
  };

  const borderClass = border ? `border border-${colorDict[type]}-300` : '';
  const colorClass = `text-${colorDict[type]}-800 bg-${colorDict[type]}-50`;

  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm rounded-lg ${colorClass} ${borderClass}`}
      role="alert"
    >
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
