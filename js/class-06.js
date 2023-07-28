console.log('Classwork 6');

//================================

// деструктуризація масиву
const arr = [1, 2, 3, 4, 5, 6, 7];

const firstElement = arr[0];
const secondElement = arr[1];
const thirdElement = arr[2];
console.log(firstElement, secondElement, thirdElement);

const [first, second, third] = arr;
console.log(first, second, third);

// деструктуризація об'єкту
const user = {
    name: 'test',
    skills: {
        html: true,
        css: false,
        js: true,
    },
};

const { skills, name } = user;
console.log(skills);
console.log(name);

// глибока деструктуризація об'єкту
const {
    skills: { html, css, js },
} = user;

console.log(html);
console.log(css);
console.log(js);

// деструктуризація об'єкту в циклі

const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

// без деструктуризації
const names = [];

for (const user of users) {
    names.push(user.name);
}

console.log(names);

// з деструктуризацією
const userNames = [];

for (const { name } of users) {
    userNames.push(name);
}

console.log(userNames);

// rest & spread

const numbers = [1, 2, 3];
const copy = [...numbers]; //spread

console.log(numbers);
console.log(copy);
console.log(numbers === copy);

const [firstNumber, ...args] = numbers; // rest

console.log(firstNumber);
console.log(args);

// rest & spread in function

function foo(...params) {
    // rest
    console.log(params);
}

foo(...numbers); // spread

console.log(...numbers);

const usersNames = ['Alice', 'Kate', 'Emma'];

function foods(first, second, third) {
    console.log('firstName: ', first);
    console.log('secondName: ', second);
    console.log('thirdName: ', third);
}

foods(...userNames);

function fans(first, second, ...args) {
    console.log(first);
    console.log(second);
    console.log(args);
}

fans('Alice', 'Kate', 'Emma', 'Robbie', 'Mary');

const userInfo = {
    name: 'user',
    age: 23,
    city: 'Kyiv',
    skills: {
        html: true,
        css: false,
        js: true,
    },
};

function info({ name, age, ...args }) {
    console.log(name);
    console.log(age);
    console.log(args);
}

info(userInfo);

//=====================================

const firstObject = { a: 1, b: 2 };
const secondObject = { a: 3, c: 4 };

const thirdObject = {
    a: 5,
    ...firstObject, // { a: 1, b: 2 }
    ...secondObject, // { a: 3, c: 4, b: 2 }
    c: 6,
};

console.log(thirdObject);

//===================================

const userFoo = {
    id: 67,
    username: 'harry_potter',
    profile: {
        nameOfUser: 'Harry',
        surname: 'Potter',
        age: '25',
    },
};

const {
    username,
    profile: { nameOfUser, surname },
} = userFoo;

console.log(`Name: ${nameOfUser}`);
console.log(`Surname: ${surname}`);
console.log(`Username: ${username}`);

//===================================
