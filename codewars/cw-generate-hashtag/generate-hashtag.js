/* eslint-disable no-unused-vars */

function generateHashtag(str) {
  if (str.trim().length === 0) {
    return false;
  }

  const strArr = str.split(' ');
  const capStr = strArr.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');

  const hashtag = '#' + capStr;

  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}
