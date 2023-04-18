/* eslint-disable no-unused-vars */

function toCamelCase(str) {
  const wordArr = str.split('');
  return wordArr.map((e, index) => {
    return (e === '-' || e === '_')
      ? wordArr.splice(index + 1, 1).toString().toUpperCase()
      : e;
  }).join('');

}
