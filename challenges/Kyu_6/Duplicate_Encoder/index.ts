function duplicateEncode(word: string): string {
    const temp = word.toLowerCase();

    return temp.split('').map(char => temp.indexOf(char) === temp.lastIndexOf(char) ? '(' : ')').join('');
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");
console.log(duplicateEncode("Supralapsarian"),")()))()))))()(");
console.log(duplicateEncode("JaGzJlJPJJJ"),")((()()()))");
