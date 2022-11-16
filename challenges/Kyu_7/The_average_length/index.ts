function averageLength(arr: string[]): string[] { 
    let averageLength = Math.round(arr.reduce((a, b) => a + b.length, 0) / arr.length);

    return arr.map(str => str[0].repeat(averageLength));
}

console.log(averageLength(['u', 'y']), ['u', 'y']);
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee']);