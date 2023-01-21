"use strict";
function passwordValidation(str) {
    return str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/)?.length ? true : false;
}
console.log(passwordValidation('fjd3IR9'), true);
console.log(passwordValidation('ghdfj32'), false);
console.log(passwordValidation('DSJKHD23'), false);
console.log(passwordValidation('dsF43'), false);
console.log(passwordValidation('4fdg5Fj3'), true);
console.log(passwordValidation('DHSJdhjsU'), false);
console.log(passwordValidation('fjd3IR9.);'), false);
console.log(passwordValidation('fjd3 ) IR9'), false);
console.log(passwordValidation('djI38D55'), true);
console.log(passwordValidation('djI3_8D55'), false);
console.log(passwordValidation('djI38D55@)@'), false);
