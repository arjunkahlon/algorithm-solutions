/* eslint-disable no-unused-vars */

function pigIt(str) {
  return str.split(' ').map(
    element => {
      return element.slice(1, element.length) + element.slice(0, 1) + 'ay';
    }).join(' ');
}
