'use strict';

const calculateEngravingPrice = function (message, pricePerWord) {
    let costCalculation;

    const arr = message.split(' ');

    costCalculation = arr.length * pricePerWord;

    return costCalculation
}


console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100