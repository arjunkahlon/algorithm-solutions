/* eslint-disable no-unused-vars */

function allLongestStrings(inputArray) {
  let longestLength = 0;
  let longestStrArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    const indexLength = inputArray[i].length;

    if (indexLength > longestLength) {
      longestLength = indexLength;
      longestStrArr = [inputArray[i]];
    } else if (indexLength === longestLength) {
      longestStrArr.push(inputArray[i]);
    }
  }
  return longestStrArr;
}
