"use strict";
function solution(number) {
    if (number === 0) {
        return 0;
    }
    ;
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
const case1 = solution(10); // 3, 5, 6, 9 = 23
const case2 = solution(15); // 3, 5, 6, 9, 10, 12 = 45
const case3 = solution(-1);
const case4 = solution(20);
console.log("case1:", case1);
console.log("case2:", case2);
console.log("case3:", case3);
console.log("case4:", case4);
