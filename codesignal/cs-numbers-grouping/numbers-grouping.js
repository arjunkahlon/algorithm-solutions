/* eslint-disable no-unused-vars */

function numbersGrouping(a) {
  const set = new Set(a.map(x => {
    return Math.ceil(x / 10000);
  })).size;

  return a.length + set;

}
