/* eslint-disable no-unused-vars */

function findOdd(a) {
  let counter = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return a[i];
    }
  }
}
