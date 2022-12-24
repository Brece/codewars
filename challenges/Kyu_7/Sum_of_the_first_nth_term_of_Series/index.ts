// series is: 1/((n - 1) * 2 + n)
// equals to: 1/(3n - 2)
function SeriesSum(n: number): string {
    let result = 0;

    for(let i = 1; i <= n; i++) {
        result += 1/(3 * i - 2);
    }
    return result.toFixed(2);
}

console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")
