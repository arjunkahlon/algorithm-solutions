/* eslint-disable no-unused-vars */

function isIpV4Address(inputString) {
  const inputArray = inputString.split('.').map(x => {
    if (!isNaN(x)) {
      if (x.length > 1 && x[0] === '0') {
        return -1;
      }
      return parseInt(x);
    } else {
      return -1;
    }
  });

  if (inputArray.includes(-1)) {
    return false;
  }

  if (inputArray.length !== 4) {
    return false;
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (!(inputArray[i] >= 0) || !(inputArray[i] <= 255)) {
      return false;
    }
  }
  return true;
}
