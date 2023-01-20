/* eslint-disable no-unused-vars */

function solution(s, t) {
  const sArr = s.split('');

  for (let i = 0; i < t.length; i++) {
    const indexMatch = sArr.indexOf(t[i]);

    if (indexMatch !== -1) {
      sArr.splice(indexMatch, 1);
    }
  }
  return sArr.length;
}
