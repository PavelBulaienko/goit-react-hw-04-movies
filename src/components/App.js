import '../styles/App.css'
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './views/HomePage'
import fetchOnAPI from '../services/moviesApi'
import MoviesPage from './views/MoviesPage'
import MovieDetailsPage from './views/MovieDetailsPage'
import routes from '../routes'
import AppBar from './AppBar/AppBar'

class App extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="mainWrapper">
          <Router>
            <AppBar />
            <Switch>
              <Route
                exact
                path={routes.home}
                // render={(props) => (
                //   <HomePage {...props} fetchOnAPI={fetchOnAPI} />
                // )}
                component={HomePage}
              />
              <Route
                path={routes.movieDetailPage}
                component={MovieDetailsPage}
              />
              <Route path={routes.moviesPage} component={MoviesPage} />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default App
