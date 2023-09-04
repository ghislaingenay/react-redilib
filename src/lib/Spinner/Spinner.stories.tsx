import { SectionDivider } from '@lib/Divider';
import { Spinner } from './Spinner';
import type { StoryObj, Meta } from '@storybook/react';
import { SIZE_OPTIONS, TYPE_OPTIONS } from '@global/const';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      name: 'type',
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
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Base: Story = {
  render(args) {
    return <Spinner {...args} />;
  },
};

const showSpanLoadingClass =
  'p-3 rounded-lg flex justify-center gap-2 items-center leading-none capitalize';
const spanProps = { className: showSpanLoadingClass };

export const Demo: Story = {
  render(args) {
    return (
      <>
        <SectionDivider>SIZE</SectionDivider>
        <div className="flex flex-wrap gap-5">
          <span {...spanProps}>
            small: <Spinner size="small" />
          </span>
          <span {...spanProps}>
            medium: <Spinner />
          </span>
          <span {...spanProps}>
            large: <Spinner size="large" />
          </span>
        </div>
        <SectionDivider>COLOURS (MEDIUM SIZE)</SectionDivider>
        <div className="flex flex-wrap gap-5">
          {TYPE_OPTIONS.map((type) => (
            <span {...spanProps}>
              {type} <Spinner buttonType={type} />
            </span>
          ))}
        </div>
      </>
    );
    //     return (

    //       <div className="flex justify-center items-center">
    //         <Spinner {...args} />
    //       </div>
    //     );
  },
};
