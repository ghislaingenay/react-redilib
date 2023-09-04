import type { StoryObj, Meta } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Base: Story = {
  render(args) {
    return <Toggle {...args} />;
  },
};
