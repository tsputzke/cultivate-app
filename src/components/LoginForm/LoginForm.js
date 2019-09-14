import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import UserContext from '../../context/user-context'
import {withRouter} from 'react-router-dom'

class LoginForm extends Component {
  static contextType = UserContext
  state = { error: null }
  
  handleLogin = e => {
    e.preventDefault();

    this.setState({ error: null })
    const { user_name, password } = e.target

    const user = {
      user_name: user_name.value,
      password: password.value,
      user_id: ''
    }
    
    AuthApiService.postLogin(user)
      .then(res => {
        user_name.value = ''
        password.value = ''
        // this.context.user_name = res.user_name;
        // this.context.user_id = res.user_id;
        user.user_id = res.user_id
        console.log(user)
        this.context.updateLoggedUser(user)
        TokenService.saveAuthToken(res.authToken)

        // window.sessionStorage.setItem('user_id', res.user_id)
        // TokenService.saveUserId(res.user_id)
        // this.props.history.push(`/show-user`)
        // window.location.replace('/show-user')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  
  render() {
    const { error } = this.state
    return (
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
          </fieldset>
        </form>
      </section>
    )
  }
}

export default withRouter(LoginForm)