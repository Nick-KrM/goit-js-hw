'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;

let inputpass = prompt('Введите пароль:');

if (inputpass === null) {
    message = 'Отменено пользователем!';
} else if (inputpass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);