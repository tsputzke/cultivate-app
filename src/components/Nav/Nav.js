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
          <li id="nav-button-left"><Link to='/about'>About.</Link></li>
          <li className="home-icon"><Link to='/show-user'><i className="fas fa-home"></i></Link></li>
          <li><Link onClick={this.handleLogoutClick} to='/'>Logout.</Link></li>
        </ul>
      </nav>
    )
  }
}
