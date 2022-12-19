export function twoSum(arr: number[], n: number): number[] {
	const pairs: Array<number[]> = [];
	const nums: { [key: number]: number } = {};

	for(const num1 of arr) {
		const num2 = n - num1;
		nums[num2] ? pairs.push([num1, num2]) : nums[num1] = 1;
	}
	return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
