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

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };

//const { yesterday, today, tomorrow } = highTemperatures;

//const meanTemperature = (yesterday + today + tomorrow) / 3;

//console.log(meanTemperature);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 12

// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 13

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

//const temperature = (highYesterday + highToday + highTomorrow) / 3;

//console.log(temperature);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 14

const someColors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexSomeColors = [];
const rgbSomeColors = [];

//const { hex, rgb } = someColors;

for (const { hex, rgb } of someColors) {
    hexSomeColors.push({ hex, rgb }.hex);
    rgbSomeColors.push({ hex, rgb }.rgb);
}

console.log(hexSomeColors);
console.log(rgbSomeColors);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 15

const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};

const {
    today: {
        low: lowToday,
        high: highToday,
        icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: lowTomorrow,
        high: highTomorrow,
        icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
} = forecast;

console.log(forecast);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 16

function calculateMeanTemperature(forecast) {
    const {
        today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh },
    } = forecast;

    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

const forecastTo = {
    today: { low: 15, high: 19 },
    tomorrow: { low: 10, high: 16 },
};

console.log(calculateMeanTemperature(forecastTo));

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 16

const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 17

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
    ...firstGroupScores,
    ...secondGroupScores,
    ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(bestScore);
console.log(worstScore);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 18

const defaultSettings = {
    theme: 'light',
    public: true,
    withPassword: false,
    minNumberOfQuestions: 10,
    timePerQuestion: 60,
};
const overrideSettings = {
    public: false,
    withPassword: true,
    timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings);
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// example 18

// function makeTask({ category: 'Finance', newText: 'Take interest' }) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';

//     data = {
//         completed: false,
//         category: 'General',
//         priority: 'Normal',
//         text,
//     };

//     const {
//         completed: newCompleted,
//         category: newCategory,
//         priority: newPriority,
//         text: newText,
//     } = data;

//     return data;
// }

// console.log(data);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

const book = {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
};

// Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
const {
    title = 'ggg',
    coverImage = 'https://via.placeholder.com/640/480',
    author,
} = book;

console.log(title); // The Last Kingdom
console.log(author); // Bernard Cornwell
console.log(coverImage); // https://via.placeholder.com/640/480
