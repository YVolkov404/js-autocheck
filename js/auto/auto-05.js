// ! --> example 1

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const pizzaPalace = {
    pizzas: ['Super-cheese', 'Smoked', 'Four meats'],
    // Change code below this line
    checkPizza(pizzaName) {
        return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
        const isPizzaAvailable = this.checkPizza(pizzaName);

        if (!isPizzaAvailable) {
            return `Sorry, there is no pizza named «${pizzaName}»`;
        }

        return `Order accepted, preparing «${pizzaName}» pizza`;
    },
    // Change code above this line
};

console.log(pizzaPalace.order('Smoked'));
console.log(pizzaPalace.order('Four meats'));
console.log(pizzaPalace.order('Big Mike'));
console.log(pizzaPalace.order('Viennese'));

// ! --> example 2

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Change code below this line
    getBalance() {
        return this.balance;
    },
    getDiscount() {
        return this.discount;
    },
    setDiscount(value) {
        this.discount = value;
    },
    getOrders() {
        return this.orders;
    },
    addOrder(cost, order) {
        this.balance -= cost - cost * this.discount;
        this.orders.push(order);
    },
    // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ! --> example 3

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const historyService = {
    orders: [
        { email: 'jacob@hotmail.com', dish: 'Burrito' },
        { email: 'solomon@topmail.net', dish: 'Burger' },
        { email: 'artemis@coldmail.net', dish: 'Pizza' },
        { email: 'solomon@topmail.net', dish: 'Apple pie' },
        { email: 'jacob@hotmail.com', dish: 'Taco' },
    ],
    // Change code below this line
    getOrdersLog() {
        return this.orders
            .map(order => `email: ${order.email} dish: ${order.dish}`)
            .join(' - ');
    },
    getEmails() {
        const emails = this.orders.map(order => order.email);
        const uniqueEmails = new Set(emails);
        return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
        return this.orders.filter(order => order.email === email);
    },
    // Change code above this line
};

console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));

// ! --> example 4

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish',
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = 'Jason';
child.age = 27;

console.log(parent.hasOwnProperty('surname'));
console.log(parent.hasOwnProperty('heritage'));
console.log(child.hasOwnProperty('name'));
console.log(child.hasOwnProperty('age'));
console.log(child.hasOwnProperty('surname'));
console.log(child.hasOwnProperty('heritage'));
console.log(parent.isPrototypeOf(child));

// ! --> example 5

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish',
};
// Change code below this line

const myParent = Object.create(ancestor);
myParent.name = 'Stacey';
myParent.surname = 'Moore';
myParent.age = 54;

const myChild = Object.create(myParent);
myChild.name = 'Jason';
myChild.age = 27;

// Change code above this line

console.log(ancestor.isPrototypeOf('parent'));
console.log(myParent.isPrototypeOf('child'));
console.log(ancestor.hasOwnProperty('surname'));
console.log(ancestor.surname);
console.log(myParent.hasOwnProperty('surname'));
console.log(myParent.surname);
console.log(myChild.hasOwnProperty('surname'));
console.log(myChild.surname);
console.log(ancestor.hasOwnProperty('heritage'));
console.log(ancestor.heritage);
console.log(myParent.hasOwnProperty('heritage'));
console.log(myParent.heritage);
console.log(myChild.hasOwnProperty('heritage'));
console.log(myChild.heritage);

// ! --> example 6

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class Car {}

console.log(new Car());

// ! --> example 7

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class myCar {
    // Change code below this line
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    // Change code above this line
}

console.log(new myCar('Audi', 'Q3', 36000));
console.log(new myCar('BMW', 'X5', 58900));
console.log(new myCar('Nissan', 'Murano', 31700));

// ! --> example 8

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class hisCar {
    // Change code below this line
    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    // Change code above this line
}

