'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let message;

const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
};

const isLoginUnique = function (logins, login) {
    for (let requiredLogin of logins) {
        if (requiredLogin === login) {
            return false;
        }
    }
    return true;
};

const addLogin = function (allLogins, login) {
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            allLogins.push(login);
            console.log((message = 'Логин успешно добавлен!'));
        } else {
            console.log((message = 'Такой логин уже используется!'));
        }
    } else {
        console.log((message = 'Ошибка! Логин должен быть от 4 до 16 символов'));
    }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'Ajaxy'); // 'Логин успешно добавлен!'
addLogin(logins, 'aJax'); // 'Логин успешно добавлен!'
addLogin(logins, 'ASdsdf'); // 'Логин успешно добавлен!'