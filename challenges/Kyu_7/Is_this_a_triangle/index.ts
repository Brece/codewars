// triangle inequality rule says that two sides combined are greater than the third side
// additionally the surface has to be greater than 0 to exclude invalid values (negative number)

function isTriangle(a: number, b: number, c: number): boolean {
    return a * b * c > 0
        && a + b > c 
        && a + c > b 
        && b + c > a;
}

console.log(isTriangle(1,2,2), true);
console.log(isTriangle(7,2,2), false);
