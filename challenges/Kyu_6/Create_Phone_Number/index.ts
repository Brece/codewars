function createPhoneNumber(numbers: number[]): string {
    return numbers.map((num, index) => {
        if(index === 0) { return `(${num}` }
        if(index === 2) { return `${num}) ` }
        if(index === 5) { return `${num}-` }
        return num;
    })
    .join('')
}

/**
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }
    
    return format;
}
 */

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");