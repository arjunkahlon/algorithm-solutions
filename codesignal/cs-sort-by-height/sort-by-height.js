/* eslint-disable no-unused-vars */

function sortByHeight(a) {
  const filteredArr = a.filter(height => height !== -1);
  filteredArr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = filteredArr.shift();
    }
  }
  return a;
}
