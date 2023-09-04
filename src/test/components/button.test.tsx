import { render, screen } from '@testing-library/react';
import { Button } from '@lib/Button';
import userEvent from '@testing-library/user-event';
import { elementContainsClass, getFirstComponentChild } from '@utils';
import '@testing-library/jest-dom';
import React, { useState } from 'react';

describe('Render button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Clicked</Button>);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Button type', () => {
  it('should contains bg-blue class if buttonType is primary', () => {
    const isFoundElement = elementContainsClass(
      <Button>Clicked</Button>,
      'bg-blue'
    );
    expect(isFoundElement).toBe(true);
  });

  it('should contains bg-red class if buttonType is error', () => {
    const isFoundElement = elementContainsClass(
      <Button buttonType="error">Clicked</Button>,
      'bg-red'
    );
    expect(isFoundElement).toBe(true);
  });
  it('should contains bg-green class if buttonType is success', () => {
    const isFoundElement = elementContainsClass(
      <Button buttonType="success">Clicked</Button>,
      'bg-green'
    );
    expect(isFoundElement).toBe(true);
  });
  it('should contains bg-purple class if buttonType is secondary', () => {
    const isFoundElement = elementContainsClass(
      <Button buttonType="secondary">Clicked</Button>,
      'bg-purple'
    );
    expect(isFoundElement).toBe(true);
  });

  it('should contains bg-transparent class if buttonType is tertiary', () => {
    const isFoundElement = elementContainsClass(
      <Button buttonType="tertiary">Clicked</Button>,
      'bg-gray'
    );
    expect(isFoundElement).toBe(true);
  });
  it('should contains bg-transparent class if buttonType is ghost', () => {
    const isFoundElement = elementContainsClass(
      <Button buttonType="ghost">Clicked</Button>,
      'bg-gray'
    );
    expect(isFoundElement).toBe(true);
  });

  it('should contains undeline class if buttonType is tertiary', () => {
    const isFoundElement = elementContainsClass(
      <Button buttonType="tertiary">Clicked</Button>,
      'underline'
    );
    expect(isFoundElement).toBe(true);
  });

  it('should contains border class if buttonType is ghost', () => {
    const isFoundElement = elementContainsClass(
      <Button buttonType="ghost">Clicked</Button>,
      'border-gray'
    );
    expect(isFoundElement).toBe(true);
  });
});

describe('Button Loading', () => {
  it('should not contains svg if loading is false', () => {
    const { container } = render(<Button>Hello</Button>);
    const svgComponent = container.querySelector('svg');
    expect(svgComponent).toBeNull();
  });

  it('should contains text if loading is false', () => {
    render(<Button testId="btn-test">Hello</Button>);
    const buttonTitle = screen.getByRole('button', { name: 'Hello' });
    expect(buttonTitle).toBeInTheDocument();
  });

  it('should contains svg if loading is true', () => {
    const { container } = render(<Button loading>Hello</Button>);
    const svgComponent = container.querySelector('svg');
    expect(svgComponent).not.toBeNull();
  });

  it('should not contains text if loading is true', () => {
    render(
      <Button testId="btn-test" loading>
        Hello
      </Button>
    );
    const buttonTitle = screen.queryByRole('button', { name: 'Hello' });
    expect(buttonTitle).toBeNull();
  });
});

describe('Button disabled', () => {
  it('user cannot click if button is disabled', async () => {
    render(<Button disabled>Hello</Button>);
    const button = screen.getByRole('button', { name: 'Hello' });
    const ariaDisabled = button.getAttribute('aria-disabled');
    expect(ariaDisabled).toBe('true');
  });

  it('user can click if button is not disabled', () => {
    render(<Button>Hello</Button>);
    const button = screen.getByRole('button', { name: 'Hello' });
    expect(button).toBeEnabled();
    const ariaDisabled = button.getAttribute('aria-disabled');
    expect(ariaDisabled).toBe('false');
  });
});

describe('Button size', () => {
  it('should contains text-sm class if size is small', () => {
    const isFoundElement = elementContainsClass(
      <Button size="small">Clicked</Button>,
      'text-sm'
    );
    expect(isFoundElement).toBe(true);
  });

  it('should contains text-base class if size is medium', () => {
    const isFoundElement = elementContainsClass(
      <Button size="medium">Clicked</Button>,
      'text-base'
    );
    expect(isFoundElement).toBe(true);
  });

  it('should contains text-lg class if size is large', () => {
    const isFoundElement = elementContainsClass(
      <Button size="large">Clicked</Button>,
      'text-lg'
    );
    expect(isFoundElement).toBe(true);
  });
});

// INTERACTION TEST
describe('Button onClick', () => {
  it('should call onClick function when user click on button', async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Hello</Button>);
    const button = screen.getByRole('button', { name: 'Hello' });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it.skip('should not call onClick function when user click on button if button is disabled', async () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        Hello
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Hello' });
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});

// INTEGRATION TESTING
describe('INTEGRATION TEST', () => {
  it('should show loading when user click on button', async () => {
    const BUTTON_TEXT = 'Clicked';
    const TestComponent = ({ text }: { text: string }) => {
      const [loading, setLoading] = useState(false);
      const onClick = () => setLoading(true);

      return (
        <Button onClick={onClick} loading={loading}>
          {text as React.ReactNode}
        </Button>
      );
    };
    render(<TestComponent text={BUTTON_TEXT} />);
    const button = screen.getByRole('button', { name: BUTTON_TEXT });
    await userEvent.click(button);
    const svgComponent = button.querySelector('svg');
    expect(screen.queryByRole('button', { name: BUTTON_TEXT })).toBe(null);
    expect(svgComponent).not.toBeNull();
  });
});
