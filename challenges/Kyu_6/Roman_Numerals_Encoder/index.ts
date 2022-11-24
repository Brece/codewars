function solution(n: number): string {
    if(n > 3999) { return 'Number has to be less than 4000' }

    const convertion: { [key: number]: string }[] = [
        {
            0: "",
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX",
        },
        {
            0: "",
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC",
        },
        {
            0: "",
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM",
        },
        {
            1: "M",
            2: "MM",
            3: "MMM",
        }
    ];

    let result = '';
    let numbers = [...n.toString()];

    numbers.forEach((num, i) => result += convertion[numbers.length - 1 - i][Number(num)]);

    return result;
}

/*
function solution(number){
  return [
    { threshold: 1000, char: 'M'},
    { threshold: 900,  char: 'CM'},
    { threshold: 500,  char: 'D'},
    { threshold: 400,  char: 'CD'},
    { threshold: 100,  char: 'C'},
    { threshold: 90,   char: 'XC'},
    { threshold: 50,   char: 'L'},
    { threshold: 40,   char: 'XL'},
    { threshold: 10,   char: 'X'},
    { threshold: 9,    char: 'IX'},
    { threshold: 5,    char: 'V'},
    { threshold: 4,    char: 'IV'},
    { threshold: 1,    char: 'I'}
  ].reduce(function(prev, curr, idx, arr)
  {
    while(number >= curr.threshold)
    {
      prev += curr.char;
      number -= curr.threshold;
    }
    
    return prev;
  }, '');
}
*/

// small numbers
console.log(solution(1), 'I', '1 should return "I"');
console.log(solution(2), 'II', '2 should return "II"');
console.log(solution(3), 'III', '3 should return "III"');
console.log(solution(4), 'IV', '4 should return "IV"');
console.log(solution(5), 'V', '5 should return "V"');
console.log(solution(9), 'IX', '9 should return "IX"');
console.log(solution(10), 'X', '10 should return "X"');
console.log(solution(11), 'XI', '11 should return "XI"');
console.log(solution(19), 'XIX', '19 should return "XIX"');
console.log(solution(22), 'XXII', '22 should return "XXII"');
console.log(solution(15), 'XV', '15 should return "XV"');

// large numbers
console.log(solution(1000), 'M', '1000 should, "M"');
console.log(solution(1001), 'MI', '1001 should, "MI"');
console.log(solution(1990), 'MCMXC', '1990 should, "MCMXC"');
console.log(solution(2007), 'MMVII', '2007 should, "MMVII"');
console.log(solution(2008), 'MMVIII', '2008 should, "MMVIII"');
