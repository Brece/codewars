function createFunctions(n:number) {
    // declare variables with 'let' instead of 'var'
    // 'let' is lexically scoped 
    let callbacks = [];

    for (let i = 0; i < n; i++) {
        // let index = i;
        callbacks.push(function() {
            return i;
        });
    }
    return callbacks;
}

let functionArr = createFunctions(5);

console.log(functionArr[0]());
console.log(functionArr[3]());
console.log(functionArr[4]());
