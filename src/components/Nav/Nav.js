import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken() 
    window.sessionStorage.removeItem('user_id')
    window.sessionStorage.removeItem('user_name')
    window.sessionStorage.removeItem('room_id')
    window.sessionStorage.removeItem('room_name')
  }

  render() {
    return (
      <nav className='nav'>
        <ul className='nav-links'>
          <li id="nav-button-left"><Link to='/about'>About</Link></li>
          <li>
            <Link
              onClick={this.handleLogoutClick}
              to='/'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
