import { isPropsJSX } from '@utils';

// null or undefined cannot be tested due to TypeScript error
//  Same for fragment

describe('isPropsJSX', () => {
  it('should return false if input is a string of JSX', () => {
    const JSX = '<div>test</div>';
    expect(isPropsJSX(JSX)).toBe(false);
  });

  it('should return false if input is empty string', () => {
    const JSX = '';
    expect(isPropsJSX(JSX)).toBe(false);
  });

  it('should return false if input is a string ', () => {
    const JSX = 'test';
    expect(isPropsJSX(JSX)).toBe(false);
  });
  it('should return true if input is JSX with span', () => {
    const JSX = <span>test</span>;
    expect(isPropsJSX(JSX)).toBe(true);
  });
  it('should return true if input is JSX with closing bracket', () => {
    const JSX = <hr />;
    expect(isPropsJSX(JSX)).toBe(true);
  });
});
