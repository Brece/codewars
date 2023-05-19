function zero(f?: Function): number {
	return f ? f(0) : 0;
}
function one(f?: Function): number {
	return f ? f(1) : 1;
}
function two(f?: Function): number {
	return f ? f(2) : 2;
}
function three(f?: Function): number {
	return f ? f(3) : 3;
}
function four(f?: Function): number {
	return f ? f(4) : 4;
}
function five(f?: Function): number {
	return f ? f(5) : 5;
}
function six(f?: Function): number {
	return f ? f(6) : 6;
}
function seven(f?: Function): number {
	return f ? f(7) : 7;
}
function eight(f?: Function): number {
	return f ? f(8) : 8;
}
function nine(f?: Function): number {
	return f ? f(9) : 9;
}

function plus(n: number): Function {
	return (m: number) => m + n;
}
function minus(n: number): any {
	return (m: number) => m - n;
}
function times(n: number): any {
	return (m: number) => m * n;
}
function dividedBy(n: number): any {
	return (m: number) => Math.floor(m / n);
}

console.log(zero(plus(one())), 1);
console.log(seven(times    (five ())), 35);
console.log(four (plus     (nine ())), 13);
console.log(eight(minus    (three())),  5);
console.log(six  (dividedBy(two  ())),  3);