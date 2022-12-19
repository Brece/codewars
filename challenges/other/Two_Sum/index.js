"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
function twoSum(arr, n) {
    const pairs = [];
    const nums = {};
    for (const num1 of arr) {
        const num2 = n - num1;
        nums[num2] ? pairs.push([num1, num2]) : nums[num1] = 1;
    }
    return pairs;
}
exports.twoSum = twoSum;
console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
