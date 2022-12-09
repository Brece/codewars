"use strict";
function parse(data) {
    let n = 0;
    let result = [];
    for (let c of data) {
        switch (c) {
            case 'i':
                n++;
                break;
            case 'd':
                n--;
                break;
            case 's':
                n = n * n;
                break;
            case 'o':
                result.push(n);
                break;
            default:
                break;
        }
    }
    return result;
}
console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64]);
