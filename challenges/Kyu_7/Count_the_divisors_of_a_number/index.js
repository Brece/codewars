"use strict";
function getDivisorsCnt(n) {
    let sum = 1;
    for (let i = 1, limit = n / 2; i <= limit; i++) {
        if (n % i === 0) {
            sum++;
        }
    }
    return sum;
}
console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
module.exports = getDivisorsCnt;
