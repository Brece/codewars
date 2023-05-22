"use strict";
function lastDigit(str1, str2) {
    if (str2 === '0') {
        return 1;
    }
    // define cyles of returning patterns
    const cycles = {
        '0': [0, 0, 0, 0],
        '1': [1, 1, 1, 1],
        '2': [2, 4, 8, 6],
        '3': [3, 9, 7, 1],
        '4': [4, 6, 4, 6],
        '5': [5, 5, 5, 5],
        '6': [6, 6, 6, 6],
        '7': [7, 9, 3, 1],
        '8': [8, 4, 2, 6],
        '9': [9, 1, 9, 1],
    };
    const cycle = str1[str1.length - 1];
    const cycleArray = cycles[cycle];
    // Javascript can't compute with large numbers;
    // to calculate the index in the cycle we only need the last two digits of the second string
    const index = Number(str2.slice(-2)) % 4;
    // correct offset to zero index
    return cycleArray[index === 0 ? 3 : index - 1];
}
console.log(lastDigit("4", "1"), 4);
console.log(lastDigit("4", "2"), 6);
console.log(lastDigit("9", "7"), 9);
console.log(lastDigit("7", "7"), 3);
console.log(lastDigit("10", "10000000000"), 0);
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);
