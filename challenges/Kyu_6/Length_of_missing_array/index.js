"use strict";
function getLengthOfMissingArray(arr) {
    if (!Array.isArray(arr) || !arr.length) {
        return 0;
    }
    // if a subarray happens to be not an array it will be placed on the first index in the sortedArr 
    // so that the code exits as early as possible in the next step
    let sortedArr = arr.sort((a, b) => Array.isArray(a) && Array.isArray(b) ? a.length - b.length : 1);
    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (!Array.isArray(sortedArr[i])
            || !Array.isArray(sortedArr[i + 1])
            || !sortedArr[i].length) {
            return 0;
        }
        if (sortedArr[i].length + 1 !== sortedArr[i + 1].length) {
            return sortedArr[i].length + 1;
        }
    }
    return 0;
}
console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3);
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(getLengthOfMissingArray([[null], [null, null, null], null]), 0);
console.log(getLengthOfMissingArray([null]), 0);
console.log(getLengthOfMissingArray(null), 0);
console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]), 5);
console.log(getLengthOfMissingArray([]), 0);
console.log(getLengthOfMissingArray([[2, 3, 1, 1, 1], [0, 1, 2, 4], [2, 3, 4], [2, 1, 3, 3, 1, 4, 3, 3, 2], [0, 1, 0, 1, 1, 3, 1, 4, 0, 2], [2, 3, 3, 3, 4, 0, 2, 2, 2, 2, 1, 3, 2], [2, 2, 1, 2, 4, 3, 4], [4, 1], [0, 0, 0, 4, 0, 1, 4, 1, 2, 3, 3], [0, 3, 2, 2, 1, 0], [1, 3, 1, 3, 0, 4, 0, 2]]), 12);
