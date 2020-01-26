let message;
let total = 0;
let numbers = [];

const inventedNumber = document.querySelector('input[class="inventedNumber"]');
const buttonRef = document.querySelector('button[class="confirmButton"]');
const cancelbuttonRef = document.querySelector('button[class="cancelButton"]');

cancelbuttonRef.addEventListener('click', () => {
    message = 'Отменено пользователем!';
    alert(message);
    console.log(`Общая сумма чисел равна ${total}, было введенно ${numbers.length} чисел(а).`);
    alert(`Молодец! Общая сумма чисел равна ${total}, было введенно ${numbers.length} чисел(а).`);
});

buttonRef.addEventListener('click', () => {
    let inventedNumberValue = Number(inventedNumber.value);
    numbers.push(inventedNumberValue);
    total += inventedNumberValue;

    alert(`Вы ввели число ${inventedNumberValue}, но это еще не всё (О_-)`);
    console.log(`Вводимые значения: ${numbers}.`);
});
