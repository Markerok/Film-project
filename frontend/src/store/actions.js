import { SAVE_MOVIES } from './types'

export function saveMovies(newItems) {
  return {
    type: SAVE_MOVIES,
    newItems,
  }
}
