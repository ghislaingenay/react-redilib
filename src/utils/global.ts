export const setTestIdProps = (testId?: string) =>
  typeof testId === 'string' && testId !== '' ? { 'data-testid': testId } : {};
