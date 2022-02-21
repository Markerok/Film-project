import { SAVE_SEARCHED_MOVIES_BY_GENRES } from './types'

const initialState = []

export const saveSearchedMoviesByGenresReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SAVE_SEARCHED_MOVIES_BY_GENRES:
      return action.newItems
    default:
      return state
  }
}
