"use strict";

// Задание 1

const numberOfFilms = prompt('Один из просмотренных фильмов?', '');
const numberOfFilmsTwo = prompt('На сколько оцените его', '');
const numberOfFilmsThree = prompt('Один из просмотренных фильмов?', '');
const numberOfFilmsTFour = prompt('На сколько оцените его', '');
// Задание 2

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personaMovieDB.movies[numberOfFilms] = numberOfFilmsTwo;
personaMovieDB.movies[numberOfFilmsThree] = numberOfFilmsTFour;

console.log(personaMovieDB);