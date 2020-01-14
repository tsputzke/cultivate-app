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
      this.setState({ error: 'Username must be 5+ characters' })
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
          // this.props.history.push(`/`)
          .then(window.location= '/')
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
              <table className="registration-table">
                <tbody>
                  <tr>
                    <td><label htmlFor="user_name">Username:</label></td>
                    <td><input maxLength="20" type="text" name="user_name" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="password">Password:</label></td>
                    <td><input maxLength="20" type="password" name="password" /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="confirm_password">Confirm Password:</label></td>
                    <td><input type="password" name="confirm_password" /></td>
                  </tr>
                </tbody>
              </table>
            <button className="registration-button" type="submit">Submit</button>
            <p><Link to='/'>Already a User?</Link></p>
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
