// 1 завдання

function calculationArithmeticMean(array) {
    let sumArray = 0;
    let quantityElementArray = 0;

    for (let element of array) {

        if (typeof element === 'number') {

        sumArray += element;
        quantityElementArray++;
        }
    }
    return quantityElementArray > 0 ? sumArray / quantityElementArray : 0;
}

const givenArray = [4, 6, 10, 'two', 'ten', 26, 18, 'five'];
const resultArray = calculationArithmeticMean(givenArray);
console.log(`Середнє арифметичне значення єлементів данного мисиву =  ${resultArray}`);

// 2 завдання

let x;
let y;
let znak;
const znakInput = '+, -, *, /, %, ^';

while (isNaN(x)) {
    x = parseFloat(prompt('Для обчислювання введить значення X:'));
}

while (!znakInput.includes(znak)) {
    znak = prompt('Введить знак операціі обчислення яку ви хочете здійснити: +, -, *, /, %, ^ (ступінь )');
}

while (isNaN(y)) {
    y = parseFloat(prompt('Для обчислювання введить значення Y:'));
}

function doMath(x, y, znak) {
    if (znak === '^') {
        return Math.pow(x, y);
    } else {
        switch (znak) {
            case '+':
                return x + y;
                break;
            case '-':
                return x - y;
                break;
            case '*':
                return x * y;
                break;
            case '/':
                return x / y;
                break;
            case '%':
                return x % y;
                break; 
        }
    }
}

let result = doMath(x, y, znak);
console.log(result);

// 3 завдання

function fillArray() {
    let mainArray = parseInt(prompt('Введить кількість елементів основного масиву:'));
    let internalArray = parseInt(prompt('Введить кількість значень в кожному елементі основного масиву:'));

    let array = [];

    for (let i = 1; i <= mainArray; i++) {
    let innerArray = [];

    for (let j = 1; j <= internalArray; j++) {
        let elementArray = (prompt(`Введить [${j}] - значеня: - [${i}] елементу основного масиву:`));
        innerArray.push(elementArray);
    }

    array.push(innerArray);
    }

    return array;
}

let userArray = fillArray();
console.log(userArray);

// 4 завдання

function removeSymbols(string, symbol) {
    for (let i = 0; i < symbol.length; i++) {
        const symbols = symbol[i];
        while (string.includes(symbols)) {
        string = string.replace(symbols, '');
        }
    }
    return string;
}

const inputString = prompt("Введіть рядок:");
const inputSymbols = prompt("Введіть символи для видалення (без пробілів):");

const symbolsArray = [];
for (let i = 0; i < inputSymbols.length; i++) {
    symbolsArray.push(inputSymbols[i]);
}

const resultRemoveSymbols = removeSymbols(inputString, symbolsArray);
console.log(resultRemoveSymbols);