function incrementString (str: string): string {
    let numberArr = [];
    let i = str.length - 1;
    while(i >= 0 && str[i].match(/[0-9]/)) {
        numberArr.push(str[i]);
        i--;
    }

    let number = (Number(numberArr.reverse().join(''))) + 1;

    return str.slice(0, str.length - numberArr.length) + '0'.repeat(Math.max(0, numberArr.length - number.toString().length)) + number;
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foobar999"), "foobar1000");
console.log(incrementString("foobar00999"), "foobar01000");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar1"), "foobar2");
console.log(incrementString("1"), "2");
console.log(incrementString("009"), "010");
console.log(incrementString("fo99obar99"), "fo99obar100");
