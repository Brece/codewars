function highestRank(arr: number[]): number | undefined {
    const map: { [key: number]: number } = {};
    let result = undefined;

    arr.forEach(n => map[n] = map[n] + 1 || 1);

    for(let num in map) {
        if(!result) { result = Number(num) }
        if(map[num] > map[result]) { result = Number(num) }
        if(map[num] === map[result]) { result = Math.max(Number(num), result) }
    }
    return result;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12);
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);
