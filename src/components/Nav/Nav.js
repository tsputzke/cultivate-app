import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul className='nav-links'>
          <li id="nav-button-left"><Link to='/about'>About</Link></li>
          <li id="nav-button-right"><Link to='/'>Sign Out</Link></li>
        </ul>
      </nav>
    )
  }
}
