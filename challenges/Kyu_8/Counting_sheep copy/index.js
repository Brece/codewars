"use strict";
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((a, b) => b ? a + 1 : a, 0);
}
function countSheepsAlternative(arr) {
    return arr.filter(Boolean).length;
}
console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])); // 17
