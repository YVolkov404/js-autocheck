console.log('rep-arr-methods');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ?----------------- ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВІВ -------------------------
 * *++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
// *======================================================================

/**
 * todo :: Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: нічого не повертає
 *    ? :: заміняє класичний for, якщо не треба переривати цикл
 */

const numbers = [5, 46, 34, 21, 83, 21, 9];

numbers.forEach(function (number, index, array) {
    console.table('number --> ', number);
});

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

numbers.forEach(
    function (number, index, array) {
        console.table('number --> ', number);
        console.log(this);
    },
    { a: 5, b: 7, c: 1 },
);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

/**
 * todo :: Array.prototype.map()
 *    ? :: поелементно перебирає оригінальний масив
 *    ? :: не змінює оригінальний масив
 *    ? :: повертає новий масив такої ж довжини
 */

// ! --> example 1

const doubledNums = numbers.map(function (number) {
    return number * 2;
});

console.log('numbers: ', numbers);
console.log('doubledNums', doubledNums);

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

// ! --> example 2

const players = [
    {
        id: 'player-1',
        name: 'Mango',
        timePlayed: 310,
        points: 54,
        online: false,
    },
    {
        id: 'player-3',
        name: 'Kiwi',
        timePlayed: 230,
        points: 48,
        online: true,
    },
    {
        id: 'player-2',
        name: 'Poly',
        timePlayed: 470,
        points: 92,
        online: true,
    },
    {
        id: 'player-4',
        name: 'Ajax',
        timePlayed: 150,
        points: 71,
        online: false,
    },
    {
        id: 'player-5',
        name: 'Chelsy',
        timePlayed: 80,
        points: 48,
        online: true,
    },
];

// ? отримуємо масив імен всіх гравців
const playerNames = players.map(player => {
    return player.name;
});

// const playerNames = players.map(player => player.name);

console.log('playerNames: ', playerNames);

// ? отримуємо масив з id всіх гравців
// const playerId = players.map(player => {
//     return player.id;
// });

const playerId = players.map(player => player.id);

console.log('playerId: ', playerId);

// ? збільшуємо кількість поінтів кожного гравця на 10%
const updatePlayers = players.map(player => {
    return {
        ...player,
        points: player.points * 1.1,
    };
});

console.table(updatePlayers);

// ? збільшуємо кількість годин кожного гравця за id
const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
    // if (playerIdToUpdate === player.id) {
    //     return {
    //         ...player,
    //         timePlayed: player.timePlayed + 100,
    //     };
    // }
    // return player;

    // запис за допомогою тернарного оператора
    return playerIdToUpdate === player.id
        ? {
              ...player,
              timePlayed: player.timePlayed + 100,
          }
        : player;
});

console.table(updatedPlayers);
