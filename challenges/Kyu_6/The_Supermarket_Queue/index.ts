// TODO:
/*
function queueTime(customers: number[], n: number): number {
    if (n === 1) {
        return customers.reduce((a, b) => a + b);
    }

    let sum = 0;
    let currentCustomers = customers.splice(0, n).sort((a, b) => a - b);
    let rest = customers.slice(n);
    if (rest.length > 0) {
        // substract smallest number from all customers
        currentCustomers.map(n => n - currentCustomers[0] ? 0 : n - currentCustomers[0]);
        // replace smallest number (all zeros) with next customer(s) and repeat until rest is empty
        // store passed time in sum
    }

    return 0;
}
*/
function queueTime(customers: number[], n: number): number {
    // create temp array that holds as many items as there are queues
    // the first n-customers are the initial values for each queue; e.g. [1,8,4,5] with n=2 results to temp=[1,8]
    // find minimum in temp array and add the next customer to it; do this until the end of customer array reaches its end
    // find and return maximum of temp array
}

const queueTime1 = queueTime([5,3,4], 1); // 12
const queueTime2 = queueTime([10,2,3,3], 2); // 10
const queueTime3 = queueTime([2,3,10], 2); // 12
// const queueTime4 = queueTime(); // 
// const queueTime5 = queueTime(); // 
// const queueTime6 = queueTime(); // 

console.log(queueTime1);
console.log(queueTime2);
console.log(queueTime3);
// console.log(queueTime4);
// console.log(queueTime5);
// console.log(queueTime6);