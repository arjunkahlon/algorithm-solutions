/* eslint-disable no-unused-vars */

function isIsogram(str) {
  const strArr = str.toLowerCase().split('');
  return new Set(strArr).size === strArr.length;
}
