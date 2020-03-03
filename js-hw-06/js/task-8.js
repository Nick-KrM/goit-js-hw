import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    const name = friendName;
    const wantedObjects = users
        .filter(user => user.friends.includes(friendName))
        // .filter(user => user.friends.some(friend => friend === friendName))
        .map(user => user.name)
    return wantedObjects
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]