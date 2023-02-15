/* eslint-disable no-unused-vars */

function solution(st) {

  if (st === st.split('').reverse().join('')) {
    return st;
  }

  const lastChar = st[st.length - 1];
  let substr = st.substr(0, st.length - 1);
  let search = null;
  let index = null;

  while (search !== -1) {
    search = substr.lastIndexOf(lastChar);

    if (search === -1) {
      break;
    }

    index = search;
    substr = substr.slice(0, index) + substr.slice(index + 1);
  }

  return st + substr.split('').slice(0, index).reverse().join('');

}
