function calculateYears(principal: number, interest: number, tax: number, desired: number): number {
    let current: number = principal,
        years: number = 0,
        beforeTax: number,
        taxed: number;

    while(current < desired) {
        beforeTax = current * (1 + interest);
        taxed = (beforeTax - current) * tax;
        current = beforeTax - taxed;
        years++;
    }
    return years;
}

/**
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired){
        principal += (principal * interest) * (1 - tax);
        years++;
    }
    return years;
}
 */

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000,0.01625,0.18,1200), 14);
console.log(calculateYears(1000,0.05,0.18,1000), 0);
