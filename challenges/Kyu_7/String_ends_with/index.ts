function solution(str: string, ending: string): boolean {
    return str.slice(str.length - ending.length) === ending;
}

export = solution;

console.log(solution('abc', 'bc'), true);
console.log(solution('abc', 'd'), false);
