import { Alert } from '@lib/Alert';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getClassListInHTMLElement } from '@utils';
import { AlertType } from 'index';
import MediaQuery from 'react-responsive';

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

const basicAlertInfo = (
  <Alert message="Please try again..." title="Hello" type="info" />
);

const generateClassListAlert = (type: AlertType) => {
  const {
    container: { firstChild: component },
  } = render(<Alert message={type} type={type} title={type} />);
  const classList = getClassListInHTMLElement(component);
  return classList;
};

const SUCCESS_TYPE = 'success';
const ERROR_TYPE = 'error';
const WARNING_TYPE = 'warning';
const INFO_TYPE = 'info';

describe('Alert', () => {
  it('should render successfully', () => {
    const { container } = render(<Alert message="Hello" type="info" />);
    expect(container).toMatchSnapshot();
  });

  it('should render successfully with alert role', () => {
    render(<Alert message="Hello" type="info" />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  it('should render successfully with title', () => {
    const { container } = render(basicAlertInfo);
    expect(container).toMatchSnapshot();
  });

  it('should show title if screen size > 1000px', () => {
    render(basicAlertInfo);
    resizeWindow(1024, 768);
    const titleText = screen.getByText('Hello');
    expect(titleText).toBeInTheDocument();
  });

  // There is no way to verify the title is not shown if the screen size is less than 1000px
  // because the title is hidden using CSS
  it.skip('should not show title if screen size < 1000px', () => {
    render(basicAlertInfo);
    resizeWindow(640, 768);
    const titleText = screen.getByText('Hello');
    expect(titleText).not.toBeInTheDocument();
  });

  it('should render successfully with border if specified', () => {
    const {
      container: { firstChild: component },
    } = render(
      <Alert message="Hello" type="info" haveBorder testId="have-border" />
    );
    const classList = getClassListInHTMLElement(component);
    expect(classList.includes('alert-info-border')).toBe(true);
  });

  it('should not render successfully with border if specified', () => {
    const {
      container: { firstChild: component },
    } = render(<Alert message="Hello" type="info" />);
    const classList = getClassListInHTMLElement(component);
    expect(classList.includes('alert-info-border')).toBe(false);
  });

  it('should render success alert if success type is specified', () => {
    const classList = generateClassListAlert(SUCCESS_TYPE);
    expect(classList.includes(`alert-${SUCCESS_TYPE}`)).toBe(true);
  });

  it('should render error alert if error type is specified', () => {
    const classList = generateClassListAlert(ERROR_TYPE);
    expect(classList.includes(`alert-${ERROR_TYPE}`)).toBe(true);
  });
  it('should render warning alert if warning type is specified', () => {
    const classList = generateClassListAlert(WARNING_TYPE);
    expect(classList.includes(`alert-${WARNING_TYPE}`)).toBe(true);
  });
  it('should render info alert if info type is specified', () => {
    const classList = generateClassListAlert(INFO_TYPE);
    expect(classList.includes(`alert-${INFO_TYPE}`)).toBe(true);
  });
});
