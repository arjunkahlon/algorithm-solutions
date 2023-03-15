/* eslint-disable no-unused-vars */

function validParentheses(parens) {
  // your code here ..
  let unmatched = 0;

  for (let i = 0; i < parens.length && unmatched >= 0; i++) {
    if (parens[i] === '(') {
      unmatched += 1;
    } else {
      unmatched -= 1;
    }
  }

  return (unmatched === 0);
}
