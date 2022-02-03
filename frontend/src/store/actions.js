import { SAVE_MOVIES, SAVE_SEARCHED_MOVIES } from './types'
import axios from 'axios'
import { setUser } from '../store/userReducer'

export function saveMovies(newItems) {
  return {
    type: SAVE_MOVIES,
    newItems,
  }
}

export function saveSearchedMovies(newItems) {
  return {
    type: SAVE_SEARCHED_MOVIES,
    newItems,
  }
}

export const registration = async (username, email, password) => {
  try {
    const res = await axios.post('http://localhost:3001/user', {
      username,
      email,
      password,
    })
    alert(res.data)
  } catch (error) {
    alert(error)
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:3001/login', {
        username,
        password,
      })
      dispatch(setUser(res.data.user))
      localStorage.setItem('token', res.data.token)
    } catch (error) {
      alert(error)
    }
  }
}

export const auth = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get('http://localhost:3001/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      dispatch(setUser(res.data.user))
      localStorage.setItem('token', res.data.token)
    } catch (error) {
      console.log(error.res.data.message)
      localStorage.removeItem('token')
    }
  }
}
