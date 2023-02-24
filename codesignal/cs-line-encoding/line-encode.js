/* eslint-disable no-unused-vars */

function solution(s) {
  const groupArr = s.match(/([a-z])\1*/g);

  return groupArr.map(element => {
    const char = element[0];
    return element.length > 1
      ? element.length + char
      : char;
  }).join('');
}
