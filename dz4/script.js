// 1. Спрашиваем дейтсвие + - / * // +
// 1.1 Валидируем
// 2. Спросить у пользователя число // 3
// 2.1 Валидируем >=2
// 3. Спрашиваем операнды, столько раз сколько ввел пользователь
// 3.1 Валидируем что это число  // 2, 3, 5

// 4 Выводим результат // 2+3+5=10

const action = getAction();
const operandsCount = getOperandsCount(); // <2
const resultExpression = getExpression(operandsCount, action);
showResult(resultExpression);

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

function getOperandsCount() {
    return getNumber('How many operands?', isOperandsCountInvalid);
}

function isOperandsCountInvalid(num) {
    return isNumberInvalid(num) || num < 2;
}

function getOperand(title) {
    return getNumber(title, isOperandInvalid);
}

function isOperandInvalid(operand) {
    return isNumberInvalid(operand);
}

function getNumber(title, validationFn) {
    let operand = prompt(title);

    while (validationFn(operand)) {
        operand = prompt(title);
    }

    return +operand;
}

function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}

function getExpression(count, operation) {
    let result = getOperand('Operand 1');
    let expression = result;

    for (let i = 2; i <= count; i++) {
        const operand = getOperand('Operand ' + i);

        result = calculate(result, operand, operation);
        expression += ` ${operation} ${operand}`;
    }

    // 2 + 3 + = 5
    return `${expression} = ${result}`;
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

function showResult(expression) {
    console.log(expression);
}
