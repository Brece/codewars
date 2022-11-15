"use strict";
function sortArray(array) {
    let oddSorted = array.filter(n => n % 2).sort((a, b) => b - a);
    return array.map(n => n % 2 ? oddSorted.pop() : n);
}
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
console.log(sortArray([-4, -18, -7, -37, -18, 24, 0, -32, 14, -20, 14]), [-4, -18, -37, -7, -18, 24, 0, -32, 14, -20, 14]);
