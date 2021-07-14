import '../styles/App.css'
import { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './views/HomePage'
import MoviesPage from './views/MoviesPage'
import MovieDetailsPage from './views/MovieDetailsPage'
import routes from '../routes'
import AppBar from './AppBar/AppBar'

class App extends Component {
  render() {
    const { home, movieDetailPage, moviesPage } = routes

    return (
      <>
        <div className="mainWrapper">
          <Router>
            <AppBar />
            <Switch>
              <Route exact path={home} component={HomePage} />
              <Route path={movieDetailPage} component={MovieDetailsPage} />
              <Route path={moviesPage} component={MoviesPage} />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default App
