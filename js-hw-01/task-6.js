let total = 0;
while (true) {
    let input = prompt('Введите число');
    if (input === null) {
        console.log('Отменено пользователем!');
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        console.log('Было введено не число, пропускаем текущую итерацию!');
        continue;
    }
    total += input;
}
alert(`Общая сумма чисел равна ${total}.`);