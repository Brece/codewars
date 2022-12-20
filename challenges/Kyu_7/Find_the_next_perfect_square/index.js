"use strict";
function findNextSquare(sq) {
    const squareRoot = Math.sqrt(sq);
    return squareRoot === Math.floor(squareRoot) ? Math.pow(squareRoot + 1, 2) : -1;
}
console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(15241383936), 15241630849);
console.log(findNextSquare(155), -1);
console.log(findNextSquare(342786627), -1);
