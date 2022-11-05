function countBits(n: number): number {
    return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b) , 0);
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);