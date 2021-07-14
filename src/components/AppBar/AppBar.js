import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'

class AppBar extends Component {
  render() {
    const { home, moviesPage } = routes
    return (
      <ul className="navList">
        <li className="navListItem">
          <NavLink to={home} className="navLink">
            Home
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink to={moviesPage} className="navLink">
            Search
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default AppBar
