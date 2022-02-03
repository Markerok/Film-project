import { createContext, useContext, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { saveMovies, saveSearchedMovies } from '../store/actions'

const defaultContext = {
  getMovies: () => {},
  search: () => {},
  searchedValue: '',
}

const ContentContext = createContext(defaultContext)

export const ContentProvider = ({ children }) => {
  const dispatch = useDispatch()

  const [searchedValue, setSearchedValue] = useState('')

  const films = useSelector((state) => state.movies)

  const getMovies = useCallback(() => {
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then((response) => response.json())
      .then((json) => dispatch(saveMovies(json.data.movies)))
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

  return (
    <ContentContext.Provider value={{ getMovies, search, searchedValue }}>
      {children}
    </ContentContext.Provider>
  )
}

const ExportedContext = () => useContext(ContentContext)

export default ExportedContext
