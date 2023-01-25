function validParentheses(parens: string): boolean {
	let closingParens: string[] = [];

	for(let c of parens) {
		if(c === '(') { closingParens.push(')') }
		else {
			if(c === closingParens[closingParens.length - 1]) {
				closingParens.pop();
			} else {
				return false;
			}
		}
	}
	return closingParens.length === 0;
}

console.log(validParentheses( "(" ), false);
console.log(validParentheses( ")" ), false);
console.log(validParentheses( "" ), true);
console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);
