import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import '../Registration/Registration.css';

export default class Registration extends Component {
  render() {
    return (
      <div className='registration'>
        <header id="nav=header">
          <Nav navRight="Sign In" navLink=""/>
        </header>
        <section id="registration-section">
          <h1>Register</h1>
          <form id="registration-form">
            <div>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" required />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" required />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password: </label>
              <input type="password" name="confirm-password" required />
            </div>
            <Link to="/user/1"><button id="new-user-button" type="submit">Submit</button></Link>
          </form>
        </section>
      </div>
    )
  }
}