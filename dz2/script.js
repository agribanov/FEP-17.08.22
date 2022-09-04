// 1. Спросить у пользователя 1 число
// 1.1 Проверить и переспросить, если значение невалидно
// 2. Спросить у пользователя 2 число
// 2.1 Проверить и переспросить, если значение невалидно
// 3. Спросить у пользователя действие + - / *
// 3.1 Проверить и переспросить, если значение невалидно
// 4. Посчитать результат
// 5. Вывести выражение 2 - 3 = -1
// ================

// 1. Спросить у пользователя 1 число
let operandA = getNumber('Put OperandA?');

// 2. Спросить у пользователя 2 число
let operandB = getNumber('Put OperandB?');

// 3. Спросить у пользователя действие + - / *
let action = getAction();

// 4. Посчитать результат
let result = calculate(operandA, operandB, action);

// 5. Вывести выражение 2 - 3 = -1
showResult(operandA, operandB, action, result);

// ==========
function getNumber(title) {
    let operand = prompt(title);

    while (isNumberInvalid(operand)) {
        operand = prompt(title);
    }

    return +operand;
}

function isNumberInvalid(operand) {
    return operand === null || operand.trim() === '' || isNaN(operand);
}

function getAction() {
    let action = prompt('Action?');

    while (isActionInvalid(action)) {
        action = prompt('Action?');
    }

    return action;
}

function isActionInvalid(action) {
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
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

function showResult(a, b, action, result) {
    alert(`${a} ${action} ${b} = ${result}`);
}
