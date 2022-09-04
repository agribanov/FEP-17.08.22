// Спрашиваем число // 10
// Валидируем число >0
// Посчитать сумму четных // 2 + 4 + 6 +8 +10
// Посчитать сумму нечетных // 1 + 3 +5 +7 +9
// Вывести
// Сумма четных: 30
// Сумма нечетных: 25

const maxNumber = getNumber();
const { odd, even } = getSums(maxNumber);

// const oddSum = getOddSum(maxNumber);
// const evenSum = getEvenSum(maxNumber);

showResult(odd, even);

function getNumber() {
    let num = prompt('Put number');

    while (isNumberInvalid(num)) {
        num = prompt('Put number. Try again');
    }

    return +num;
}

function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

function getSums(maxNumber) {
    const result = {
        odd: 0,
        even: 0,
    };

    for (i = 1; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            result.odd += i;
        } else {
            result.even += i;
        }
    }

    return result;
}

// function getOddSum(maxNumber) {
//     return getSum(0, maxNumber);
// }

// function getEvenSum(maxNumber) {
//     return getSum(1, maxNumber);
// }

// function getSum(minValue, maxNumber) {
//     let result = 0;

//     for (let i = minValue; i <= maxNumber; i += 2) {
//         result += i;
//     }

//     return result;
// }

function showResult(odd, even) {
    console.log(`
        Odd sum: ${odd}
        Even sum: ${even}
    `);
}
