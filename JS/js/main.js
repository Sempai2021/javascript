"use strict";

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }


// let lengthResult = 10;
// for (let i = 20; i >= lengthResult; i--) {
//     console.log(i);
//     if (i === 13) {
//         break;
//     }
// }

// let number = 0;
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//         i++;
//     }


// const arr = [];
// for (let i = 5; i <= 10; i++) {
//     arr[i - 5] = i;
// }

// console.log(arr);

// const arr = [5, 6, 7, 8, 9, 10];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof (data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }


// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// for (let i = 0; i < lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);