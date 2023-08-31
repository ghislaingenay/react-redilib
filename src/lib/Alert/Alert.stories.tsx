import type { StoryObj, Meta } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;

export const Base: Story = {
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'error'],
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
  },
};

/** Demo to show what this component can do */
type Story = StoryObj<typeof Alert>;
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
