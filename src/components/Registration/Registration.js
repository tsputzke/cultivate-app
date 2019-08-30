import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import RegistrationForm from '../RegistationForm/RegistrationForm'
import '../Registration/Registration.css';

export default class Registration extends Component {
  render() {
    return (
      <div className='registration'>
        <header id="nav=header">
          <Nav navRight="Sign In" navLink=""/>
        </header>
        <RegistrationForm />
      </div>
    )
  }
}