import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
    const names = users.filter(user => user.eyeColor === color);
    return names
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]