import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { userReducer } from './userReducer'
import { searchedMoviesReducer } from './searchedMoviesReducer'
import { saveSearchedMoviesByGenresReducer } from './saveSearchedMoviesByGenresReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  searchedMovies: searchedMoviesReducer,
  saveSearchedMoviesByGenres: saveSearchedMoviesByGenresReducer,
})
