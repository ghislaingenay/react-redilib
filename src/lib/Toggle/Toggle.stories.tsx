import type { StoryObj, Meta } from '@storybook/react';
import { Toggle } from './Toggle';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toggle>;

const LoadingToggle = () => {
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsChecking((prev) => !prev);
    }, 2000);
  }, [isChecking]);

  // add random color system nd give user teh choice

  return (
    <div className="grid h-screen relative">
      <div className="place-self-center">
        <Toggle
          isToggled={isChecking}
          className="bg-purple-500 h-4 w-10 scale-[400%] py-10 px-6 border-4 border-purple-500 rounded-full checked:bg-orange-500"
        />
      </div>
      {/* <div className="place-self-center absolute rotate-90">
        <Toggle
          isToggled={!isChecking}
          className="bg-purple-500 h-5 w-14 scale-[400%] checked:bg-orange-500"
        />
      </div> */}
    </div>
  );
};

export const Base: Story = {
  render(args) {
    return <Toggle {...args} />;
  },
};

export const ToggleLoading: Story = {
  render() {
    return <LoadingToggle />;
  },
};
