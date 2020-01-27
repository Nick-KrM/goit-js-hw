'use strict';
let input;
const numbers = [];
let total = 0;

while (true) {
    let input = prompt('Введите число');
    if (input === null) {
        console.log('Отменено пользователем!');
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        console.log('Было введено не число, пропускаем текущую итерацию!');
        continue;
    }
    numbers.push(input);
}

for (const number of numbers) {
    total += number;
}
console.log(`Вводимые числа: ${numbers} и общая сумма чисел равна ${total}.`);
alert(`Общая сумма чисел равна ${total}.`);