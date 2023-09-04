import { render } from '@testing-library/react';
import { Spinner } from '@lib/Spinner';
import { ButtonType } from 'index';

const showRenderProperSpinnerColor = (
  type: ButtonType,
  expectedColor: RegExp
): void => {
  const { container } = render(<Spinner buttonType={type} />);
  const svgComponent = container.querySelector('svg');
  if (svgComponent) {
    const { outerHTML } = svgComponent;
    const isColorMatch = expectedColor.test(outerHTML);
    expect(isColorMatch).toBe(true);
  } else throw new TypeError('svgComponent is null');
};

describe('Rendering Spinner', () => {
  it.skip('should render successfully', () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toMatchSnapshot();
  });

  it.skip('should render successfully with different size', () => {
    const { baseElement } = render(<Spinner size="large" />);
    expect(baseElement).toMatchSnapshot();
  });

  it.skip('should render successfully with different type', () => {
    const { baseElement } = render(<Spinner buttonType="secondary" />);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Spinner type', () => {
  it('Success type should have a fill color of green', () => {
    showRenderProperSpinnerColor('success', /fill-green/);
  });
  it('Error type should have a fill color of error', () => {
    showRenderProperSpinnerColor('error', /fill-red/);
  });
  it('Primary type should have a fill color of blue', () => {
    showRenderProperSpinnerColor('primary', /fill-blue/);
  });
  it('Secondary type should have a fill color of purple', () => {
    showRenderProperSpinnerColor('secondary', /fill-purple/);
  });
  it('Tertiary type should have a fill color of gray', () => {
    showRenderProperSpinnerColor('tertiary', /fill-gray/);
  });
  it('Ghost type should have a fill color of gray', () => {
    showRenderProperSpinnerColor('ghost', /fill-gray/);
  });
});
