// for (let i = 1; i <= 8; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i)
// }


// }
// for (let i = 1; i < 7; i++) {
//     for (let j = 6; j > i; j--) {
//         result += '*'
//     }
//     result += '\n'
// }
// console.log(result)

// let result = ''
// const length = 5

// for (let i = 0; i <= length; i++) {
//     for (let j = 0; j < length - i; j++) {
//         result += " "
//     }
//     for (let j = 0; j < 2 * i + 10; j++) {
//         result += "*"
//     }
//     result += "\n"
// }
// console.log(result)

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********

// let result = ''
// const lenght = 13

// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n'
//     console.log(result)
// }


// for (let i = 20; i > 10; i--) {
//     if (i === 12)  {
//          break
//      }
//     console.log(i)
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0)
//     console.log(i)
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//     continue;
//     }
//     console.log(i);
// }

// let i = 2
// while (i <= 16) {
//     if (i % 2 == 0) {
//         i++
//         continue;
//     }
//     else {
//         console.log(i)
//     }
//     i++
// }
'use strict'

let countOfMovie = ''
const personalMovieDB = {
    count: countOfMovie,
    movies: {},
    actors: {},
    genres: [],
    privat: false
},
button = document.getElementById('#click')
button.addEventListener('click', () => {
    countOfMovie = +prompt('Сколько фильмов вы просмотрели?', '');
    for (let i = 0; i < 2; i++) {
        const nameOfLastMovie = prompt('Один из последних просмотренных фильмов?', ''),
              rateOfLastMovie = +prompt('На сколько оцените его?', '');
        if (nameOfLastMovie != null && rateOfLastMovie != null && nameOfLastMovie != '' && rateOfLastMovie != '' && nameOfLastMovie.length < 50) {
        personalMovieDB.movies[nameOfLastMovie] = rateOfLastMovie;
        console.log('Correctly');
        } else {
        console.log('Error!');
        i--;
        }
    }
})
if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно-таки мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель!')
} else if (personalMovieDB.count >= 30 ) {
    console.log ('Сударь, да вы являетесь продвинутым киноманом')
} else if (personalMovieDB.count == 0) {
    console.log('Ошибка!')
}
console.log(personalMovieDB)






    
