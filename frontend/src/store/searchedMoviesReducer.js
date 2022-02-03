import { SAVE_SEARCHED_MOVIES } from './types'

const initialState = []

export const searchedMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCHED_MOVIES:
      return action.newItems
    default:
      return state
  }
}
