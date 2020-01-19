const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const inputpass = document.querySelector('input[class="password"]');
const buttonRef = document.querySelector('button[class="passwordButton"]');

buttonRef.addEventListener('click', () => {
    message = inputpass.value === ADMIN_PASSWORD ? 'Добро пожаловать!' : 'Доступ запрещен, неверный пароль!';
    alert(message);
    console.log('Задание-3 выполненно верно!');
});
