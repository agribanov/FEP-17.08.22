function Hamburger(size) {
    this._size = size;
    this._toppings = [];
    this._price = size.price;
    this._callories = size.callories;
}

Hamburger.SIZE_SMALL = { title: 'SMALL SIZE', price: 50, callories: 20 };
Hamburger.SIZE_BIG = { title: 'BIG SIZE', price: 100, callories: 50 };

Hamburger.TOPPING_MAYO = { title: 'Mayo', price: 20, callories: 5000 };
Hamburger.TOPPING_KETCHUP = { title: 'Ketchup', price: 30, callories: 500 };

Hamburger.prototype.addTopping = function (topping) {
    this._toppings.push(topping);

    this._recalculate();
};

Hamburger.prototype._recalculate = function () {
    this._price = this._toppings.reduce(
        (acc, { price }) => (acc += price),
        this._size.price
    );

    this._callories = this._toppings.reduce(
        (acc, { callories }) => (acc += callories),
        this._size.callories
    );
};

Hamburger.prototype.getPrice = function () {
    return this._price;
};

Hamburger.prototype.getCallories = function () {
    return this._callories;
};
