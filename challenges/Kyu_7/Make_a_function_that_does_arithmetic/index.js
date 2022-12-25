"use strict";
function arithmetic(a, b, operator) {
    const operators = {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b
    };
    return operators[operator];
}
console.log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
console.log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
