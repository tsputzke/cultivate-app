import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul className='nav-links'>
          <li id="nav-button-left"><Link to='/about'>About</Link></li>
          <li id="nav-button-right"><Link to={this.props.navLink}>{this.props.navRight}</Link></li>
        </ul>
      </nav>
    )
  }
}
