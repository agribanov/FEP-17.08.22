// // class Hamburger {
// //     static SIZE_SMALL = { title: 'SMALL SIZE', price: 50, callories: 20 };
// //     static SIZE_BIG = { title: 'BIG SIZE', price: 100, callories: 50 };

// //     static TOPPING_MAYO = { title: 'Mayo', price: 20, callories: 5000 };
// //     static TOPPING_KETCHUP = { title: 'Ketchup', price: 30, callories: 500 };

// //     #toppings = [];
// //     #size = null;

// //     get price() {
// //         return this.#toppings.reduce(
// //             (acc, { price }) => (acc += price),
// //             this.#size.price
// //         );
// //     }

// //     get callories() {
// //         return this.#toppings.reduce(
// //             (acc, { callories }) => (acc += callories),
// //             this.#size.callories
// //         );
// //     }

// //     constructor(size) {
// //         console.log('Hamburger constructor');
// //         this.#size = size;
// //     }

// //     addTopping(topping) {
// //         this.#toppings.push(topping);
// //     }
// // }

// // class Superburger extends Hamburger {
// //     isSuper = true;

// //     constructor(size, topping) {
// //         super(size);

// //         this.addTopping(topping);
// //         console.log('Superburger constructor');
// //     }

// //     get price() {
// //         return super.price * 1.1;
// //     }
// // }

// // const burger = new Superburger(Hamburger.SIZE_BIG, Hamburger.TOPPING_KETCHUP);

// class Person {
//     #firstName = '';
//     #surname = '';

//     get name() {
//         return this.#firstName + ' ' + this.#surname;
//     }

//     set name(newName) {
//         // 'Bob Johns'
//         const [firstName, surname] = newName.split(' ');

//         if (!surname) {
//             return;
//         }
//         this.#firstName = firstName;
//         this.#surname = surname;
//     }

//     constructor(firstName, surname) {
//         this.#firstName = firstName;
//         this.#surname = surname;
//     }
// }

// const alex = new Person('Alex', 'Smith');

const tabset = new Tabset(document.querySelector('.tabset-container'));
const accordion = new Accordion(document.querySelector('.accordion-container'));
