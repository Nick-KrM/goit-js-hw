/*
Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        const id = generateId();
        return { amount, type, id }
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.transactions.push(this.createTransaction(amount, Transaction['DEPOSIT']));
        this.balance += amount;
        return this.balance;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount <= this.balance) {
            this.transactions.push(this.createTransaction(amount, Transaction['WITHDRAW']));
            this.balance -= amount;

            return this.balance;
        } else {
            console.log(`Ваш запрос ${amount}грн, превышает текущий баланс, который составляет ${this.balance}грн. Недостаточно средств!`)
        }
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        console.log(`Текущий баланс составляет ${this.balance}грн.`);
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) { },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) { },
};

console.log(account.transactions);
account.deposit(2000);
account.deposit(5000);
account.withdraw(8000);
account.withdraw(200);
account.deposit(500);
console.log(account.transactions);
account.getBalance();