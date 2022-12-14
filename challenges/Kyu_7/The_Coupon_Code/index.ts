function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
	return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); // true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); // false
