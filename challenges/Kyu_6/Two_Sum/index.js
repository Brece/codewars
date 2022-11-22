"use strict";
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(twoSum([1, 2, 3], 4), [0, 2]);
console.log(twoSum([1234, 5678, 9012], 14690), [1, 2]);
console.log(twoSum([2, 2, 3], 4), [0, 1]);
console.log(twoSum([2, 3, 1], 4), [1, 2]);
