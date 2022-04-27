"use strict";

// Домашка

// const film = +prompt('Сколько посмотрели фильмов?', '');

// const personaMpvieDB = {
//     count: film,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };


// for (let i = 0; i < 2; i++) {

//     const One = prompt('Какой смотрели фильм?', '');
//     const Two = prompt('Сколько раз его смотрели?', '');

//     if (One != null && One != ' ' && One.length < 10 && Two != null && Two != ' ' && Two.length < 10) {
//         console.log('Успешно');
//         personaMpvieDB.movies[One] = Two;
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personaMpvieDB.count < 10) {
//     console.log('Просмотренно довольно мало фильмов');
// } else if (personaMpvieDB.count >= 10 && personaMpvieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personaMpvieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personaMpvieDB);


//  Lesson Методы и свойства строк и чисел

// const str = "tEsT";


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("uitxz"));

const logg = "Hello world";

console.log(logg.slice(6));

console.log(logg.substr(6, 5));


const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));