"use strict";
/**
function score(dice: number[]): number {
    let result = 0;
    let map: { [key: string]: number } = {};

    dice.forEach(n => map[n] = map[n] + 1 || 1);
    
    for(let num in map) {
        let rest = map[num] - 3;

        switch(num) {
            case '1':
                if(rest === 0) {
                    result += 1000;
                } else if(rest > 0) {
                    result += 1000 + rest * 100;
                } else {
                    result += Math.abs(map[num]) * 100;
                }
                break;
            case '2':
                if(rest >= 0) {
                    result += 200;
                }
                break;
            case '3':
                if(rest >= 0) {
                    result += 300;
                }
                break;
            case '4':
                if(rest >= 0) {
                    result += 400;
                }
                break;
            case '5':
                if(rest === 0) {
                    result += 500;
                } else if(rest > 0) {
                    result += 500 + rest * 50;
                } else {
                    result += Math.abs(map[num]) * 50;
                }
                break;
            default:
                if(rest >= 0) {
                    result += 600;
                }
        }
    }
    return result;
}
 */
function score(dice) {
    let triplets = {
        '1': 1000,
        '6': 600,
        '5': 500,
        '4': 400,
        '3': 300,
        '2': 200,
    };
    let single = {
        '1': 100,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 50,
        '6': 0,
    };
    let result = 0;
    let map = {};
    dice.forEach(n => map[n] = map[n] + 1 || 1);
    for (let n in map) {
        map[n] >= 3
            ? result += triplets[n] + single[n] * (map[n] - 3)
            : result += single[n] * map[n];
    }
    return result;
}
console.log(score([2, 3, 4, 6, 2]), 0, "Should be 0 :-(");
console.log(score([4, 4, 4, 3, 3]), 400, "Should be 400");
console.log(score([2, 4, 4, 5, 4]), 450, "Should be 450");
