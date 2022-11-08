function persistence(num: number): number {
    if(num.toString().length === 1) { return 0 }

    let iterations = 1;
    let sum = num.toString().split('').reduce((a, b) => Number(a) * Number(b), 1);

    while(sum > 9) {
        sum = sum.toString().split('').reduce((a, b) => Number(a) * Number(b), 1);
        iterations++;
    }
    return iterations;
}

/**
function persistence(num) {
    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
}
 */

console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);
