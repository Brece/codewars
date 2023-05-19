"use strict";
function zero(f) {
    return f ? f(0) : 0;
}
function one(f) {
    return f ? f(1) : 1;
}
function two(f) {
    return f ? f(2) : 2;
}
function three(f) {
    return f ? f(3) : 3;
}
function four(f) {
    return f ? f(4) : 4;
}
function five(f) {
    return f ? f(5) : 5;
}
function six(f) {
    return f ? f(6) : 6;
}
function seven(f) {
    return f ? f(7) : 7;
}
function eight(f) {
    return f ? f(8) : 8;
}
function nine(f) {
    return f ? f(9) : 9;
}
function plus(n) {
    return (m) => m + n;
}
function minus(n) {
    return (m) => m - n;
}
function times(n) {
    return (m) => m * n;
}
function dividedBy(n) {
    return (m) => Math.floor(m / n);
}
console.log(zero(plus(one())), 1);
console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
