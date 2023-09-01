// import domTestingLib from '@testing-library/dom';
// const { queryHelpers } = domTestingLib;

// export const queryByTestId = queryHelpers.queryByAttribute.bind(
//   null,
//   'data-test-id'
// );
// export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
//   null,
//   'data-test-id'
// );

export const getClassListInHTMLElement = (element: ChildNode | null) => {
  if (!element) return [];
  return (element as HTMLElement).className.split(' ');
};
