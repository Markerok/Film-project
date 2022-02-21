import axios from 'axios'
import { createContext, useContext, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  saveMovies,
  saveSearchedMovies,
  saveSearchedMoviesByGenres,
} from '../store/actions'

const defaultContext = {
  getMovies: () => {},
  search: () => {},
  searchedValue: '',
  searchGenre: () => {},
  searchValueByGenres: '',
}

const ContentContext = createContext(defaultContext)

export const ContentProvider = ({ children }) => {
  const dispatch = useDispatch()

  const [searchedValue, setSearchedValue] = useState('')
  const [searchValueByGenres, setSearchValueByGenres] = useState([])

  const films = useSelector((state) => state.movies)

  const getMovies = useCallback(() => {
    axios
      .get('https://yts.mx/api/v2/list_movies.json')
      .then((response) => dispatch(saveMovies(response.data.data.movies)))
  }, [dispatch])

  const search = useCallback(
    (value = '') => {
      const searchedFilms = films.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )

      setSearchedValue(value)
      dispatch(saveSearchedMovies(searchedFilms))
    },
    [dispatch, films]
  )

  const searchGenre = useCallback(
    (values = []) => {
      const searchedGenresFilms = films.filter((item) => {
        return values.every((value) => item.genres.includes(value))
      })
      setSearchValueByGenres(values)
      dispatch(saveSearchedMoviesByGenres(searchedGenresFilms))
    },
    [dispatch, films]
  )

  return (
    <ContentContext.Provider
      value={{
        getMovies,
        search,
        searchedValue,
        searchGenre,
        searchValueByGenres,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

const ExportedContext = () => useContext(ContentContext)

export default ExportedContext
