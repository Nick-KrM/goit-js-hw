'use strict';
let input;
const numbers = [];
let total = 0;
let message;

do {
    input = Number(prompt('Введите число'));
    if (!isNaN(input)) {
        numbers.push(input);
    } else alert((message = 'Было введено не число, попробуйте еще раз'));
} while (input !== 0);
for (input of numbers) {
    total = total + input;
}

console.log(numbers);
alert((message = `Общая сумма чисел равна ${total}.`));