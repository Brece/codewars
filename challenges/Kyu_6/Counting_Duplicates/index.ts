function duplicateCount(text: string):number {
    let map = new Map();
    let result = 0;
    for(let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    }
    for(const [key, value] of map) {
        if(value > 1) {
            result++;
        }
    }
    return result;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");