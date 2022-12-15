"use strict";
function digPow(n, p) {
    let arr = n.toString().split('');
    let sum = 0;
    arr.forEach((num, index) => {
        sum += Math.pow(Number(num), (p + index));
    });
    return sum % n === 0 ? sum / n : -1;
}
console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);
