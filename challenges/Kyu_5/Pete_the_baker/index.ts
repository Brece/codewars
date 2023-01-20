function cakes(recipe: { [key: string]: number }, available: { [key: string]: number }): number {
    let maxAmount: number[] = [];

    for(let ingredient in recipe) {
        available[ingredient] ? maxAmount.push(Math.floor(available[ingredient] / recipe[ingredient])) : maxAmount.push(0);
    }
    return Math.min(...maxAmount);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}), 2);
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}), 0);
