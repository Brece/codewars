function squareDigits(num: number): number{
    return Number(
            String(num)
            .split('')
            .map(num => Number(num) ** 2).join('')
            );
}

console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(0)); // 0
