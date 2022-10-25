// filter out dublicates of each sub-array by creating a Set and return its size in a new array
// reduce the new array by multiplying the array items
// this equates to the number ob possible combination since there are no dublicates

function solve(arr: number[][]) {
    return (
        arr.map(subArr => {
        let temp = new Set();
        for(const i of subArr) {
            temp.add(i);
        };
        return temp.size;
        })
        .reduce((a, b) => a * b)
    );
};

console.log(solve([[1,2],[4],[5,6]])); // 4
console.log(solve([[1,2],[4,4],[5,6,6]])); // 4
console.log(solve([[1,2],[3,4],[5,6]])); // 8
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])); // 72

//[ [1,2,3,4,5], [1,2,3], [1] ]; // 5*3*1 = 15
//[ [8,9,10,12,5,6], [3,4,6,7] , [1,2,3] ]; // Length: 6*4*3 = 72