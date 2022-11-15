/* eslint-disable no-unused-vars */

function lateRide(n) {
  const hours = (Math.floor(n / 60)).toString();
  const minutes = (n - (hours * 60)).toString();

  const time = hours + minutes;
  let tally = 0;

  for (let i = 0; i < time.length; i++) {
    tally += parseInt(time[i]);
  }

  return tally;
}
