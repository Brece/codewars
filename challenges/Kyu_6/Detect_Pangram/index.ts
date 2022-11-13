function isPangram(str: string): boolean {
    let alphaArr = str.toLowerCase().split('').filter(char => char.match(/[a-z]/));
    let newSet = new Set(alphaArr);

    return newSet.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
console.log(isPangram("test2"), false);
