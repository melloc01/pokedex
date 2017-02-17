import { FETCH_POKEMONS, CLEAR_ACTIVE_POKEMON_LIST } from '../actions/index'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return action.payload.data
    case CLEAR_ACTIVE_POKEMON_LIST:
      return action.payload
  }

  return state
}
