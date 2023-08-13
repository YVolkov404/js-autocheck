// ! --> example 1

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
// }

// Викликаємо функцію greet
// і виводимо результат у консоль
// console.log(greet('Mango'));
// Ласкаво просимо Манго.

// Виводимо функцію greet
// у консоль, не викликаючи її
// console.log(greet);
/*
ƒ greet() {
     return `Ласкаво просимо ${name}.`;
}
*/

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// function makePizza() {
//     return 'Your pizza is being prepared, please wait.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

// Callback-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// }

// Функція вищого порядку
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }

// registerGuest('Mango', greet);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName, callback);
// }

// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultra-cheese', deliverPizza));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 3

// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }

// Передаємо інлайн-функцію greet у якості callback
// registerGuest('Mango', function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// });

// Передаємо інлайн-функцію notify у якості callback
// registerGuest('Poly', function notify(name) {
//     console.log(`Шановний ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName, callback);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultra-cheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 4

function processCall(recipient, onAvailable, onNotAvailable) {
    // Імітуємо доступність абонента випадковим числом
    const isRecipientAvailable = Math.random() > 0.5;

    if (!isRecipientAvailable) {
        onNotAvailable(recipient);
        return;
    }

    onAvailable(recipient);
}

function takeCall(name) {
    console.log(`З'єднуємо з ${name}, очікуйте...`);
    // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступний, записуємо голограму.`);
    // Логіка запису голограми
}

processCall('Mango', takeCall, activateAnsweringMachine);
processCall('Poly', takeCall, leaveHoloMessage);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const pizzaPalace = {
    pizzas: ['Ultra-cheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        if (!this.pizzas.includes(pizzaName)) {
            onOrderError(onError);
            return `There is no pizza with a name ${pizzaName} in the assortment.`;
        }
        return makePizza(pizzaName, onSuccess);
    },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
    return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
