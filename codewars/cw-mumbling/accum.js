/* eslint-disable no-unused-vars */

function accum(s) {
  return s.split('').map(
    (e, index) => e.toUpperCase() + e.toLowerCase().repeat(index)
  ).join('-');
}
