function twoOldestAges(ages: number[]): number[] {
    let sorted = ages.sort((a, b) => a - b);
    return [sorted[sorted.length - 2], sorted[sorted.length - 1]];
}

console.log(twoOldestAges([1,5,87,45,8,8]), [45, 87]);
console.log(twoOldestAges([6,5,83,5,3,18]), [18, 83]);
