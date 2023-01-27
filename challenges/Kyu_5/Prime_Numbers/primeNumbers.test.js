const Test = require('@codewars/test-compat');

describe("Tests", () => {
	it("test", () => {
		Test.assertEquals(isPrime(0), false);
		Test.assertEquals(isPrime(1), false);
		Test.assertEquals(isPrime(2), true);
		Test.assertEquals(isPrime(3), true);
		Test.assertEquals(isPrime(4), false);
		Test.assertEquals(isPrime(5), true);

		Test.assertEquals(getPrimes(0, 0).join(), '');
		Test.assertEquals(getPrimes(0, 30).join(), '2,3,5,7,11,13,17,19,23,29');
		Test.assertEquals(getPrimes(30, 0).join(), '2,3,5,7,11,13,17,19,23,29');
	});
});
