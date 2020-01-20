let credits = 23580;

let message;

const pricePerDroid = 3000;

const droneOrder = document.querySelector('input[class="numberOfDrones"]');
const buttonRef = document.querySelector('button[class="confirmButton"]');
const cancelbuttonRef = document.querySelector('button[class="cancelButton"]');

cancelbuttonRef.addEventListener('click', () => {
    message = 'Отменено пользователем!';
    console.log(message);
});

buttonRef.addEventListener('click', () => {
    let droneOrderedValue = Number(droneOrder.value);

    const totalPrice = (droneOrderedValue * pricePerDroid);

    const accountBalance = (credits - totalPrice);

    if (droneOrderedValue === 0) {
        message = 'Ну нет, так нет!';
    } else if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    } else {
        message = `Вы купили ${droneOrderedValue} дроидов, на счету осталось ${accountBalance} кредитов.`;
    }

    console.log(message);
});