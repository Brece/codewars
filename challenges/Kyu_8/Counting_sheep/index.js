"use strict";
function count_sheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((a, b) => b ? a + 1 : a, 0);
}
function count_sheeps2(arr) {
    return arr.filter(Boolean).length;
}
console.log(count_sheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true])); // 17
