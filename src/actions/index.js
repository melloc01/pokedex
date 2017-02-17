import axios from 'axios'

const API_VERSION = 'v2'
const ROOT_URL = `http://pokeapi.co/api/${API_VERSION}`
const PER_PAGE = 12
export const MAX_PAGES = 65

export const FETCH_POKEMON = 'FETCH_POKEMON'
export const CLEAR_ACTIVE_POKEMON = 'CLEAR_ACTIVE_POKEMON'
export const CLEAR_ACTIVE_POKEMON_LIST = 'CLEAR_ACTIVE_POKEMON_LIST'
export const FETCH_POKEMONS = 'FETCH_POKEMONS'

/**
 * Fetches all pokemon.
 * @returns {object} The action created.
 */
export function fetchPokemons (page = 1) {
  const offset = PER_PAGE * (page - 1)
  const url = `${ROOT_URL}/pokemon?limit=${PER_PAGE}&offset=${offset}`
  const promise = axios.get(url)

  return {
    type: FETCH_POKEMONS,
    payload: promise
  }
}

/**
 * Fetches a pokemon.
 * @param  {string} name The pokemon name.
 * @returns {object} The action created.
 */
export function fetchPokemon (name) {
  const url = `${ROOT_URL}/pokemon/${name}`
  const promise = axios.get(url)

  return {
    type: FETCH_POKEMON,
    payload: promise
  }
}

/**
 * Clears the active pokemon.
 * @returns {object} The action created.
 */
export function clearActivePokemon () {
  return {
    type: CLEAR_ACTIVE_POKEMON,
    payload: {}
  }
}

/**
 * Clears the active pokemon list.
 * @returns {object} The action created.
 */
export function clearActivePokemonList () {
  return {
    type: CLEAR_ACTIVE_POKEMON_LIST,
    payload: {}
  }
}
