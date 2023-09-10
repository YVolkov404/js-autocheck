console.log('rep-dom');
console.log('++++++++++++++++++++++++++++++++++++++++++++++');
let count = 0;

function cc(card) {
    // Змініть код лише під цим рядком
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            return count + 'Bet';
            break;
        case 7:
        case 8:
        case 9:
            count += 1;
            return card + 'Hold';
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count += 1;
            return card + 'Hold';
            break;
    }

    return 'Change Me';
    // Змініть код лише над цим рядком
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

console.log(count);
