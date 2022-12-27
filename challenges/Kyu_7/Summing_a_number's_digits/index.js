"use strict";
function sumDigits(n) {
    return Math.abs(n).toString().split('').reduce((a, b) => a + Number(b), 0);
}
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
