import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { userReducer } from './userReducer'
import { searchedMoviesReducer } from './searchedMoviesReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  searchedMovies: searchedMoviesReducer,
})
