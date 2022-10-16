"use strict";
function findAverage(array) {
    if (array.length > 0) {
        return (array.reduce((a, b) => a + b) / array.length);
    }
    return 0;
}
console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
