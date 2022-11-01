/* eslint-disable no-unused-vars */

function areSimilar(a, b) {
  const aMismatch = [];
  const bMismatch = [];

  if (a.join('') === b.join('')) {
    return true;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      aMismatch.push(a[i]);
      bMismatch.unshift(b[i]);
    }
  }

  if (aMismatch.join('') === bMismatch.join('')) {
    return true;
  }

  return false;
}
