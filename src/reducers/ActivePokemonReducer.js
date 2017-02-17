import { FETCH_POKEMON, CLEAR_ACTIVE_POKEMON } from '../actions/index'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      if (!action.error) {
        return action.payload.data
      }
      return { error: true }
    case CLEAR_ACTIVE_POKEMON:
      return action.payload
  }

  return state
}
