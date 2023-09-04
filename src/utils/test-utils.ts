import { render } from '@testing-library/react';
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

export const getFirstComponentChild = (element: JSX.Element) => {
  const {
    container: { firstChild },
  } = render(element);
  return firstChild;
};

export const getComponentClassList = (element: ChildNode | null) => {
  if (!element) throw new TypeError('element is null');
  const classList = getClassListInHTMLElement(element);
  return classList;
};

export const elementContainsClass = (
  JSXElt: JSX.Element,
  classLikeName: string
) => {
  const element = getFirstComponentChild(JSXElt);
  const classList = getComponentClassList(element);
  const reg = new RegExp(classLikeName, 'gi');
  const foundClass = classList.find((className) => reg.test(className));
  if (!foundClass) return false;
  return true;
};
