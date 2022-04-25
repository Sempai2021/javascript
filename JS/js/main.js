"use strict";

// Циклы

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

for (let num = 50; num <= 55; num++) {
    if (num === 53) {
        // break;
        continue;
    }
    console.log(num);
}