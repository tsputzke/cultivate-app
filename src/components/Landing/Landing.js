import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import UserContext from '../../context/user-context'

export default class Landing extends Component {
  static contextType = UserContext
  state = { error: null }
  
  handleLogin = e => {
    e.preventDefault();

    this.setState({ error: null })
    const { user_name, password } = e.target

    const user = {
      user_name: user_name.value.trim(),
      password: password.value.trim(),
    }
    
    AuthApiService.postLogin(user)
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        window.sessionStorage.setItem('user_id', res.user_id)
        window.sessionStorage.setItem('user_name', user.user_name)
        window.sessionStorage.setItem('isLoggedIn', 'true')
        this.context.toggleState()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    }
  render() {
    const { error } = this.state
    return (
      <div className='landing'>
        <h1 className='center-align'>Cultivate</h1>
        <p className='landing-description'>
          Grow smarter. <br/> To learn about tracking your grow room data with Cultivate, <span><Link to='/about'>click here</Link></span>.
        </p>
        <section className="login">
          <form
            className="login-form"
            onSubmit={this.handleLogin}
          >
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <fieldset>
              <legend>User Login:</legend>
              <div>
                <label htmlFor="user_name"> Username: </label>
                <input type="text" name="user_name" required />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" required />
              </div>
              <button className="login-button" type="submit">Login</button>
              <p>New user? <span><Link to='/registration'>register here</Link></span></p>
              <p>Or, sign in as a testuser to look around. Username: TestUser Password: testuser1!</p>
            </fieldset>
          </form>
        </section>
      </div>
    )
  }
}