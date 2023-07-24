// example 1

const arr = [3, 'Hello', null, 42, false];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
        arr.splice(i, 1);
        i -= 1;
    }
}
console.log(arr);

// example 2

function getCommonElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i], i + 1)) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getCommonElements([1, 2, 19, 3, 2, 1, 17, 19]));

// example 3

const users = [
    'Svetlana',
    'Petro',
    'Yuliya',
    'Oleksiy',
    'Larisa',
    'Victor',
    'Dmytro',
    'Olga',
];
const men = ['Petro', 'Oleksiy', 'Victor', 'Dmytro'];

function getWomen(users, men) {
    const women = [];
    for (const user of users) {
        if (!men.includes(user)) {
            women.push(user);
        }
    }
    return women;
}

console.log(getWomen(users, men));

// example 4

const langs = ['zpython', 'bjavascript', 'ac++', 'haskel', 'php', 'ruby'];

const firstEl = langs[0];
console.log(firstEl.charCodeAt(0));

let isRightOrder = false;

while (!isRightOrder) {
    for (let i = 0; i < langs.length - 1; i++) {
        const currentElement = langs[i];
        const nextElement = langs[i + 1];
        // console.log(currentElement);
        // console.log(nextElement);
        const currentElementCharCode = currentElement.charCodeAt(0);
        const nextElementCharCode = nextElement.charCodeAt(0);

        if (currentElementCharCode > nextElementCharCode) {
            langs[i] = nextElement;
            langs[i + 1] = currentElement;
            isRightOrder = false;
        }
    }
}

console.log(langs);
