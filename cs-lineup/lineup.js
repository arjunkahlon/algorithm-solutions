/* eslint-disable no-unused-vars */

function lineup(commands) {
  let turns = 0; let sameDirection = 0;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'L' || commands[i] === 'R') {
      turns++;
    }

    if (turns % 2 === 0) {
      sameDirection++;
    }
  }
  return sameDirection;
}
