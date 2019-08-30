import React, { Component } from 'react'
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm'
import '../Landing/Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <header id="nav=header">
          <Nav navRight="Register" navLink="registration"/>
        </header>
        <h1 className='landing-title'>Cultivate</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Proin fermentum leo vel orci porta non. 
        </p>
        <LoginForm />
      </div>
    )
  }
}