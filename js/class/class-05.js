function sayHello() {
    console.log('Hello!');
}

sayHello();

const test = {
    '#125_part_II': 'Hello!',
    '2catch': 5,
    sayHelloKey: sayHello,
};

test.sayHelloKey();
console.log(test);

//------------------------------

const userA = {
    userName: 'Mango',
    age: 20,
};

const userB = userA;
userB.age = 30;
console.log(userA.age, userB.age);

//-------------------------------

const user = {
    name: 'Alice',
    skills: {
        html: true,
        css: true,
        react: true,
    },
    sayHello(city, country) {
        console.log(city, country);
        console.log(`My name is ${this.name}`);
    },
    sayGoodbye: function () {
        console.log('Goodbye');
    },
    isAdmin: true,
};
user.sayHello('Lviv', 'Ukraine');
user.sayGoodbye();
console.log(user);

//-------------------------------

console.log(user.name);
console.log('css', user.skills.css);

const objectKey = 'name';

console.log(user[objectKey]);
console.log(user['name']);

//-------------------------------

user.name = 'Liza';
user.city = 'Lviv';
user['age'] = 28;
console.log(user);
console.table(user);

user.city = 'Odessa';
user['age'] = 38;
console.log(user);
console.table(user);

//--------------------------------

Object.freeze(user.skills);
user.name = 'Kate';
user.city = 'Lviv';
console.table(user);

//--------------------------------

for (const key in user) {
    console.log(key);
    console.log(user[key]);
}

for (const test in user) {
    console.log(test);
    console.log(user[test]);
}

//--------------------------------

const keys = Object.keys(user);
for (const key of keys) {
    console.log(key, user[key]);
}
console.log(keys);

const skills = Object.keys(user.skills);
console.log(skills);

const values = Object.values(user);
console.log(values);

const entries = Object.entries(user);
console.log(entries);

//-------------------------------

function createBasket(product, quantity, price) {
    const result = {
        name: product,
        totalPrice: quantity * price,
        quantity,
        price,
    };
    const keys = Object.keys(result);
    console.log(keys);

    return keys;

    return result;
}

console.log(createBasket('pizza', 3, 120));

//---------------------------------

const players = {
    Dan: 60,
    Kate: 130,
    William: 45,
    David: 55,
    Alex: 18,
};

function getTime(users) {
    let players = 0;
    let totalTime = 0;

    for (const userName in users) {
        players += 1;
        console.log(userName);
        totalTime += users[userName];
    }

    return `Count of players ${players}, average time ${totalTime / players}`;
}

console.log(getTime(players));
