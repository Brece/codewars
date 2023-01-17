"use strict";
function maxSequence(arr) {
    // check if array only consists of positive numbers
    if (!arr.filter(e => e < 0).length) {
        return arr.reduce((a, b) => a + b, 0);
    }
    // array has at least on negative number, now check if there is at least one positive number
    // otherwise return 0
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr[i], sequenceSum = currentSum, pos = false;
        for (let j = i + 1; j < arr.length; j++) {
            sequenceSum += arr[j];
            if (sequenceSum > currentSum) {
                currentSum = sequenceSum;
            }
            // check in the first loop in order the exit as early as possible
            if ((i === 0) && (arr[i] >= 0 || arr[j] >= 0)) {
                pos = true;
            }
        }
        if (currentSum > sum) {
            sum = currentSum;
        }
        if (i === 0) {
            if (!pos) {
                return 0;
            }
        }
    }
    return sum;
}
/**
function maxSequence(arr: number[]): number {
    let maxSum = 0,
        currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        
        if (currentSum <= 0) {
        currentSum = 0;
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
 */
console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([1, 4, 2, 1, 4]), 12);
console.log(maxSequence([-1, -4, -2, -1, -4]), 0);
