"use strict";
function findOdd(arr) {
    let map = new Map();
    arr.forEach(num => map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1));
    for (const [key, value] of map) {
        if (value % 2 === 1) {
            return key;
        }
    }
    return arr[0];
}
console.log(findOdd([7]), 7);
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
