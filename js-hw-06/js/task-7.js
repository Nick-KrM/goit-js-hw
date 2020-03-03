import users from './users.js';

const calculateTotalBalance = users => {
    const userAmounts = users.reduce((totalAmount, user) => totalAmount + user.balance, 0);
    return userAmounts
};

console.log(calculateTotalBalance(users)); // 20916