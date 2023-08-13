// const friends = ['Mango', 'Kiwi', 'Apple', 'Peach'];
// console.table(friends);

// console.log(friends[2]);

// friends[1] = 'New';
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// ------------------------------------

// let a = [1, 2, 3];
// let b = a;

// console.log(b);

// a[1] = 3;

// console.log(b);

// console.log(a === b);
// console.log([1, 2, 3] === [(1, 2, 3)]);

// ------------------------------------

// const array = ['Mango', 'Kiwi', 'Apple', 'Peach'];

// for (let i = 0; i < array.length; i += 1) {
//     array[i] += ' -> Fruit';
//     // array[i] += ` - ${i}`; counter
// }

// console.table(array);

// const items = ['Mango', 'Kiwi', 'Apple', 'Peach'];

// for (let item of items) {
//     item += ` - ${item}`;
//     console.log(item);
// }

// ------------------------------------

// const cart = [45, 354, 23, 11, 37, 98, 134, 201];
// let total = 0;

// // counter can be changed
// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }

// // use it if don't need to change counter
// for (const item of cart) {
//     total += item;
// }

// console.log(total);

// ------------------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// ------------------------------------

// const cart = [45, 354, 23, 11, 37, 98, 134, 201];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     const item = cart[i];

//     if (item % 2 !== 0) {
//         console.log(item);
//         total += item;
//     }
// }

// for (const item of cart) {
//     if (item % 2 !== 0) {
//         console.log(item);
//         total += item;
//     }
// }

// console.log(total);

// ------------------------------------

// const cart = [45, 354, 23, 11, 37, 98, 134, 201];
// let total = 0;

// for (const item of cart) {
//     if (item % 2 !== 0) {
//         continue;
//     }

//     console.log(item);
//     total += item;
// }

// console.log(total);

// ------------------------------------

const logins = ['salkjdfhn', 'qwejoinvxc', 'opxckljnmz', 'tfgzkjnmbc'];
const loginToFind = 'opxckljnmz';

let message = `Login ${loginToFind} is not find`;

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    console.log('Login: ', login);
    console.log(`${login} === ${loginToFind}`, login === loginToFind);

    if (login === loginToFind) {
        message = `Login ${loginToFind} is find`;
        break;
    }
}

// OR

for (const login of logins) {
    console.log('Login: ', login);
    console.log(`${login} === ${loginToFind}`, login === loginToFind);

    if (login === loginToFind) {
        message = `Login ${loginToFind} is find`;
        break;
    }
}

console.log(message);

// OR

console.log(logins.includes(loginToFind));

// OR

const mess = logins.includes(loginToFind)
    ? `Login ${loginToFind} is find`
    : `Login ${loginToFind} is not find`;

// ------------------------------------

const numbers = [51, 18, 22, 89, 20, 63, 44];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log(smallestNumber);

// -------------------------------------

// const friends = ['Mango', 'Kiwi', 'Apple', 'Peach'];

// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// console.log(string);

// const str = friends.join(', ');
// console.log(str);

// ------------------------------------

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
    // if (letter === letter.toLowerCase()) {
    //     console.log('Ця буква в нижньому регістрі: ', letter);
    //     invertedString += letter.toUpperCase();
    // } else {
    //     console.log('Ця буква в верхньому регістрі: ', letter);
    //     invertedString += letter.toLowerCase();
    // }

    invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}

console.log(invertedString);

// -----------------------------------

const title = 'Top benefits of React framework';

const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
console.log(words);

const slug1 = words.join('-');
console.log(slug1);

const slug2 = title.toLowerCase().split(' ').join('-');
console.log(slug2);

// ------------------------------------

const array1 = [5, 10, 15, 20];
const array2 = [40, 55, 60];

let total = 0;

const values = array1.concat(array2);

for (const number of values) {
    total += number;
}

console.log(total);

// -----------------------------------

const cards = ['card1', 'card2', 'card3', 'card4', 'card5'];

console.log(cards);

const cardToRemove = 'card3';
const index1 = cards.indexOf(cardToRemove);

cards.splice(index1, 1);
// console.log(cards.splice(index1, 1));

console.log(index1);
console.log(cards);

const cardToInsert = 'card3';
const index2 = cardToRemove;

cards.splice(2, 0, cardToInsert);

console.log(cards);

const cardToUpdate = 'card2';
const index3 = cards.indexOf(cardToUpdate);

cards.splice(index3, 1, 'card-2');

console.table(cards);
