/* eslint-disable no-unused-vars */

function commonCharacterCount(s1, s2) {
  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    const indexMatch = s2.indexOf(s1[i]);
    if (indexMatch !== -1) {
      counter++;
      s2 = s2.replace(s1[i], '');
    }
  }
  return counter;
}
