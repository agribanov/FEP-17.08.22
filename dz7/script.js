function createCalculator(base) {
    return {
        add: (b) => (base += b),
        div: (b) => (base /= b),
        mult: (b) => (base *= b),
        sub: (b) => (base -= b),
        set: (b) => (base = b),
    };
}

const calc = createCalculator(100);

// calc.add(10); // 110
// calc.div(10); // 110 / 10 = 11
// calc.mult(5); // 55
// calc.sub(100); // -45
// calc.set(50); // 50
// calc.add(10); // 60
