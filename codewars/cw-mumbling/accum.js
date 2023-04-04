/* eslint-disable no-unused-vars */

function accum(s) {
  return s.split('').map((e, index) => {
    return index === s.length - 1
      ? e.toUpperCase() + e.toLowerCase().repeat(index)
      : e.toUpperCase() + e.toLowerCase().repeat(index) + '-';
  }).join('');
}
