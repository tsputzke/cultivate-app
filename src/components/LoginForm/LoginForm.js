import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <section id="landing-section">
        <h2 className="form-title">Sign-in:</h2>
        <form
          id="signin-form"
          // onSubmit={this.handleSubmitBasicAuth}
        >
          <div>
            <label htmlFor="user_name"> Username: </label>
            <input type="text" name="user_name" required />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" required />
          </div>
          <button id="user-button" type="submit">Submit</button>
        </form>
      </section>
    )
  }
}
