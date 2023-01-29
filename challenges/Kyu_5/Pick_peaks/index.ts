function pickPeaks(arr: number[]): { [key: string]: number[] } {
	let result: { [key: string]: number[] } = { pos: [], peaks: [] };

	for(let i = 1, currentPos = -1, currentPeak = arr[i]; i < arr.length; i++) {
		if(arr[i - 1] < arr[i]) {
			currentPos = i;
			currentPeak = arr[i];
		} else if(arr[i - 1] > arr[i] && currentPos != -1) {
			result.pos.push(currentPos);
			result.peaks.push(currentPeak);
			// prevents adding the same value when stepping down multiple times
			currentPos = -1;
		}
	}
	return result;
}
console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
console.log(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
console.log(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
console.log(pickPeaks([]),{pos:[],peaks:[]});
console.log(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});
