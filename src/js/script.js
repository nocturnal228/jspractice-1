'use strict'

// //1
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
// 	nameOfLastMovie = prompt('Один из последних просмотренных фильмов?', ''),
// 	rateOfLastMovie = +prompt('На сколько оцените его?', ''),
// 	nameOfLastMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
// 	rateOfLastMovie2 = +prompt('На сколько оцените его?', '')

// //2
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }
// //
// personalMovieDB.movies[nameOfLastMovie] = rateOfLastMovie
// personalMovieDB.movies[nameOfLastMovie1] = rateOfLastMovie2

// console.log(personalMovieDB)


// for (let i = 1; i <= 8; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i)
// }

let result = ''
const lenght = 7

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += '*'   
    }
    result += '\n'
} 

console.log(result)




