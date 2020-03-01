const Account = function ({ login, email }) {
    this.login = login;
    this.email = email;
};

Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};
Account.prototype.changeLogin = function (newLogin) {
    this.login = newLogin;
};
Account.prototype.changeData = function (newLogin, newEmail) {
    this.login = newLogin;
    this.email = newEmail;
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});
// console.log(mango);
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
mango.changeLogin('MangoTheDog');
mango.getInfo();

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});
// console.log(poly);
poly.getInfo(); // Login: Poly, Email: poly@mail.com
poly.changeData('Dolly', 'Dolly@gmail.com');
poly.getInfo();