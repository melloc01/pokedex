import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPokemon, clearActivePokemon } from '../actions/index'

const Wrapper = styled.div`
  width: 110px;
  text-align: center;
  cursor: pointer;

  &:hover {
    .Pokemon__name {
      background-color: #f1f1f1;
    }
  }

  .Pokemon__name {
    font-weight: 500;
    padding: 3px;
    text-transform: capitalize;
  }
`

class Pokemon extends Component {
  constructor (props) {
    super(props)

    this.onPokeClick = this.onPokeClick.bind(this)
  }

  onPokeClick () {
    this.props.clearActivePokemon()
    this.props.fetchPokemon(this.props.name)
  }

  image () {
    let number = this.props.url.split('/')[6]

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
  }

  render () {
    return (
      <Wrapper key={this.name} className="Pokemon" onClick={this.onPokeClick}>
        <img className="Pokemon__pic" src={this.image()} />
        <div className="Pokemon__name">{this.props.name}</div>
      </Wrapper>
    )
  }
}

export default connect(null, { fetchPokemon, clearActivePokemon })(Pokemon)
