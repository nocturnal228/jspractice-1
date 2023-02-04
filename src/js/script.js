'use strict'

let countOfMovie = ""
const personalMovieDB = {
    count: countOfMovie,
    movies: {},
    actors: {},
    genres: [],
    privat: false
},
button = document.getElementById('#click')
button.addEventListener('click', () => {
    countOfMovie = +prompt('Сколько фильмов вы просмотрели?', "");
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
    writeYourGenres();
    showMyDB();
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

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр фильма под номером ${i}`)
    }
}
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}