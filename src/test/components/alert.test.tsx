import { Alert } from '@lib/Alert';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert message="Hello" type="info" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render successfully with title', () => {
    const { baseElement } = render(
      <Alert message="Hello" title="Title" type="info" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
