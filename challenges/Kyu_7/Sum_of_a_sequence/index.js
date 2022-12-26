"use strict";
function sequenceSum(begin, end, step) {
    let sum = 0;
    for (let i = begin; i <= end; i += step) {
        sum += i;
    }
    return sum;
}
console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
