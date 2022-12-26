/** split method
function removeUrlAnchor(url: string): string {
    return url.split('#')[0];
}
*/

// using regular expressions to replace everything that matches the regex with an empty string
function removeUrlAnchor(url: string): string {
    return url.replace(/#.*/gi, "");
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1');
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/');
