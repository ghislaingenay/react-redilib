import { setTestIdProps } from '@utils';
import { AlertProps, AlertColorDict } from 'index';

/** Some comment about the alert */
function Alert({
  message = 'Placeholder text...',
  title = 'Something',
  type = 'info',
  haveBorder = false,
  testId,
}: AlertProps) {
  const colorBgDict: AlertColorDict = {
    success: {
      bg: 'alert-success',
      border: 'alert-success-border',
    },
    info: { bg: 'alert-info', border: 'alert-info-border' },
    warning: {
      bg: 'alert-warning',
      border: 'alert-warning-border',
    },
    error: { bg: 'alert-error', border: 'alert-error-border' },
  };

  const { bg, border } = colorBgDict[type];

  const initialClass = 'flex items-center p-4 mb-4 text-sm rounded-lg mx-5';
  const borderClass = haveBorder ? `border ${border}` : '';

  const alertClass = `${initialClass} ${bg} ${borderClass}`;

  return (
    <div className={alertClass} role="alert" {...setTestIdProps(testId)}>
      <svg
        className="flex-shrink-0 inline w-4 h-4 mr-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
        focusable="false"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only uppercase">{type} alert:</span>
      <div className="font-bold tablet:font-medium">
        <span className="font-bold hidden tablet:inline">{title}</span>{' '}
        {message}
      </div>
    </div>
  );
}

export { Alert };
