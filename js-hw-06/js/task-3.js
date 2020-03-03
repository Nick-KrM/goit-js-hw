import users from './users.js';

const getUsersWithGender = (users, gender) => {
    const names = users
        .filter(user => user.gender === gender)
        .map(user => user.name)
    return names
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]