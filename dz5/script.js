// 1. Спрашиваем дейтсвие + - / * // +
// 1.1 Валидируем
// 2. Спросить у пользователя операнды через , // 2,356,6,7,8
// 2.1 Валидируем null, '',
// Выводим результат одним числом // Результат: 26

const operation = getOperation();
const operands = getOperands();
const result = calculateResult(operands, operation);
showResult(result);

function getOperation() {
    let action = prompt('Action?');

    while (isOperationInvalid(action)) {
        action = prompt('Action?');
    }

    return action;
}

function isOperationInvalid(action) {
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}

function getOperands() {
    let operands;
    do {
        operands = getAnswer().split(',').map(Number); // [2,3,NaN]
    } while (operands.findIndex((item) => isNaN(item)) !== -1);

    // const operandsStrs = answer.split(',');
    // const operands = [];

    // for (let i = 0; i < operandsStrs.length; i++) {
    //     operands[i] = +operandsStrs[i];
    // }

    // const operands = answer.split(',').map(Number);
    // .filter((item) => !isNaN(item));

    return operands;
}

function getAnswer() {
    let answer = prompt('Operands?');

    while (isOperandsAnswerInvalid(answer)) {
        answer = prompt('Operands?');
    }

    return answer;
}

function isOperandsAnswerInvalid(val) {
    return val === null || val.trim() === '';
}

function calculateResult(values, operator) {
    // let result = values[0];

    // for (let i = 1; i < values.length; i++) {
    //     result = calculate(result, values[i], operator);
    // }

    // return result;

    return values.reduce((acc, item) => calculate(acc, item, operator));
}

function calculate(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            alert('Something wrong');
    }
}

function showResult(value) {
    console.log('Result: ' + value);
}

// ===

// function sayHi() {}

// const sayHello = function (name) {
//     return 'Hello ' + name;
// };

// const sayWelcome = (name) => {
//     return 'Hello ' + name;
// };

// const sayWelcome = (name) => {
//     return 'Hello ' + name;
// }

const arr = ['a', 'b', 'c'];
// const nums = [1, 2, 3, 4];

// shift
// unshift
// push
// pop
// splice(index, countToDelete, item1, item2)
// join
// concat

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((item) => console.log('item ' + item));

// const nums10 = [];

// for (let i = 0; i < nums.length; i++) {
//     nums10[i] = nums[i] * 10;
// }

// const nums10 = nums.map((item) => {
//     return item * 10;
// });

// let arrResult = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     arrResult += nums[i];
// }

let nums = [1, 2, 6, 3, 4];

// const arrResult = nums.reduce((acc, item) => acc * item);

// acc = 0

// const numsEven = nums.filter((item) => item % 2 === 0);

// const firstEven = nums.find((item) => item % 2 === 0);
// const lastEven = nums.findLast((item) => item % 2 === 0);

// const firstEvenIndex = nums.findIndex((item) => item % 2 === 0); // null
// const lastEvenIndex = nums.findLastIndex((item) => item % 2 === 0);

// const index = nums.indexOf('3'); // -1
// // const index = nums.lastIndexOf('3');
// // const index = nums.findIndex((item) => item === 3);

// const a = 5;
// // const exists = nums.indexOf(a) === -1;
// // const exists = nums.findIndex((item) => item === 5) !== null
// // const exists = nums.includes(a);

// if (nums.includes(a)) {
//     nums.push(a);
// }

// const index = nums.indexOf(2);
// if (index > -1) {
//     nums.splice(index, 1);
// }

// nums = nums.filter((item) => item !== 2);
