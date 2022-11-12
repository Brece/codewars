"use strict";
/*
function uniqueInOrder(iterable: string|number[]): (string|number)[] {
    let arr = [...iterable];
    let uniqueArr: (string|number)[] = [];

    arr.forEach((item, index, array) => {
        if(item !== array[index + 1]) {
            uniqueArr.push(item);
        }
    });

    return uniqueArr;
}
*/
function uniqueInOrder(iterable) {
    return [...iterable].filter((item, index) => item !== iterable[index - 1]);
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
