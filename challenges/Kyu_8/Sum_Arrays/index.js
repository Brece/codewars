"use strict";
function sum(numbers) {
    return numbers.length > 0 ? numbers.reduce((a, b) => a + b) : 0;
}
function sum2(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum([])); // 0
console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
