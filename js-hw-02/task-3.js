'use strict';

const findLongestWord = function (string) {
    const words = string.split(' ');
    let longestWord = words[0];
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(`The longest word in a line is "${findLongestWord('The quick brown fox jumped over the lazy dog')}"`); // 'jumped'

console.log(`The longest word in a line is "${findLongestWord('Google do a roll')}"`); // 'Google'

console.log(`The longest word in a line is "${findLongestWord('May the force be with you')}"`); // 'force'