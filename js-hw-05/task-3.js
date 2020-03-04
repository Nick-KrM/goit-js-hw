class Storage {
    constructor(items = []) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    // Альтернативный вариант, через перебор циклом:
    // removeItem(item) {
    //     for (let i = 0; i < this.items.length; i += 1) {
    //         if (item === items[i]) {
    //             this.items.splice(i, 1);
    //         }
    //     }
    // }

    // Вариант с поиском индекса, через метод:
    removeItem(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        } else {
            console.log(`Такой товар - не найден! Ниже доступные товары:`);
        }
    }


};
console.dir(Storage);
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);
console.log(storage);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('R2D2');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]