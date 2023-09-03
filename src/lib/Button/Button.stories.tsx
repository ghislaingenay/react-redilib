import type { StoryObj, Meta } from '@storybook/react';
import { Button, EButtonSize, EButtonType } from './Button';

type TypeOfButton = typeof Button;
const meta: Meta<TypeOfButton> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'button text',
      control: {
        type: 'text',
      },
    },
    buttonType: {
      control: {
        type: 'select',
        options: Object.values(EButtonType),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(EButtonSize),
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      name: 'Tailwind classes',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<TypeOfButton>;

export const Base: Story = {
  render(args) {
    return <Button {...args} />;
  },
};
