import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPokemon, fetchPokemons } from '../actions/index'
import Pokemon from '../containers/Pokemon'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 1em;
  font-size:0.8em;
  width: 100%;
`

class PokemonList extends Component {

  componentDidMount () {
    this.props.fetchPokemons()
  }

  renderPokemon (pokemon) {
    // no sprite provided
    if (pokemon.url.split('/')[6] > 10063) {
      return null
    }

    return (
      <div className="column" key={pokemon.name}>
        <Pokemon name={pokemon.name} url={pokemon.url} />
      </div>
    )
  }
  render () {
    if (!this.props.pokemonList.results) {
      return (
        <Wrapper>Loading...</Wrapper>
      )
    }
    return (
      <Wrapper className="column columns is-multiline is-mobile">
        {this.props.pokemonList.results.map(this.renderPokemon)}
      </Wrapper>
    )
  }
}

function mapStateToProps ({ pokemonList }) {
  return {
    pokemonList
  }
}

export default connect(mapStateToProps, { fetchPokemons, fetchPokemon })(PokemonList)
