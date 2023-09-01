import { setTestIdProps } from '@utils';

describe('setTestIDProps', () => {
  it('should set testID prop', () => {
    const props = setTestIdProps('test');
    expect(props).toEqual({ 'data-testid': 'test' });
  });

  it('should not set testId prop if empty string', () => {
    const props = setTestIdProps('');
    expect(props).toEqual({});
  });

  it('should not set testId prop if undefined', () => {
    const props = setTestIdProps(undefined);
    expect(props).toEqual({});
  });
});
