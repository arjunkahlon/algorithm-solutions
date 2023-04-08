/* eslint-disable no-unused-vars */

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const positionText = [];

  text.toLowerCase().split('').forEach(element => {
    const index = alphabet.indexOf(element);
    if (index !== -1) {
      positionText.push(index + 1);
    }
  });
  return positionText.join(' ');
}
