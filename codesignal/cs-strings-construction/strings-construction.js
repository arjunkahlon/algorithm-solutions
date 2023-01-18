/* eslint-disable no-unused-vars */

function stringsConstruction(a, b) {
  let counter = 0;
  const bStrList = b.split('');

  while ((bStrList.length - a.length) >= 0) {
    for (let i = 0; i < a.length; i++) {
      const indexMatch = bStrList.indexOf(a[i]);
      if (indexMatch >= 0) {
        bStrList.splice(indexMatch, 1);
      } else {
        return counter;
      }
    }
    counter++;
  }
  return counter;
}
