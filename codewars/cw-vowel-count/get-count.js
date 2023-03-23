/* eslint-disable no-unused-vars */

const getCount = function (str) {
  const vowelStr = str.match(/[aeiou]/gi);
  return vowelStr ? vowelStr.length : 0;
};
