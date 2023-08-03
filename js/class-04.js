// example 1

// function expression
const sum = function (value1, value2) {
    const result = value1 + value2;
    return result;
};

console.log(sum(5, 10));

// example 2

console.log(multiply(5, 10));

// function declaration
function multiply(value1, value2) {
    const result = value1 * value2;
    return result;
}

// example 3

function getSum() {
    let sum = 0;
    for (const number of arguments) {
        sum += number;
    }
    return sum;
}

console.log(getSum(4, 23, 2, 34, 67));

// example 4

let someValue = 4;

if (true) {
    someValue = 11;
}

console.log(someValue);

// example 5

const numbers = [23, 34, 12, 67, 33];

function checkValue(numberArray, minValue) {
    let isAllNumbersBigger = true;

    let i = 0;
    for (const number of numberArray) {
        i += 1;
        if (minValue > number) {
            isAllNumbersBigger = false;
        }
    }

    console.log(i);
    return isAllNumbersBigger;
}

console.log(checkValue(numbers, 10));
console.log(checkValue(numbers, 13));

// example 6

const nums = [23, 34, 12, 67, 33];

function checkValues(numberArray, minValue) {
    for (const number of numberArray) {
        if (minValue > number) {
            return false;
        }
    }
    return true;
}

console.log(checkValues(nums, 10));
console.log(checkValues(nums, 13));

// example 7

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCombination(arr, count) {
    const result = [];

    for (let i = 0; i < arr.length; i += count) {
        const arrayPart = arr.slice(i, i + count);
        console.log(arrayPart);
        result.push(arrayPart);
    }

    return result;
}

console.log(getCombination(data, 2));
console.log(getCombination(data, 3));

// example 8

function getRectArea(dimension) {
    const arrNumbers = dimension.split(` `);
    const firstSide = Number(arrNumbers[0]);
    const secondSide = +arrNumbers[1];

    console.log(arrNumbers);
    console.log(firstSide, secondSide);

    return firstSide * secondSide;
}

console.log(getRectArea(`8 11`));
console.log(getRectArea(`15 11`));
