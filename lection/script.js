// Замыкания

// Лексическое окружение

// const msg = 'Hello';

// function sayHi(name) {
//     function log() {
//         console.log(msg + name);
//     }

//     return log;
// }

// const helloAlex = sayHi('Alex');
// const helloBob = sayHi('Bob');

// hello = null;
// sayHi('Bob');

// function sum(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// const add10 = sum(10);
// const add100 = sum(100);

// function createCounter() {
//     let counts = 0;

//     return {
//         count: () => ++counts,
//         reset: () => (counts = 0),
//     };
// }

function createCalculator(a) {}

const calc = createCalculator(100);

calc.add(10); // 110
calc.div(10); // 110 / 10 = 11
calc.mult(5); // 55
calc.sub(100); // -45
calc.set(50); // 50
calc.add(10); // 60
