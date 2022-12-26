"use strict";
function factorial(n) {
    if (n < 0 || n > 12) {
        return new RangeError('Number invalid. Must be positive and less than 12 (inclusive).');
    }
    return n < 2 ? 1 : n * factorial(n - 1);
}
console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");
console.log(factorial(-2), 'Error', "factorial for -2 throws an error");
console.log(factorial(14), 'Error', "factorial for 14 throws an error");
