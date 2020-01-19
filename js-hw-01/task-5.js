let message;

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

const shippingCostToChina = 100;
const shippingCostToChile = 250;
const shippingCostToAustralia = 170;
const shippingCostToIndia = 80;
const shippingCostToJamaica = 120;

let inputDeliveryChoice = prompt('Введите страну для доставки:');

if (inputDeliveryChoice === null) {
    alert('Отменено пользователем!');
} else {

    inputDeliveryChoice = inputDeliveryChoice.toLowerCase();

    switch (inputDeliveryChoice) {
        case china:
            message = `Доставка в ${china} будет стоить ${shippingCostToChina} кредитов`;
            break;

        case chile:
            message = `Доставка в ${chile} будет стоить ${shippingCostToChile} кредитов`;
            break;

        case australia:
            message = `Доставка в ${australia} будет стоить ${shippingCostToAustralia} кредитов`;
            break;

        case india:
            message = `Доставка в ${india} будет стоить ${shippingCostToIndia} кредитов`;
            break;

        case jamaica:
            message = `Доставка в ${jamaica} будет стоить ${shippingCostToJamaica} кредитов`;
            break;
        default:
            message = 'В вашей стране доставка не доступна!';
    }
    alert(message);
}