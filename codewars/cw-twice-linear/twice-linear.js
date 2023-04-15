/* eslint-disable no-unused-vars */

function dblLinear(n) {

  const u = [1];
  let index = 0;

  while (true) {
    const y = (2 * u[index]) + 1;
    const z = (3 * u[index]) + 1;

    if (!(u.includes(y))) {
      u.push(y);
    }

    if (!(u.includes(z))) {
      u.push(z);
    }

    if (u.length >= n * 10) {
      break;
    }

    index++;
  }
  const sortedArr = [...new Set(u)].sort((a, b) => a - b);
  return sortedArr[n];
}
