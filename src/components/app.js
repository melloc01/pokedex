import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import PokemonList from '../containers/PokemonList'
import PokemonDetail from '../containers/PokemonDetail'
import Pages from '../containers/Pages'

import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 2em
  background: #C00D0D;
  padding: 2em;
  border-radius: 20px;
  position: relative;
  box-shadow: -10px -8px 0px #6b0404
`

const ContentWrapper = styled.section`
  background: white;
  border-radius: 20px;

  > div {
    width:100%;
    min-height: 510px;
    margin-top: 2em;
    padding: 2em;
  }
`

export default class App extends Component {
  render () {
    return (
      <Wrapper>
        <SearchBar />
        <ContentWrapper>
          <div className="columns">
            <PokemonList />
            <PokemonDetail />
          </div>
          <Pages/>
        </ContentWrapper>
      </Wrapper>
    )
  }
}
