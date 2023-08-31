import { DividerProps } from 'index';

export const SectionDivider = ({ children, testId }: DividerProps) => {
  const testIdProps = testId ? { 'data-testid': testId } : {};
  return (
    <div aria-labelledby="section divider" {...testIdProps}>
      {children ? (
        <div className="flex flex-row gap-x-2 items-center my-2">
          <hr
            className="flex flex-auto border-black border-1 m-0 box-border my-auto"
            aria-hidden="true"
            role="presentation"
          />
          <h5 className="flex flex-shrink justify-center font-bold text-base uppercase">
            {children}
          </h5>
          <hr
            className="flex flex-auto border-black border-1 m-0 box-border my-auto"
            role="presentation"
            aria-hidden="true"
          />
        </div>
      ) : (
        <hr
          className=" border-black border-1 m-0 my-2"
          aria-hidden="true"
          role="presentation"
        />
      )}
    </div>
  );
};
