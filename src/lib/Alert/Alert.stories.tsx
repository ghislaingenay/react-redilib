import type { StoryObj, Meta } from '@storybook/react';
import { Alert } from './Alert';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type TypeOfAlert = typeof Alert;
const meta: Meta<TypeOfAlert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<TypeOfAlert>;

export const Base: Story = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const PlaceholderText = canvas.getByText('Placeholder text...');
    expect(PlaceholderText).toBeInTheDocument();
  },
  argTypes: {
    type: {
      name: 'type',
      options: ['success', 'info', 'warning', 'error'],
      control: {
        type: 'select',
      },
    },
    message: {
      description: 'The message to display',
      control: {
        type: 'text',
      },
    },
    title: {
      description: 'The title to display',
      control: {
        type: 'text',
      },
    },
    haveBorder: {
      description: 'Whether to have a border or not',
      control: {
        type: 'boolean',
      },
    },
  },
};

/** Demo to show what this component can do */
export const Demo: Story = {
  name: 'Demo',
  // parameters: {
  //   controls: {
  //     exclude: /.*/,
  //   },
  // },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-10">
        <p>You select different types depending on your application needs</p>
        <Story />
      </div>
    ),
  ],
  render(args) {
    return (
      <div className="flex flex-col gap-10">
        <Alert
          type="success"
          title="Success"
          message="Please check again for more information"
        />
        <Alert
          type="info"
          title="Info"
          message="Please check again for more information"
        />
        <Alert
          type="warning"
          title="Warning"
          message="Please check again for more information"
        />
        <Alert
          type="error"
          title="Error"
          message="Please check again for more information"
        />
      </div>
    );
  },
};
