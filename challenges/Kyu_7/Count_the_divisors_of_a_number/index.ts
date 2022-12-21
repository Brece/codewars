function getDivisorsCnt(n: number): number {
    let sum = 1;

    for(let i = 1, limit = n/2; i <= limit; i++) {
        if(n % i === 0) { sum++ }
    }
    return sum;
}

export = getDivisorsCnt;

console.log(getDivisorsCnt(1),  1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
