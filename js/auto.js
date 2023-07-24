// example 1

function checkAge(age) {
    if (age >= 18) {
        // Change this line
        return 'You are an adult';
    }

    return 'You are a minor';
}

console.log(checkAge(16));

// example 2

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    // Change code below this line

    if (password === ADMIN_PASSWORD) {
        return 'Welcome!';
    }
    return 'Access denied, wrong password!';
    // Change code above this line
}

console.log(checkPassword('jqueryismyjam'));

// example 3

function checkStorage(available, ordered) {
    // Change code below this line
    if (ordered === 0) {
        return 'Your order is empty!';
    }
    if (ordered > available) {
        return 'Your order is too large, not enough goods in stock!';
    }
    return 'The order is accepted, our manager will contact you';
    // Change code above this line
}

console.log(checkStorage(10, 11));

// example 4

const fruits = ['apple', 'peach', 'pear', 'banana'];

const lastElementIndex = fruits.length - 1;

const lastElement = fruits[lastElementIndex];

console.log(lastElement);

// example 5

function getExtremeElements(array) {
    // Change code below this line
    array.splice(1, array.length - 2);
    return console.log(array);
    // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5, 6]);

// METHODS

const nameArr1 = 'Array is big';
const nameArr2 = ['Array', 'is', 'big'];

// split()

console.log(nameArr1.split(''));
console.log(nameArr1.split(' '));
console.log(nameArr1.split('', 8));
console.log(nameArr1.split(' ', 2));

// join()

console.log(nameArr2.join(''));
console.log(nameArr2.join(' '));
console.log(nameArr2.join('-'));

// indexOf()

console.log(nameArr2.indexOf('big'));

// includes()

console.log(nameArr2.includes('Array'));
console.log(nameArr2.includes('Arr'));

const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry';

const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
    console.log(`${fruit} is a red fruit`);
}

// push() and pop()

nameArr2.push('but', 'not', 'so', 'much');
console.log(nameArr2);

nameArr2.pop();
console.log(nameArr2);

// slice()

// повертає частину массива від і до, але не включно
console.log(redFruits.slice(1, 3));
// повертає частину массива від і до кінця, включно з останнім елементом
console.log(redFruits.slice(1));
// повертає останні 2 елемента массиву
console.log(redFruits.slice(-2));

// splice()

// remove elements
const scores1 = [1, 2, 3, 4, 5, 6, 7];

const deletedScores = scores1.splice(1, 5);

console.log(scores1);
console.log(deletedScores);

// add elements without remove
const scores2 = [1, 2, 3, 4, 5, 6, 7];

scores2.splice(3, 0, 3.5);

console.log(scores2);

// add elements with remove
const scores3 = [1, 4, 5, 6, 5, 6, 7];

scores3.splice(1, 3, 2, 3, 4);

console.log(scores3);

// concat()

const concat1 = [1, 2, 3, 4, 5];
const concat2 = [6, 7, 8, 9, 10];

const concat = concat1.concat(concat2);

console.log(concat);

// example 6

function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line

    return message.split(' ').length * pricePerWord;

    // Change code above this line
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// example 7

function makeStringFromArray(array, delimiter) {
    let string;
    // Change code below this line

    string = array.join(delimiter);

    // Change code above this line
    return string;
}

// example 8

function slugify(title) {
    // Change code below this line

    slug = title.toLowerCase().split(' ');
    return slug.join('-');

    // Change code above this line
}

console.log(slugify('Arrays for begginers'));

//example 9

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    // Change code above this line
}
