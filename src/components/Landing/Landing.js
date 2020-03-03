import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import UserContext from '../../context/user-context'
import Loader from 'react-loader-spinner'

export default class Landing extends Component {
  static contextType = UserContext
  state = { 
    error: null,
    loaded: false 
  };

  componentDidMount() {
    this.setState({ loaded: true })
  }
  
  handleLogin = e => {
    e.preventDefault();

    this.setState({ error: null, loaded: false })
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
    const loaded = this.state.loaded
    return (
      <div className='landing'>
        {(!loaded) ? (<Loader id='loader' type="Oval" color="black" height={150} width={150} style={{ 'textAlign': 'center', 'paddingTop': '10%'}}/>) : 
        (<div className="loading-wrapper">
          <h1 className='landing-title center-align title-style'>
            Cultivate  
          </h1>
          <p className='landing-description'>
            Grow smarter. Track your grow-room data with Cultivate. <span><Link to='/about'>Learn more!</Link></span>
          </p>
          <section className="login">
            <form
              className="login-form"
              onSubmit={this.handleLogin}
            >
              <fieldset>
                <legend className="strong login-legend">User Login:</legend>
                <div>
                  <label htmlFor="user_name"> Username: </label>
                  <input type="text" name="user_name" required />
                </div>
                <div>
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" required />
                </div>
                <button className="login-button" type="submit">Login</button>
                <section className="login-info">
                  <p><Link to='/registration'><u>New User?</u></Link></p>
                  <hr />
                  <p><strong>To login as a test user:</strong> <br /> <u>Username:</u> TestUser <br /> <u>Password:</u> testuser1!</p>
                </section>
              </fieldset>
            </form>
            <div role='alert'>
              {error && <p className='error'>{error}</p>}
            </div>
          </section>
        </div>
        )}
      </div>  
    )
  }
}