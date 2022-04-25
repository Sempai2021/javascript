"use strict";

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я ссыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'asdasdsadadasdsa');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все ссыты');
// } else {
//     console.log('Идем в другое заведение');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны');
// } else {
//     console.log('Идем в другое заведение');
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);

console.log(NaN || 2 || undefined);
// 2
console.log(NaN && 2 && undefined);
// nan
console.log(1 && 2 && 3);
// 3
console.log(!1 && 2 || !3);
// 1 = false 2 = true part1 = false  3 = false
console.log(25 || null && !3);
// 25
console.log(NaN || null || !3 || undefined || 5);
// 5
console.log(NaN || null && !3 && undefined || 5);
// 5
console.log(5 === 5 && 3 > 1 || 5);
// 

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}