import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPokemon, clearActivePokemon } from '../actions/index'
import { bindActionCreators } from 'redux'
import { GlassButton, RoundButton } from '../styled/Pokedex.js'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  height: 3em;
  align-items: center;

  input {
    margin-left: 0.5em;
    border-top-left-radius: 10px;
    outline: 0;
    border: 0;
    padding-left: 0.5em;
  }
`

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit (event) {
    event.preventDefault()

    this.props.fetchPokemon(this.state.term)
    this.props.clearActivePokemon()
    this.setState({ term: '' })
  }

  render () {
    return (
        <Wrapper>

          <GlassButton bg="red"></GlassButton>

          <RoundButton bg="red"></RoundButton>
          <RoundButton bg="yellow"></RoundButton>
          <RoundButton bg="green"></RoundButton>

          <form onSubmit={this.onFormSubmit} className="input-group">
            <p className="control has-addons">
              <input
                className="form-control is-medium"
                onChange={this.onInputChange}
                value={this.state.term}
                placeholder="Find Pokémon"
                required />
                <button type="submit" className="button is-medium">
                  Search
                </button>
            </p>
          </form>
        </Wrapper>
    )
  }
}

export default connect(null, { fetchPokemon, clearActivePokemon })(SearchBar)
