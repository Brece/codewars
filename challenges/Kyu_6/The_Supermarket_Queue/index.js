"use strict";
function queueTime(customers, n) {
    if (customers.length === 0) {
        return 0;
    }
    // create temp array that holds as many items as there are queues
    let queues = [];
    customers.forEach(person => {
        // the first n-customers are the initial values for each queue; e.g. [1,8,4,5] with n=2 results to temp=[1,8]
        if (queues.length < n) {
            queues.push(person);
            return;
        }
        // find minimum in temp array and add the next customer to it; do this until the end of customer array reaches its end
        const min = Math.min(...queues);
        queues[queues.indexOf(min)] += person;
    });
    // find and return maximum of temp array
    return Math.max(...queues);
}
const queueTime1 = queueTime([5, 3, 4], 1); // 12
const queueTime2 = queueTime([10, 2, 3, 3], 2); // 10
const queueTime3 = queueTime([2, 3, 10], 2); // 12
const queueTime4 = queueTime([], 6); // 
console.log(queueTime1);
console.log(queueTime2);
console.log(queueTime3);
console.log(queueTime4);
