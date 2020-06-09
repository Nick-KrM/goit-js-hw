const controls = document.querySelector('#controls');
const renderBtn = controls.children[1];
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');

function randomColor() {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

const createBoxes = function () {
    let amount = Number(controls.children[0].value);
    let arr = [];

    if (amount <= 55 && amount > 0) {

        for (let i = 0; i < amount; i++) {
            let item = document.createElement('div');
            item.classList.add(`action`);
            item.style.width = `${30 + i * 10}px`;
            item.style.height = `${30 + i * 10}px`;
            item.style.background = `${randomColor()}`;
            item.style.zIndex = `${9999 - i}`;
            arr.push(item);
        };

        boxes.append(...arr);
    } else {
        alert('Введи число от 1 до 55 и поклацай на кнопку "Создать"(о_-)')
    };
};

const destroyArr = () => {
    boxes.innerHTML = '';
    controls.children[0].value = '';
};

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyArr);