function solve(str: string): number {
    let subStr = str.split(/[aeiou]+/)
        .map(sub => {
            if(sub.length) {
                return sub.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0)
            }
            return 0;
        });

    return Math.max(...subStr);
}

console.log(solve("zodiac"),26);
console.log(solve("chruschtschov"),80);
console.log(solve("khrushchev"),38);
console.log(solve("strength"),57);
console.log(solve("catchphrase"),73);
console.log(solve("twelfthstreet"),103);
console.log(solve("mischtschenkoana"),80);
