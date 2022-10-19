"use strict";
function shadesOfGrey(num) {
    let result = [];
    for (let i = 1; i <= Math.min(num, 254); i++) {
        let gray = ('0' + i.toString(16)).slice(-2);
        result.push(`#${gray.repeat(3)}`);
    }
    return result;
}
console.log(shadesOfGrey(-2)); // []
console.log(shadesOfGrey(-1)); // []
console.log(shadesOfGrey(0)); // []
console.log(shadesOfGrey(1)); // ["#010101"]
console.log(shadesOfGrey(2)); // ["#010101", "#020202"]
console.log(shadesOfGrey(3)); // ["#010101","#020202", "#030303"]
console.log(shadesOfGrey(4)); // ["#010101", "#020202", "#030303", "#040404"]
console.log(shadesOfGrey(5)); // ["#010101", "#020202", "#030303", "#040404", "#050505"]
console.log(shadesOfGrey(6)); // ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606"]
console.log(shadesOfGrey(7)); // ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707"]
console.log(shadesOfGrey(8)); // ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808"]
console.log(shadesOfGrey(9)); // ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909"]
console.log(shadesOfGrey(10)); // ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
console.log(shadesOfGrey(24));
console.log(shadesOfGrey(254));
