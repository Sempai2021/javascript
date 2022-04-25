"use strict";

// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }




// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ничего');
// }

// (num === 50) ? console.log('Да, ровно!'): console.log('Не ровно!');

const num = 52;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Ничего не соотвествует');
}