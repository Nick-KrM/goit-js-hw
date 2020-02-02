const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    changeName(newName) {
        this.name = newName;
    },
    changeHobby(newHobby) {
        this.hobby = newHobby;
    },
    changeStatus(newStatus) {
        this.premium = newStatus;
    }
};

/* Изначальный объект */
console.log(user);

user.mood = 'happy';
user.changeHobby('skydiving');
user.changeStatus(false);

const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key}:${user[key]}`);
}
console.log(user);