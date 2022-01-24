import { SAVE_MOVIES } from './types'

const initialState = []

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MOVIES:
      return action.newItems
    default:
      return state
  }
}
