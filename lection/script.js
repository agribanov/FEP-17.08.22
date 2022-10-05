// OOP

// 1. Наследование
// 2. Инкапсуляция
// 3. Полиморфизм

// 4. Абстракция

function Person(name) {
    this._name = name;
}

Person.prototype.getName = function () {
    return Person.formatName(this._name);
};

Person.prototype.setName = function (newName) {
    if (newName !== '') {
        this._name = newName;
    }
};

const alex = new Person('Alex');

Person.formatName = function (name) {
    return Person.PREFIX + name;
};

Person.PREFIX = 'Mr. ';

SIZE_SMALL = { price: 50, callories: 20 };
SIZE_BIG = { price: 100, callories: 50 };

TOPPING_MAYO = { price: 20, callories: 5000 };
TOPPING_KETCHUP = { price: 30, callories: 500 };

const hum = SIZE_SMALL;

hum.addTopping(TOPPING_MAYO);
hum.addTopping(TOPPING_KETCHUP);
hum.addTopping(TOPPING_MAYO);
hum.addTopping(TOPPING_MAYO);

hum.getPrice(); //
hum.getCallories(); //
hum.addTopping(TOPPING_KETCHUP);
hum.getPrice(); //
hum.getCallories(); //
