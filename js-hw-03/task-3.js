const findBestEmployee = function (employees) {
    const entries = Object.entries(employees);
    let max = 0;
    let message;
    console.log(entries);

    for (const entry of entries) {
        if (max < entry[1]) {
            const key = entry[0];
            const value = entry[1];
            max = entry[1];

            message = `Лучший сотрудник "${key}", выполнивший ${max} задач!`;
        }
    }
    return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux

