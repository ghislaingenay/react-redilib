export function isPropsJSX(input: string | JSX.Element): boolean {
  // const HTML_REGEX = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/gm;
  const isHTML = typeof input === 'object';
  return isHTML;
}

// type IsPropsJSXParams = string | JSX.Element;
// type IsPropsHTMLParams = IsPropsJSXParams | HTMLElement;

// export function isPropsHTML(input: IsPropsHTMLParams): boolean {
//   const HTML_REGEX = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/gm;
//   if (isPropsJSX(input as IsPropsJSXParams)) return false;
//   const haveOuterText = (input as HTMLElement)?.outerText
//     ? (input as HTMLElement)?.outerText
//     : undefined;
//   if (!haveOuterText) return false;
//   return typeof haveOuterText === 'string' && HTML_REGEX.test(haveOuterText);
// }
