/* eslint-disable no-unused-vars */

function moveZeros(arr) {
  const zeroArr = [];
  while (arr.indexOf(0) !== -1) {
    const [element] = arr.splice(arr.indexOf(0), 1);
    zeroArr.push(element);
  }

  return arr.concat(zeroArr);
}
