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

  handleNewUser = e => {
    e.preventDefault();
    const { user_name, password, confirm_password } = e.target

    // Confirm that passwords match
    if (password.value !== confirm_password.value) {
      alert('passwords must match')
      window.location ='/registration'
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
          // window.location ='/show-user'
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
          <div role='alert'>
            {error && <p className='error'>{error}</p>}
          </div>
          <fieldset>
            <legend>Create Account: </legend>
            <div>
              <label htmlFor="user_name">Username: </label>
              <input type="text" name="user_name" />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" />
            </div>
            <div>
              <label htmlFor="confirm_password">Confirm Password: </label>
              <input type="password" name="confirm_password" />
            </div>

            <button className="registration-button" type="submit">Submit</button>

            <p>Password must be at least 8 characters long. It must contain at least one number and special character</p>

            <p>Already a user? <span><Link to='/'>login here</Link></span></p>
          </fieldset>
        </form>
      </div>
    );
  }
}
