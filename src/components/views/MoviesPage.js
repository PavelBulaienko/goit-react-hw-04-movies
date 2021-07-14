import { Component } from 'react'
import fetchOnAPI from '../../services/moviesApi'
import { Route, NavLink } from 'react-router-dom'

class MoviesPage extends Component {
  state = {
    movies: [],
  }
  onSearchClick = async (e) => {
    const query = e.target.previousElementSibling.value
    if (query !== '') {
      const moviesList = await fetchOnAPI(query)
      this.setState({ movies: moviesList })
    }
  }
  render() {
    return (
      <>
        <h1>Поиск по названию</h1>
        <input />
        <button type="button" onClick={this.onSearchClick}>
          Search
        </button>

        <Route
          path={`${this.props.match.url}`}
          render={() => (
            <ul>
              {this.state.movies.map(({ id, original_title }) => (
                <li key={id}>
                  <NavLink to={`${this.props.match.url}/${id}`}>
                    {original_title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        />
      </>
    )
  }
}

export default MoviesPage
