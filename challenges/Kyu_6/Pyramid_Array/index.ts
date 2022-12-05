function pyramid(n: number): Array<number[]> {
    let result: Array<number[]> = [];

    for(let i = 0; i < n; i++) {
        result.push(new Array(i + 1).fill(1));
    }
    return result;
}

console.log(pyramid(0), []);
console.log(pyramid(1), [[1]]);
console.log(pyramid(2), [[1], [1, 1]]);
console.log(pyramid(3), [[1], [1, 1], [1, 1, 1]]);
