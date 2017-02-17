import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPokemons, clearActivePokemonList, MAX_PAGES } from '../actions/index'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 2em;
  a {
    color: #aaa;
    border-color: #eee;

    &.is-active {
      background-color: #a60808;
      border-color: transparent;
      color: white;
    }
  }
`

class Pages extends Component {

  constructor (props) {
    super(props)

    this.state = {
      page: 1,
      pages: {
        left: [1, 2, 3],
        center: [],
        right: [88]
      }
    }
  }

  componentDidMount () {
    this.calculatePageRange(1)
  }

  /**
   * Calculates the range of the pagination links.
   *
   * @param {number} page
   *
   * @memberOf Pages
   */
  calculatePageRange (page) {
    const pages = {}

    if (page < 3) {
      pages.left = [1, 2, 3]
      pages.center = []
      pages.right = [MAX_PAGES]
    }

    if (page >= MAX_PAGES - 1) {
      pages.left = [1]
      pages.center = []
      pages.right = [MAX_PAGES - 2, MAX_PAGES - 1, MAX_PAGES]
    }

    if (page > 2 && page < MAX_PAGES - 1) {
      pages.left = [1]
      pages.center = [page - 1, page, page + 1]
      pages.right = [MAX_PAGES]
    }

    this.setState({
      page,
      pages
    })
  }

  render () {
    return (
      <Wrapper>
        <nav className="pagination is-centered">
          <a className="pagination-previous is-info" onClick={ () => this.changePage(this.state.page - 1) } disabled={this.state.page === 1}>Previous</a>
          <a className="pagination-next" onClick={ () => this.changePage(this.state.page + 1) } disabled={this.state.page === MAX_PAGES}>Next page</a>
          <ul className="pagination-list">
            { this.state.pages.left && this.state.pages.left.map(page => this.renderPage(page)) }
            { (this.state.pages.center && this.state.pages.center.length) ? <li><span className="pagination-ellipsis">&hellip;</span></li> : null }
            { this.state.pages.center && this.state.pages.center.map(page => this.renderPage(page)) }
            { (this.state.pages.right && this.state.pages.right.length) ? <li><span className="pagination-ellipsis">&hellip;</span></li> : null }
            { this.state.pages.right && this.state.pages.right.map(page => this.renderPage(page)) }
          </ul>
        </nav>
      </Wrapper>
    )
  }

  renderPage (page) {
    return <li key={page} ><a onClick={() => this.changePage(page)} className={`pagination-link ${page === this.state.page ? 'is-active' : ''}`} >{page}</a></li>
  }

  changePage (page) {
    if (page > 0 && page <= MAX_PAGES) {
      this.calculatePageRange(page)
      this.props.fetchPokemons(page)
      this.props.clearActivePokemonList()
    }
  }
}

function mapStateToProps ({ currentPage }) {
  return {
    currentPage
  }
}

export default connect(mapStateToProps, { fetchPokemons, clearActivePokemonList })(Pages)
