// example 1

const apartment = {
    description: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
};

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 2

// const keys = [];
// const values = [];
// const advert = {
//     service: 'apt',
// };

// const apartment = Object.create(advert);
// apartment.description = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }

// console.log(keys);
// console.log(values);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 3

// function countProps(object) {
//     let propCount = 0;

//     Object.values(object);
//     for (const value in object) {
//         if (object.hasOwnProperty(value)) {
//             propCount += object[value] = 1;
//         }
//     }
//     return propCount;
// }

// console.log(
//     countProps({
//         mail: 'poly@mail.com',
//         isOnline: true,
//         score: 500,
//     }),
// );

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 4

const values = [];

const keys = Object.keys(apartment);

for (const key of keys) {
    values.push(apartment[key]);
}

console.log(values);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 5

function countProps(object) {
    let propCount = Object.keys(object).length;

    return propCount;
}

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 6

function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Change code below this line
    for (const value of Object.values(salaries)) {
        totalSalary += value;
    }
    // Change code above this line
    return totalSalary;
}

console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 7

const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const item of colors) {
    hexColors.push(item.hex);
    rgbColors.push(item.rgb);
}

console.log(hexColors);
console.log(rgbColors);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

//example 8

const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

// console.table(products);

function getProductPrice(productName) {
    // console.log(products.name);
    for (const name of products) {
        // const items = Object.values(name);
        if (Object.values(name).includes(productName)) {
            return name.price;
        }
    }
    return null;
}

console.log(getProductPrice('Radar'));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

//example 9

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

function getAllPropValues(propName) {
    const propArr = [];

    for (const key of products) {
        if (Object.keys(key).includes(propName)) {
            propArr.push(key[propName]);
        }
    }

    return propArr;
}

console.log(getAllPropValues('price'));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 10

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

function calculateTotalPrice(productName) {
    let total = 0;
    for (const key of products) {
        if (key.name === productName) {
            total = key.price * key.quantity;
        }
    }
    return total;
}

console.log(calculateTotalPrice('Grip'));
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 11

const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};

//const { yesterday, today, tomorrow } = highTemperatures;

//const meanTemperature = (yesterday + today + tomorrow) / 3;

//console.log(meanTemperature);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 12

const {
    yesterday,
    today,
    tomorrow,
    icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

//const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 13

const highYesterday = highTemperatures.yesterday;
const highToday = highTemperatures.today;
const highTomorrow = highTemperatures.tomorrow;
const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
