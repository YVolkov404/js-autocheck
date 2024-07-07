// console.log('Hello World'.length);
// console.log('Hello World'.toUpperCase());
//------------------------------
// const yearOfBirth = 2006;
// console.log(yearOfBirth);

// yearOfBirth = 2000; // Uncaught TypeError

// let age;

// console.log(age);

// age = 14;

// console.log(age);

// age = 24;

// console.log(age);

// console.log(null);

// const points = 20.1;

// console.log(typeof points);

// const word = 'word';

// console.log(typeof word);

// const isLoggedIn = true;

// console.log(typeof isLoggedIn);

// let selectedProduct = null;

// console.log(typeof selectedProduct);

// console.log(typeof undefined);

// Get power of number
// const base = 4;
// const exp = 11;
// let pow = Math.pow(base, exp);

// console.log(pow);

// if (pow === Infinity) {
//     console.log(`Let's call it infinity`);
// }

// console.log(1 / pow);

// Get random number between two values
// function getRandom(max, min) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.round(Math.random() * (max - min) + min);
// }

// console.log(getRandom(23.89, 11.95));

// const guestName = 'Mango';
// const guestNumber = '21';

// const greetings = `Welcome ${guestName}, your room number is ${guestNumber}`;

// console.log(greetings);

// console.log(greetings.length);

// console.log(greetings.toLowerCase());

// console.log(greetings.toUpperCase());

// console.log(greetings);

// console.log(greetings.indexOf('me'));

// console.log(greetings.indexOf('ame'));

// console.log(greetings.indexOf('ur r'));

// console.log(greetings.includes('me'));

// console.log(greetings.includes('ame'));

// console.log(greetings.includes('Room'));

// const cssFile = 'styles.css';

// console.log(cssFile.endsWith('css'));

// console.log(cssFile.endsWith('js'));

// console.log(cssFile.replace('css', 'js'));

// const cssFiles = 'styles.css about.css main.css';

// console.log(cssFiles.replaceAll('css', 'js'));

// const productName = 'Repair droid';

// const newProductName = productName.slice(3, 9);

// console.log(newProductName);

// console.log(productName.slice(7, productName.length));

// console.log(Infinity);

//------------------------
// let x;

// const power = prompt('Enter the power', x);

// if (power < 0) {
//     console.log('Digit not positive');
// } else if (!(power < 0)) {
//     const res = Math.pow(10, power);
//     console.log(res);
// } else {
//     console.log('Has not digit');
// }

//-------------------------
// const foo = 0;
// switch (foo) {
//     case -1:
//         console.log('negative 1');
//         break;
//     case 0:
//         console.log(0);
//         break;
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log('default');
// }

//-------------------------

// let i = 3;

// while (i < 6) {
//     if (i === 5) {
//         break;
//     }
//     i = i + 1;
// }

// console.log(i);

//--------------------------

// let password = '';

// do {
//     password = prompt('Введіть пароль довший 4-х символів', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

//--------------------------

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
// }

// console.log(sum);

//---------------------------

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
// }

//---------------------------

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//         console.log('Знайшли число 3, перериваємо виконання циклу');
//         break;
//     }
// }

// console.log('Лог після циклу');

//---------------------------

const number = 10;

for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
        continue;
    }

    console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
}
