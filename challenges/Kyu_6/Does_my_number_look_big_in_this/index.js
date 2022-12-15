"use strict";
function narcissistic(value) {
    let arr = value.toString().split('');
    let pow = arr.length;
    let result = 0;
    arr.forEach(n => result += Math.pow(Number(n), pow));
    return value === result;
}
console.log(narcissistic(7), true, "7 is narcissistic");
console.log(narcissistic(371), true, "371 is narcissistic");
console.log(narcissistic(153), true, "153 is narcissistic");
console.log(narcissistic(1652), false, "1652 is not narcissistic");
