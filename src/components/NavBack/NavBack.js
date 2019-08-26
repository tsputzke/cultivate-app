import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../NavBack/NavBack.css'

export default class NavBack extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul className='nav-links'>
          <li id="nav-button-left"><Link to={this.props.navBack}>Back</Link></li>
          <li id="nav-button-right"></li>
        </ul>
      </nav>
    )
  }
}
