let counterValue = Number(document.getElementById('value').textContent);

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
    console.log(`Значение счетчика равно: ${counterValue};`);
};

const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
    console.log(`Значение счетчика равно: ${counterValue};`);
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);