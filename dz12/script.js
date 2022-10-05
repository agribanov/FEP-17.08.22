function Calculator(base) {
    this.result = base;

    this.add = function (value) {
        return (this.result += value);
    };

    this.div = function (value) {
        return (this.result /= value);
    };

    this.mult = function (value) {
        return (this.result *= value);
    };

    this.sub = function (value) {
        return (this.result -= value);
    };
}

const calc = new Calculator(10);

calc.add(100); // 110
calc.result; // 110
