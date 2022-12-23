"use strict";
function stray(numbers) {
    let map = {};
    let odd = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (!map[numbers[i]]) {
            map[numbers[i]] = 1;
        }
        else {
            map[numbers[i]] += 1;
        }
    }
    for (const num in map) {
        if (map[num] === 1) {
            odd = Number(num);
        }
    }
    return odd;
}
console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
