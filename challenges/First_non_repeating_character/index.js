"use strict";
function first_non_repeating_letter(string) {
    if (!string) {
        return '';
    }
    let subString = string.slice().toLowerCase();
    let repeatingLetters = [];
    for (let i = 0; i < string.length; i++) {
        if (subString.length > 1) {
            subString = subString.slice(1);
            if (!subString.includes(string[i].toLowerCase())
                && !repeatingLetters.includes(string[i].toLowerCase())) {
                return string[i];
            }
            if (!repeatingLetters.includes(string[i].toLowerCase())) {
                repeatingLetters.push(string[i]);
            }
        }
        else {
            if (!repeatingLetters.includes(string[i].toLowerCase())) {
                return string[i];
            }
        }
    }
    return '';
}
const first_non_repeating_letter1 = first_non_repeating_letter('sTring'); // "s"
const first_non_repeating_letter2 = first_non_repeating_letter('raCEcaR'); // "e"
const first_non_repeating_letter3 = first_non_repeating_letter('d2ocld2ocl7wojp7wojp7qpdoj7qpdojaaraar7x6ow7x6owmaqklmaqkl3buha3buham2xbdm2xbdgag9sgag9spfrrgpfrrgr37zrr37zrv'); // "v"
const first_non_repeating_letter4 = first_non_repeating_letter(''); // ""
const first_non_repeating_letter5 = first_non_repeating_letter('52bc74d4ac05d0945d00054e'); // "2"
const first_non_repeating_letter6 = first_non_repeating_letter('abba'); // ""
console.log(first_non_repeating_letter1);
console.log(first_non_repeating_letter2);
console.log(first_non_repeating_letter3);
console.log(first_non_repeating_letter4);
console.log(first_non_repeating_letter5);
console.log(first_non_repeating_letter6);
