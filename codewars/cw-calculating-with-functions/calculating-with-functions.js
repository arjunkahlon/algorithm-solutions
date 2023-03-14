/* eslint-disable no-unused-vars */

function zero(f) { return f ? f(0) : 0; }
function one(f) { return f ? f(1) : 1; }
function two(f) { return f ? f(2) : 2; }
function three(f) { return f ? f(3) : 3; }
function four(f) { return f ? f(4) : 4; }
function five(f) { return f ? f(5) : 5; }
function six(f) { return f ? f(6) : 6; }
function seven(f) { return f ? f(7) : 7; }
function eight(f) { return f ? f(8) : 8; }
function nine(f) { return f ? f(9) : 9; }

function plus(b) { return function (a) { return a + b; }; }
function minus(b) { return function (a) { return a - b; }; }
function times(b) { return function (a) { return a * b; }; }
function dividedBy(b) { return function (a) { return a / b; }; }
