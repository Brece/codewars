function isPrime(number: number): boolean {
	for(let i = 2, k = number / 2; i <= k; i++) {
		if(number % i === 0) { return false }
	}
	return number > 1;
}

function getPrimes(start: number, finish: number): number[] {
	let primes: number[] = [];
	for(let i = Math.min(start, finish), n = Math.max(start, finish); i <= n; i++) {
		if(isPrime(i)) { primes.push(i); }
	}
	return primes;
}

console.log(isPrime(0), false);
console.log(isPrime(1), false);
console.log(isPrime(2), true);
console.log(isPrime(3), true);
console.log(isPrime(4), false);
console.log(isPrime(5), true);
console.log(isPrime(10), false);
console.log(isPrime(13), true);

console.log(getPrimes(0, 0), []);
console.log(getPrimes(0, 30), [2,3,5,7,11,13,17,19,23,29]);
console.log(getPrimes(30, 0), [2,3,5,7,11,13,17,19,23,29]);
