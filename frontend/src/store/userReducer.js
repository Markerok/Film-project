import { SET_USER, LOGOUT } from './types'

const defaultState = {
  currentUser: {},
  isAuth: false,
}

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        currentUser: action.currentUser,
        isAuth: false,
      }
    default:
      return state
  }
}

export const setUser = (user) => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })
