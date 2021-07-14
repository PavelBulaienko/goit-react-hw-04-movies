import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import homePageApi from '../../services/homePageApi'

class HomePage extends Component {
  state = {
    trending: [],
  }

  async componentDidMount() {
    homePageApi().then((res) => this.setState({ trending: res.results }))
  }

  render() {
    return (
      <>
        <h1 className="trendingHeader">Trending week</h1>
        <ul className="trendingList">
          {this.state.trending.map((movie) => {
            const { id, original_title, backdrop_path } = movie
            return (
              <li className="trendingListItem" key={id}>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}movies/${id}`,
                    state: { from: this.props.match.url },
                  }}
                >
                  <h2>{original_title}</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                    alt={original_title}
                  />
                </NavLink>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default HomePage
