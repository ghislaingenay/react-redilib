import { SectionDivider } from './SectionDivider';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SectionDivider> = {
  title: 'Components/SectionDivider',
  component: SectionDivider,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'text',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionDivider>;

export const Divider: Story = {
  render(args) {
    return <SectionDivider {...args} />;
  },
};
// export const withChildren = () => {
//   <SectionDivider>App</SectionDivider>;
// };
