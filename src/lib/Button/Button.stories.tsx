import type { StoryObj, Meta } from '@storybook/react';
import { Button } from './Button';
import { SectionDivider } from '@lib/Divider';
import { SIZE_OPTIONS, TYPE_OPTIONS } from '@global/const';

type TypeOfButton = Omit<typeof Button, 'onClick'>;
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
      options: TYPE_OPTIONS,
      control: {
        type: 'select',
      },
    },
    size: {
      options: SIZE_OPTIONS,
      control: {
        type: 'select',
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
  },
};

// meta.

export default meta;

type Story = StoryObj<TypeOfButton>;

export const Base: Story = {
  render(args) {
    return <Button {...args}>Click</Button>;
  },
};

export const Demo: Story = {
  render(args) {
    return (
      <>
        <SectionDivider>SIZE</SectionDivider>
        <div className="space-x-5">
          <Button size="small">Small</Button>
          <Button>Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <SectionDivider>TYPES</SectionDivider>
        <div className="space-x-5">
          <Button buttonType="success">SUCCESS</Button>
          <Button buttonType="error">ERROR</Button>
          <Button buttonType="primary">PRIMARY</Button>
          <Button buttonType="secondary">SECONDARY</Button>
          <Button buttonType="tertiary">TERTIARY</Button>
          <Button buttonType="ghost">GHOST</Button>
        </div>
        <SectionDivider>LOADING</SectionDivider>
        <div className="space-x-5">
          <Button loading buttonType="success">
            SUCCESS
          </Button>
          <Button loading buttonType="error">
            ERROR
          </Button>
          <Button loading buttonType="primary">
            PRIMARY
          </Button>
          <Button loading buttonType="secondary">
            SECONDARY
          </Button>
          <Button loading buttonType="tertiary">
            TERTIARY
          </Button>
          <Button loading buttonType="ghost">
            GHOST
          </Button>
        </div>
      </>
    );
  },
};
