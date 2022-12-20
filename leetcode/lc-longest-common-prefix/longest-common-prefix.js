/* eslint-disable no-unused-vars */

const longestCommonPrefix = function (strs) {

  if (!strs || !strs.length) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};
