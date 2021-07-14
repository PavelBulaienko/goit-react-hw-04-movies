import '../styles/App.css'
import { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom'
import HomePage from './views/HomePage'
import fetchOnAPI from '../services/moviesApi'
import MoviesPage from './views/MoviesPage'
import MovieDetailsPage from './views/MovieDetailsPage'

class App extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="mainWrapper">
          <Router>
            <ul className="navList">
              <li className="navListItem">
                <NavLink to="/" className="navLink">
                  Home
                </NavLink>
              </li>
              <li className="navListItem">
                <NavLink to="/movies" className="navLink">
                  Search
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <HomePage {...props} fetchOnAPI={fetchOnAPI} />
                )}
              />
              <Route path="/movies/:movieId" component={MovieDetailsPage} />
              <Route path="/movies" component={MoviesPage} />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default App
