class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs(car) {
        console.log(
            `\n Max.speed: ${car.maxSpeed} \n Speed: ${car.speed} \n isOn: ${car.isOn} \n distance: ${car.distance} \n price: ${car.price}`,
        );
    }

    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    // constructor(instanceObject) {
    //     this.price = instanceObject.price;
    //     this.speed = 0;
    //     this.maxSpeed = instanceObject.maxSpeed;
    //     this.isOn = false;
    //     this.distance = 0;
    // }

    constructor({ maxSpeed, price }) {
        this.price = price;
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
        return this._price;
    }

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
    } // работает и без return (заметки начинающего разработчика)

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
        console.log('Двигатель - выключен!');
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            this.speed += value;
            this.isOn = true;
        } else {
            console.log(`Нельзя превысить максимальную скорость автомобиля!`);
        };
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if (this.speed - value > 0) {
            this.speed -= value;
            this.isOn = true;
        } else if (this.speed - value === 0) {
            this.speed -= value;
            this.isOn = false;
            console.log(`Автомобиль остановился!`);
        } else {
            console.log(`Сначала надо остановиться!`);
        }; return this.speed;
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn) {
            this.distance += this.speed * hours;
        } else {
            console.log(`Сперва необходимо повернуть ключ в зажигании...`);
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.accelerate(160);
mustang.decelerate(20);
console.log(mustang); // price: 2000, maxSpeed: 200, speed: 30, isOn: true, distance: 0

mustang.decelerate(40);
mustang.decelerate(30);
console.log(mustang); // price: 2000, maxSpeed: 200, speed: 0, isOn: false, distance: 0

mustang.accelerate(90);
mustang.drive(2);
console.log(mustang); // price: 2000, maxSpeed: 200, speed: 90, isOn: true, distance: 180

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 90, isOn: true, distance: 180, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 250, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000