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

    transactions: [{ amount: 2000, type: "deposit", id: "_lt983vgn9" },],
    balance: 2000,

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
        console.log(`На Ваш счет поступило ${amount}грн.`)
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
            console.log(`С Вашего счета будет списано ${amount}грн.`)
            return this.balance;
        } else {
            console.log(`Недостаточно средств! Ваш запрос ${amount}грн, превышает текущий баланс, который составляет ${this.balance}грн.`)
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
    getTransactionDetails(id) {
        for (const obj of this.transactions) {
            if (obj.id === id) {
                console.log(`Запрашиваемая транзакция:`);
                console.log(obj);
                return this.obj;
                break;
            } else { console.log(`Такая транзакция не найдена!`) }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;
        for (const transactionObject of this.transactions) {
            if (transactionObject.type === type) {
                total += transactionObject.amount;
            }
        }
        console.log(`Общая сумма по ${type} составляет ${total}грн.`);
        return total;
    },
};

account.deposit(2000);
account.deposit(5000);
account.withdraw(11000);
account.withdraw(200);
account.deposit(500);
console.log(account.transactions);
account.getBalance();
account.getTransactionDetails('_lt983vgn9');
account.getTransactionDetails('_lt983vgn1');
account.getTransactionTotal('deposit');
account.getTransactionTotal('withdraw');
account.getBalance();