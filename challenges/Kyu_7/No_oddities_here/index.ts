function noOdds(arr: number[]): number[] {
    return arr.filter(n => !(n % 2));
}

console.log(noOdds([0,1]), [0]);
console.log(noOdds([0,1,2,3]), [0,2]);
