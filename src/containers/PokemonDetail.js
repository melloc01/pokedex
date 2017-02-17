import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPokemon } from '../actions/index'

const Wrapper = styled.div`
  
  @media (min-width: 1025px) {
    width: 430px;
    flex-basis: initial;
    flex-grow: initial;
    flex-shrink: initial;

  } 

  text-align: center;
  align-self: center;

  .Pokemon__image {
      max-width: 70%;
      margin: 0 auto
  }

  h2 {
    text-transform: capitalize
  }
`

class Pokemon extends Component {
  constructor (props) {
    super(props)

    this.props.fetchPokemon('bulbasaur')
  }

  /**
   * Returns the computed image url.
   *
   * @returns
   *
   * @memberOf Pokemon
   */
  image () {
    if (this.props.activePokemon) {
      return `https://img.pokemondb.net/artwork/${this.props.activePokemon.name}.jpg`
    }

    return null
  }

  loadingStatus () {
    return this.props.activePokemon.error ? 'Pokémon not found' : 'Loading Pokémon...'
  }

  render () {
    if (!this.props.activePokemon.id) {
      return (
        <Wrapper>
          <p className="title is-3">
              { this.loadingStatus() }
          </p>
        </Wrapper>
      )
    }
    return (
      <Wrapper className="column">
        <img className="Pokemon__image" src={this.image()} />
        <h2 className="Pokemon__name title is-3">{this.props.activePokemon.name}</h2>
        <table className="table is-bordered">
          <tbody>
            <tr>
              <td><strong>Order</strong></td>
              <td>
                { this.props.activePokemon.order }
              </td>
            </tr>
            <tr>
              <td><strong>Type(s)</strong></td>
              <td>
                <ul>
                  {this.props.activePokemon.types.map(slot => {
                    return <li key={slot.slot} className="tag">{ slot.type.name }</li>
                  })}
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Abilities</strong></td>
              <td>
                <ul>
                  {this.props.activePokemon.abilities.map(slot => {
                    return <li key={slot.slot} className="tag">{ slot.ability.name }</li>
                  })}
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Height</strong></td>
              <td>
                { this.props.activePokemon.height }
              </td>
            </tr>
            <tr>
              <td><strong>Weight</strong></td>
              <td>
                { this.props.activePokemon.weight }
              </td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    )
  }
}

function mapStateToProps ({ activePokemon }) {
  return {
    activePokemon
  }
}

export default connect(mapStateToProps, { fetchPokemon })(Pokemon)
