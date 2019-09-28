import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const homeIcon = <FontAwesomeIcon icon={faHome} />

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
        <section className='nav-links'>
          <div className="nav-button left-nav"><Link to='/about'>About.</Link></div>
          <div className="home-icon right-nav"><Link to='/show-user'>{homeIcon}</Link></div>
          <div className="nav-button right-nav"><Link onClick={this.handleLogoutClick} to='/'>Logout.</Link></div>
        </section>
      </nav>
    )
  }
}
