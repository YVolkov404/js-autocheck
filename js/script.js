// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const customerCredits = 5000;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
// console.log(message);

// function sayHi() {
//     console.log('Hello this is my first function!');
// }
// sayHi();

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    const totalPrice = pricePerDroid * orderedQuantity;
    if (customerCredits < totalPrice) {
        message = 'Insufficient funds!';
    } else {
        message = `You ordered ${orderedQuantity} droids, you have ${
            customerCredits - totalPrice
        } credits left`;
    }
    return console.log(message);
}

makeTransaction(pricePerDroid, orderedQuantity, customerCredits);

const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('click');

    const value = Number(valueInput.value);

    total += value;
    outputEl.textContent = total;
    valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
});

// example 1

const max = 10;

for (let i = 0; i < max; i += 1) {
    console.log(`${max} % ${i} =`, max % i);
}

// example 2

for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
        console.log('Знайшли число 3, перериваємо виконання циклу');
        break;
    }
}

console.log('Лог після циклу');

// example 3

const number = 10;

for (let i = 0; i < number; i += 1) {
    if (i % 2 === 0) {
        continue;
    }

    console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
}

// example 4

let ordered = 5;
const available = 3;

function checkStorage(available, ordered) {
    let message;

    if (ordered === 0) {
        message = 'There are no products in the order!';
    } else if (ordered > available) {
        message =
            'Your order is too large, there are not enough items in stock!';
    } else {
        message = 'The order is accepted, our manager will contact you';
    }

    return message;
}

// example 5

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;

    if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT;
    } else {
        discount = BASE_DISCOUNT;
    }

    return discount;
}

// example 6

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    switch (password) {
        case null:
            message = 'Canceled by user!';
            break;
        case ADMIN_PASSWORD:
            message = 'Welcome!';
            break;
        default:
            message = 'Access denied, wrong password!';
    }

    return message;
}

// example 7

function getShippingCost(country) {
    let message;

    switch (country) {
        case 'China':
            message = `Shipping to ${country} will cost 100 credits`;
            break;
        case 'Chile':
            message = `Shipping to ${country} will cost 250 credits`;
            break;
        case 'Australia':
            message = `Shipping to ${country} will cost 170 credits`;
            break;
        case 'Jamaica':
            message = `Shipping to ${country} will cost 120 credits`;
            break;
        default:
            message = `Sorry, there is no delivery to your country`;
            break;
    }

    return message;
}

// example 8

let message = 'fuck';
const maxLength = 6;

function formatMessage(message, maxLength) {
    let result;

    if (message.length <= maxLength) {
        result = message;
    } else if (message.length > maxLength) {
        result = message.slice(0, maxLength) + '...';
    }

    return result;
}

formatMessage(message, maxLength);

// example 9

function checkForSpam(message) {
    let result;
    if (message.includes('spam') && message.includes('sale')) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
