import { setTestIdProps } from '@utils';
import { DividerProps } from '@types';
import React from 'react';

export const SectionDivider = ({ children, testId }: DividerProps) => {
  return (
    <div aria-labelledby="section divider" {...setTestIdProps(testId)}>
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
          className=" border-black border-1 m-0 my-5"
          aria-hidden="true"
          role="presentation"
        />
      )}
    </div>
  );
};
