import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class HomePage extends Component {
  state = {
    trending: [],
  }

  async componentDidMount() {
    const api_key = '745843703988462346ba909afe11c7ba'

    const trendingResponce = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
    ).then((responce) => responce.json())
    this.setState({ trending: trendingResponce.results })
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
                <NavLink to={`${this.props.match.url}movies/${id}`}>
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
