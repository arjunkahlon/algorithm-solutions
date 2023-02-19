/* eslint-disable no-unused-vars */

function humanReadable(seconds) {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.floor(minutes % 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return hours.toString().padStart(2, '0') +
    ':' + remainingMinutes.toString().padStart(2, '0') +
      ':' + remainingSeconds.toString().padStart(2, '0');
}
