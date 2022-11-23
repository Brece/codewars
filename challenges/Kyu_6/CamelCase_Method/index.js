"use strict";
String.prototype.camelCase = function () {
    return this.split(' ').map(w => w.match(/\w/) ? w[0].toUpperCase() + w.slice(1) : '').join('');
};
console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
