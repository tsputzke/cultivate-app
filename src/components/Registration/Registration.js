import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'

export default class Registration extends Component {
  state = { 
    user_name: '',
    password: '',
    userAdded: false,
    error: null,
  };

  // Handle registration of new user
  handleNewUser = e => {
    e.preventDefault();
    const { user_name, password, confirm_password } = e.target

    // Confirm username is greater than 5 characters in length
    if (user_name.value.length < 5) {
      this.setState({ error: 'Username must be 8+ characters' })
      // alert('username must be greater than 5 characters in length')
      // window.location ='/registration'
      throw Error
    }

    // Confirm that passwords match
    if (password.value !== confirm_password.value) {
      this.setState({ error: 'Passwords must match' })
      // alert('passwords must match')
      // window.location ='/registration'
      throw Error
    }

    this.setState({ error: null })
      AuthApiService.postUser({
        user_name: user_name.value,
        password: password.value,
      })
        .then(user => {
          user_name.value = ''
          password.value = ''
          this.props.history.push(`/`)
        })  
        .catch(res => {
          this.setState({ error: res.error })
        })
  }

  render() {
    const { error } = this.state
    return (
      <div className='registration'>
        <form className="registration-form" onSubmit={this.handleNewUser}>
          <fieldset>
            <legend className="strong registration-legend">Create Account: </legend>
            <div>
              <label htmlFor="user_name">Username: </label>
              <input maxLength="20" type="text" name="user_name" />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input maxLength="20" type="password" name="password" />
            </div>
            <div>
              <label htmlFor="confirm_password">Confirm Password: </label>
              <input type="password" name="confirm_password" />
            </div>

            <button className="registration-button" type="submit">Submit</button>
            <p>Already a user? <span><Link to='/'>login here</Link></span></p>
            <hr />
            <div className="password-rules">
              <strong>Password must contain: </strong>
              <ul>
                <li>8+ characters.</li>
                <li>At least 1 number.</li>
                <li>At least 1 special character.</li>
              </ul>
            </div>
          </fieldset>
          <div role='alert'>
            {error && <p className='error'>{error}</p>}
          </div>
        </form>
      </div>
    );
  }
}
