'use strict';

const total = 100;

let ordered = prompt('Введите необходимое количество');

ordered = Number(ordered);

const input = ordered >= 1 && ordered <= total;

if (input) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log('На складе недостаточно товаров!');
}