"use strict";
function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b).slice(-2);
}
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]), [45, 87]);
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]), [18, 83]);