console.log(new hisCar({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(new hisCar({ brand: 'BMW', model: 'X5', price: 58900 }));
console.log(new hisCar({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// ! --> example 9

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class herCar {
    // Change code below this line
    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    changePrice(newPrice) {
        this.price = newPrice;
    }
    // Change code above this line
}

const newCar = new herCar({ brand: 'Nissan', model: 'Murano', price: 31700 });
newCar.changePrice(55000);
newCar.getPrice();

console.log(newCar);

// ! --> example 10

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.items.splice(this.items.indexOf(itemToRemove), 1);
        // this.items = this.items.filter(item => item !== itemToRemove);
    }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ! --> example 11

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class StringBuilder {
    constructor(initialValue) {
        this.value = initialValue;
    }
    getValue() {
        return this.value;
    }
    padEnd(str) {
        this.value = this.value.concat(str);
    }
    padStart(str) {
        this.value = str.concat(this.value);
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}
// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

// ! --> example 12

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class superCar {
    // Change code below this line
    #brand;

    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }
    getBrand() {
        return this.#brand;
    }
    changeBrand(newBrand) {
        this.#brand = newBrand;
    }
    // Change code above this line
}

const ourCar = new superCar({ brand: 'Audi', model: 'Q3', price: 36000 });

console.log(new superCar({ brand: 'Audi', model: 'Q3', price: 36000 }));
console.log(new superCar({ brand: 'BMW', model: 'X5', price: 58900 }));
console.log(new superCar({ brand: 'Nissan', model: 'Murano', price: 31700 }));

ourCar.changeBrand('Honda');
console.log(ourCar.getBrand());
console.log(ourCar);

// ! --> example 13

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class PrivateStorage {
    // Change code below this line
    #items;

    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove);
    }
}
// Change code above this line

const myStorage = new PrivateStorage([
    'Nanitoids',
    'Prolonger',
    'Antigravitator',
]);

console.log(myStorage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
myStorage.addItem('Droid');
console.log(myStorage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
myStorage.removeItem('Prolonger');
console.log(myStorage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ! --> example 14

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class MyStringBuilder {
    // Change code below this line
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;
    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}

// Change code above this line
const myStrBuilder = new MyStringBuilder('.');
console.log(myStrBuilder.getValue()); // "."
myStrBuilder.padStart('^');
console.log(myStrBuilder.getValue()); // "^."
myStrBuilder.padEnd('^');
console.log(myStrBuilder.getValue()); // "^.^"
myStrBuilder.padBoth('=');
console.log(myStrBuilder.getValue()); // "=^.^="

// ! --> example 15

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class muscleCar {
    // Change code below this line
    #brand;
    #model;
    #price;

    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.#model = model;
        this.#price = price;
    }

    get brand() {
        return this.#brand;
    }

    set brand(newBrand) {
        this.#brand = newBrand;
    }

    get model() {
        return this.#model;
    }

    set model(newModel) {
        this.#model = newModel;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }
    // Change code above this line
}

const richCar = new muscleCar({ brand: 'Audi', model: 'Q3', price: 36000 });

console.log(richCar);

console.log((richCar.brand = 'BMW'));

console.log((richCar.model = 'X10'));

console.log((richCar.price = '55000'));

console.log(richCar);

// ! --> example 16

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class SportCar {
    // Change code below this line
    static MAX_PRICE = 50000;
    #price;

    constructor({ price }) {
        this.#price = price;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (newPrice > SportCar.MAX_PRICE) {
            return;
        }
        this.#price = newPrice;
    }
    // Change code above this line
}

const audi = new SportCar({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// ! --> example 17

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class FirstCar {
    static #MAX_PRICE = 50000;
    // Change code below this line
    static checkPrice(price) {
        if (price > FirstCar.#MAX_PRICE) {
            return 'Error! Price exceeds the maximum';
        }
        return 'Success! Price is within acceptable limits';
    }
    // Change code above this line
    constructor({ price }) {
        this.price = price;
    }
}

const audiQ3 = new FirstCar({ price: 36000 });
const bmwX10 = new FirstCar({ price: 64000 });

console.log(FirstCar.checkPrice(audiQ3.price)); // "Success! Price is within acceptable limits"
console.log(FirstCar.checkPrice(bmwX10.price)); // "Error! Price exceeds the maximum"

// ! --> example 18

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class User {
    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}
// Change code below this line
class Admin extends User {
    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser',
    };
}

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);

// ! --> example 19

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class MainUser {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}

class MainAdmin extends MainUser {
    // Change code below this line

    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser',
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    // Change code above this line
}

const mango = new MainAdmin({
    email: 'mango@mail.com',
    accessLevel: MainAdmin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

// ! --> example 20

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

class NewUser {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    set email(newEmail) {
        this.email = newEmail;
    }
}

class newAdmin extends NewUser {
    // Change code below this line

    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser',
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
        this.blacklistedEmails = [];
    }
    blacklist(email) {
        this.blacklistedEmails.push(email);
    }
    isBlacklisted(email) {
        return this.blacklistedEmails.some(element => element === email);
    }
    // Change code above this line
}

const mangos = new newAdmin({
    email: 'mango@mail.com',
    accessLevel: newAdmin.AccessLevel.SUPERUSER,
});

console.log(mangos.email); // "mango@mail.com"
console.log(mangos.accessLevel); // "superuser"

mangos.blacklist('poly@mail.com');
console.log(mangos.blacklistedEmails); // ["poly@mail.com"]
console.log(mangos.isBlacklisted('mango@mail.com')); // false
console.log(mangos.isBlacklisted('poly@mail.com')); // true

