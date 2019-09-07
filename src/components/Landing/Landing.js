import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <h1 className='center-align'>Cultivate</h1>
        <p className='landing-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Proin fermentum leo vel orci porta non. 
        </p>
        <LoginForm />
      </div>
    )
  }
}