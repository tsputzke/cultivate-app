import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user-context'

export default class Nav extends Component {
  static contextType = UserContext

  // Clear sessionStorage on logout
  handleLogoutClick = () => {
    sessionStorage.clear()
    this.context.toggleState()
  }

  render() {
    return (
      <nav className='nav'>
        <ul className='nav-links'>
          <li id="nav-button-left"><Link to='/about'>About</Link></li>
          <li><Link to='/show-user'>Home</Link></li>
          <li><Link onClick={this.handleLogoutClick} to='/'>Logout</Link></li>
        </ul>
      </nav>
    )
  }
}
