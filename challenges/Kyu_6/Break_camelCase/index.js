"use strict";
function solution(str) {
    return str.replace(/([A-Z])/g, ' $1');
}
/*
function solution(text) {
    return text.split(/(?=[A-Z])/).join(' ');
}
*/
console.log(solution('camelCasing'), 'camel Casing');
console.log(solution('camelCasingTest'), 'camel Casing Test');
