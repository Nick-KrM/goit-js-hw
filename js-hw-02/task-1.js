'use strict';

// const logItems = function (array) {
//     const item = array.length;
//     for (let i = 0; i < item; i += 1) {
//         console.log(`${array[i]}`);
//     }
// }

const logItems = function (array) {
    const itemNumberOfArray = array.length;

    for (let i = 0; i < itemNumberOfArray; i += 1) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);