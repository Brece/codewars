function dontGiveMeFive(start: number, end: number): number {
    let sum = 0;

    for(let i = start; i <= end; i++) {
        if(!(i).toString().split('').some(n => n === '5')) { sum++ }
        // if(!/5/.test(i)) { sum++ }
    }
    return sum;
}

console.log(dontGiveMeFive(1,9), 8);
console.log(dontGiveMeFive(4,17), 12);
