const total = 100;

const orderInputRef = document.querySelector('input[class="order"]');

const buttonRef = document.querySelector('button[class="orderButton"]');

buttonRef.addEventListener('click', () => {
    const order = Number(orderInputRef.value);
    let message = order >= 1 && order <= total ? console.log('Заказ оформлен, с вами свяжется менеджер') : console.log('На складе недостаточно товаров!');
});