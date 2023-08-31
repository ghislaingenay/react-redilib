import { logRoles, render, screen } from '@testing-library/react';
import { SectionDivider } from '@lib/Divider';
import '@testing-library/jest-dom';

describe('Section Divider', () => {
  it('should render successfully - no children', () => {
    const { baseElement } = render(<SectionDivider />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render successfully - with children', () => {
    const { baseElement } = render(<SectionDivider>App</SectionDivider>);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render with children', () => {
    render(<SectionDivider>test</SectionDivider>);
    const textHeader = screen.getByRole('heading', { name: 'test' });
    const getTestText = screen.getByText('test');
    expect(textHeader).toBeInTheDocument();
    expect(getTestText).toBeInTheDocument();
  });

  it('Should contains 1 hr if no children if not provided', () => {
    render(<SectionDivider />);
    const hrElement = screen.getAllByRole('presentation', { hidden: true });
    console.log(hrElement);
    expect(hrElement).toHaveLength(1);
  });

  it('Should contains 2 hr if children provided', () => {
    render(<SectionDivider>Children</SectionDivider>);
    const hrElement = screen.getAllByRole('presentation', { hidden: true });
    expect(hrElement).toHaveLength(2);
  });

  it('can be queried by test-id with jest-dom', () => {
    render(<SectionDivider testId="test-id">Jest dom testing</SectionDivider>);
    const getTestId = screen.getByTestId('test-id');
    expect(getTestId).toBeInTheDocument();
  });

  it('show failed if the test-id is incorrect', () => {
    render(<SectionDivider testId="tesid">Jest dom testing</SectionDivider>);
    const getTestId = screen.queryByTestId('test-id');
    expect(getTestId).toBe(null);
  });

  it('can be queried by test-id with query selector', () => {
    const { container } = render(<SectionDivider testId="divider-test" />);
    const dividerElement = container.querySelector(
      'div[data-testid="divider-test"]'
    );
    expect(dividerElement).toBeInTheDocument();
  });
});
