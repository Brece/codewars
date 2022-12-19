"use strict";
// n-th row has n entries, so the previous rows have (n-1) + (n-2) + (n-3)...+ 1 entries
// the starting number of the current row is the number of entries of the previous rows TIMES 2, PLUS 1
function rowSumOddNumbers(n) {
    // get starting odd number
    let startingNum = consecutiveSum(n - 1) * 2 + 1;
    let sum = startingNum;
    // start with "i = 1" since sum starts as the first odd number in the current row
    for (let i = 1, j = startingNum; i < n; i++) {
        j += 2;
        sum += j;
    }
    return sum;
}
function consecutiveSum(n) {
    return n <= 1 ? n : n + consecutiveSum(n - 1);
}
/**
 * Mathematical approach:
 *
export function rowSumOddNumbers(n: number) {
  // const amountOfUsedNumbers = (n / 2) * (n - 1);
  // const rowStartingNumber = amountOfUsedNumbers * 2 + 1;
  // const rowEndingNumer = (n - 1) * 2 + rowStartingNumber;
  // const sum = ((rowStartingNumber + rowEndingNumer) / 2) * n;

  // after simplification of all above you will get n^3

  return n * n * n;
}
 */
console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(42), 74088);
module.exports = rowSumOddNumbers;
