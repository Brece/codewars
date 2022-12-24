"use strict";
function divisors(n) {
    let result = [];
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result.length ? result : `${n} is prime`;
}
console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
