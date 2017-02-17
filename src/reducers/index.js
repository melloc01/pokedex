import { combineReducers } from 'redux'
import PokemonListReducer from './PokemonListReducer'
import ActivePokemonReducer from './ActivePokemonReducer'

const rootReducer = combineReducers({
  pokemonList: PokemonListReducer,
  activePokemon: ActivePokemonReducer
})

export default rootReducer
