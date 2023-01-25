'use strict'

//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

//2
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}
