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
      user_name: user_name.value,
      password: password.value,
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
        this.props.history.push(`/show-user`)
        // window.location.replace('/show-user')
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Proin fermentum leo vel orci porta non. For information on how to start organizing your grow room data with Cultivate, <span><Link to='/about'>click here</Link></span>.
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
              <legend>Sign-in:</legend>
              <div>
                <label htmlFor="user_name"> Username: </label>
                <input type="text" name="user_name" required />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" required />
              </div>
              <button className="login-button" type="submit">Submit</button>
              <p>New user? <span><Link to='/registration'>register here</Link></span></p>
            </fieldset>
          </form>
        </section>
      </div>
    )
  }
}