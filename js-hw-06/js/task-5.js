import users from './users.js';

const getUserWithEmail = (users, email) => {
    const objectsUsers = users.find(user => user.email === email);
    return objectsUsers
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}