"use strict";
const summation = function (num) {
    let result = num;
    return num === 1 ? 1 : result += summation(num - 1);
};
const summation_2 = function (num) {
    return num * (num + 1) / 2;
};
console.log(summation(1)); // 1
console.log(summation(2)); // 3
console.log(summation(8)); // 36
