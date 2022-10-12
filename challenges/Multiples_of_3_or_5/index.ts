function solution(number: number): number {
    if (number === 0) { return 0 };

    let sum: number = 0;

    for (let i = 1; i < number; i++) {
        if (i%3 === 0 || i%5 === 0) { sum += i }
    }
    return sum;
}

const solution1 = solution(10); // 3, 5, 6, 9 = 23
const solution2 = solution(15); // 3, 5, 6, 9, 10, 12 = 45
const solution3 = solution(-1);
const solution4 = solution(20);

console.log("case1:", solution1);
console.log("case2:", solution2);
console.log("case3:", solution3);
console.log("case4:", solution4);
