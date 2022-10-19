"use strict";
function squareRootApproximation(x) {
    let temp = x / 2;
    while (Math.round(temp * temp) !== x) {
        if (Math.round(temp * temp) > x) {
            temp = Number((temp / 2).toFixed(5));
        }
        else {
            temp += Number((temp / 2).toFixed(5));
        }
    }
    return temp;
}
function squareRoot(x) {
    return Number((x ** 0.5).toFixed(5));
}
console.log(squareRoot(81)); // 9
console.log(squareRoot(15)); // 3.87298
console.log(squareRoot(21)); // 4.58258
console.log(squareRoot(36)); // 6
console.log(squareRoot(9)); // 3
