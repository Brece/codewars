function number(arr: string[]): string[] {
    return arr.map((l, i) => `${i + 1}: ${l}`);
}

console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers'); 
