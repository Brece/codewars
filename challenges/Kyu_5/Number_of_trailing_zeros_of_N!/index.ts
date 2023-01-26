function zeros (n: number): number {
	let result = 0;

	for(let i = 1, k = Math.log(n) / Math.log(5); i <= k; i++) {
		result += Math.floor(n / 5**i);
	}
	return result;
}

console.log(zeros(0), 0, "Testing with n = 0");
console.log(zeros(5), 1, "Testing with n = 5");
console.log(zeros(6), 1, "Testing with n = 6");
console.log(zeros(30), 7, "Testing with n = 30");
