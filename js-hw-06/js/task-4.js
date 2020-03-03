import users from './users.js';

const getInactiveUsers = users => {
    const notActivityUsers = users.filter(user => !user.isActive)
    return notActivityUsers
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]