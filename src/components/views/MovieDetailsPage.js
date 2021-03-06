import { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import moviesDetailPageAPI from '../../services/moviesDetailPageAPI'
import Cast from '../Cast'
import Reviews from '../Reviews'

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: '',
    genres: [],
    original_title: null,
    overview: null,
    popularity: null,
    release_date: null,
    cast: [],
    reviews: [],
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params

    moviesDetailPageAPI
      .fullInfoMovie(movieId)
      .then((responce) => this.setState({ ...responce }))

    moviesDetailPageAPI
      .castInfoMovie(movieId)
      .then((responce) => this.setState({ cast: responce.cast }))

    moviesDetailPageAPI
      .reviewsInfoMovie(movieId)
      .then((responce) => this.setState({ reviews: responce }))
  }

  render() {
    const {
      original_title,
      backdrop_path,
      release_date,
      popularity,
      overview,
      genres,
    } = this.state
    const { location, history } = this.props

    return (
      <>
        <button
          className="btnComeBack"
          type="button"
          onClick={() => history.push(location.state.from)}
        >
          Вернуться назад
        </button>
        <h1>Детальная информация о фильме</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={original_title}
        />
        <h2>
          {original_title} ({release_date})
        </h2>
        <p>User score: {Math.round(popularity)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres.map(({ id, name }) => (
          <p key={id}>{name}</p>
        ))}
        <h2>Additional information</h2>

        <ul>
          <li>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          </li>

          <li>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route
          path={`${this.props.match.url}/cast`}
          render={(props) => <Cast {...props} cast={this.state.cast} />}
        />
        <Route
          path={`${this.props.match.url}/reviews`}
          render={(props) => (
            <Reviews {...props} reviews={this.state.reviews} />
          )}
        />
      </>
    )
  }
}

export default MovieDetailsPage
