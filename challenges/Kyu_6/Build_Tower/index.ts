function towerBuilder(nFloors: number): string[] {
    let tower: string[] = [];
    
    for(let i = 1; i <= nFloors; i++) {
        tower.push(' '.repeat(nFloors - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(nFloors - i));
    }
    return tower;
}
// nFloor * 2 - 1 === string.length of last floor
console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);