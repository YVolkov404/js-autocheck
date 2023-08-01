console.log('Classwork 7');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/** Явне повернення
 * Get product total price
 * @param {Number} qty
 * @param {Price} price
 * @returns {Number} price per item
 */

// const getTotalPrice = (qty, price) => {
//     return qty * price;
// }

// console.log(getTotalPrice(3, 150));
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/** Неявне повернення
 * Get product total price
 * @param {Number} qty
 * @param {Price} price
 * @returns {Number} price per item
 */

const getTotalPrice = (qty, price) => qty * price;

console.log(getTotalPrice(3, 150));
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

//const checkPassword = (password) => password === 'qwert123';

//console.log(checkPassword('qwert123'));

// OR

const checkPassword = password => password === 'qwert123';

console.log(checkPassword('qwert123'));

const sayHi = () => 'Hello!';

console.log(sayHi());
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// Відсутність псевдомасиву arguments

// function getProductList() {
//     for (const product of arguments) {
//         console.log(product);
//     }
// }

//getProductList('apple', 'mango', 'banana', 'kiwi');

// OR

const getProductList = (...args) => {
    for (const product of args) {
        console.log(product);
    }
};

getProductList('apple', 'mango', 'banana', 'kiwi');

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// Callback function : функція у вигляді посилання на функції

// function logResult(a, b, callback) {
//     console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, add);
// logResult(4, 5, multiply);

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// Callback function : інлайнова

function logResult(a, b, callback) {
    console.log(callback);
    const result = callback(a, b);
    console.log(`Result is ${result}`);
}

const add = (a, b) => a + b;

logResult(4, 5, add);
logResult(4, 5, (a, b) => a * b);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// Масив forEach

const products = ['apple', 'mango', 'banana', 'kiwi'];

// for
for (let i = 0; i < products.length; i += 1) {
    const product = products[i];

    console.log(`${i + 1} - ${product}`);
}

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// forEach
products.forEach((element, index, array) => {
    console.log(`${index + 1} - ${element}`);
});

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

function createProduct(obj, callback) {
    const product = {
        ...obj,
        id: Date.now(),
    };
    callback(product);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice({ price, quantity }) {
    console.log(`Total Price: ${price * quantity}`);
}

createProduct(
    {
        name: '🍓',
        price: 30,
        quantity: 3,
    },
    logProduct,
);

createProduct(
    {
        name: '🍓',
        price: 30,
        quantity: 3,
    },
    logTotalPrice,
);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 *
 * @param {*} success
 * @param {*} error
 * @returns
 */

function getProductDetails(id, success, error) {
    // products.forEach(currentProduct => {
    //     if (id === currentProduct.id) {
    //         console.log('Success');
    //         return;
    //     }
    // });

    for (const currentProduct of productsCart) {
        if (id === currentProduct.id) {
            success(currentProduct);
            return;
        }
    }

    error(id);
}

const productsCart = [
    {
        id: 1,
        name: 'name-1',
        price: 230,
        descr: 'description-1',
    },
    {
        id: 2,
        name: 'name-2',
        price: 330,
        descr: 'description-2',
    },
    {
        id: 3,
        name: 'name-2',
        price: 430,
        descr: 'description-2',
    },
];

getProductDetails(3, handleSuccess, handleError);

function handleSuccess(message) {
    console.log(`Success:`, message);
}

function handleError(productId) {
    console.log(`Error: ${productId}`);
}
