import React, { Component } from 'react'
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
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
        <section id="landing-section">
          <h2>Sign-in</h2>
          <form id="signin-form"> 
            <div>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" required />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" required />
            </div>
            <Link to="/user/1"><button id="user-button" type="submit">Submit</button></Link>
          </form>
        </section>
      </div>
    )
  }
}