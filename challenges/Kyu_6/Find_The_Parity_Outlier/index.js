"use strict";
function findOutlier(integers) {
    let map = { 'odd': 0, 'even': 0 };
    for (let i = 0; i < 3; i++) {
        let n = integers[i] < 0 ? -integers[i] : integers[i];
        n % 2 === 0 ? map.even++ : map.odd++;
    }
    let rest = map.even < map.odd ? 1 : 0;
    return integers.filter(num => {
        let n = num < 0 ? -num : num;
        return n % 2 !== rest;
    })[0];
}
console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
