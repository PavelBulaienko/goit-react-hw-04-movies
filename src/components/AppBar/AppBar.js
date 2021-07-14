import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'

class AppBar extends Component {
  state = {}
  render() {
    return (
      <ul className="navList">
        <li className="navListItem">
          <NavLink to={routes.home} className="navLink">
            Home
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink to={routes.moviesPage} className="navLink">
            Search
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default AppBar
