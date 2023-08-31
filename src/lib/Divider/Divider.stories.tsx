import { SectionDivider } from './SectionDivider';

export default {
  title: 'SectionDivider',
  component: SectionDivider,
};

export const withoutChildren = () => <SectionDivider />;
export const withChildren = () => <SectionDivider>App</SectionDivider>;
