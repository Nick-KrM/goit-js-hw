'use strict';

let credits = 23580;

let message;

const pricePerDroid = 3000;

let droneOrder = prompt('Введите необходимое количество дронов:');

droneOrder = Number(droneOrder);

const totalPrice = (droneOrder * pricePerDroid);

const accountBalance = (credits - totalPrice);

if (droneOrder === 0) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else {
    message = `Вы купили ${droneOrder} дроидов, на счету осталось ${accountBalance} кредитов.`;
}

console.log(message);