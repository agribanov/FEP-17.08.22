// 1. Спросить у пользователя 1 число
// 1.1 Проверить и переспросить, если значение невалидно
// 2. Спросить у пользователя 2 число
// 2.1 Проверить и переспросить, если значение невалидно
// 3. Спросить у пользователя действие + - / *
// 3.1 Проверить и переспросить, если значение невалидно
// 4. Посчитать результат
// 5. Вывести выражение 2 - 3 = -1

// // 1. Спросить у пользователя 1 число
// let operandA = prompt('OperandA');

// while (operandA === null || operandA === '') {
//     operandA = prompt('OperandA again');
// }

//----
// let operandA;

// do {
//     operandA = prompt('OperandA');
// } while (isOperandInvalid(operandA));

// function isOperandInvalid(val) {
//     return val === null || val === '';
// }

// isOperandValid(34);

// let i = 10;
// while (i < 2) {
//     alert('pred' + i);
//     i++;
// }

// let j = 10;
// do {
//     alert('post' + j);
//     j++;
// } while (j < 2);

// const isOperandInvalid =
//     operandA === null || operandA === '' || operandA === '0' || operandA > 100;

// if (isOperandInvalid) {
//     console.log('Invalid value');
// }

// if (operandA === '1') {
//     console.log('Value is one');
// } else if (operandA === '2') {
//     console.log('Value is two');
// } else if (operandA === '3') {
//     console.log('Value is three');
// } else if (operandA === '4') {
//     console.log('Value is four');
// } else if (operandA === '5') {
//     console.log('Value is five');
// } else if (operandA === '6') {
//     console.log('Value is six');
// } else {
//     console.log('something else');
// }

// switch (operandA) {
//     case '1':
//         console.log('1');
//     case '3':
//     case '5':
//         console.log('Value is nechetnoe');
//         break;

//     case '2':
//     case '4':
//         console.log('Value is chetnoe');
//         break;
//     default:
//         console.log('something else');
// }

// // 2. Спросить у пользователя 2 число
// const operandB = +prompt('OperandB');

// const result = operandA + operandB;

// // 3. Вывести полностью выражение 2 + 3 = 5
// // alert(operandA + ' + ' + operandB + ' = ' + result);
// alert(`${operandA} + ${operandB} = ${result}`);
