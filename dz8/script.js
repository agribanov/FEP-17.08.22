const operandAElem = document.querySelector('#operandA');
const operandBElem = document.querySelector('#operandB');
const operatorElem = document.querySelector('#operator');
const resultElem = document.querySelector('#result');
const calcBtnElem = document.querySelector('#calcBtn');

calcBtnElem.addEventListener('click', onCalcBtnClick)

function onCalcBtnClick(){
    const values = getValues();

    if (!values){
        return showMsg('Invalid operands');
    }

    const {a, b, operator} = values;
    const expression = generateExpression(a, b, operator);

    showMsg(expression);
}

function getValues(){
    let operandA = operandAElem.value;

    let operandB = operandBElem.value;

    if (isOperandInvalid(operandA) || isOperandInvalid(operandB)) {
        return null;
    } 

    operandA = Number(operandA);
    operandB = Number(operandB);

    const operator = operatorElem.value;

    return {
        a: operandA,
        b: operandB,
        operator: operator
    }
}

function isOperandInvalid(val){
    return val === '' || isNaN(val)
}

function generateExpression(a, b, action){
    return `${a} ${action} ${b} = ${calculate(a, b, action)}`;
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

function showMsg(msg){
    resultElem.textContent = msg;
}

