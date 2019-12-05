'use strict';

const checkForSpam = function (str) {
    const lowerCaseStr = str.toLowerCase();
    if (lowerCaseStr.includes('spam') || lowerCaseStr.includes('sale')) {
        return true;
    } else {
        return false;
    }
}



console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPaM] How to earn fast money?')); // true