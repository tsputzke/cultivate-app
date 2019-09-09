import React, { Component } from 'react'

export default class LoginForm extends Component {
  
  handleLogin = e => {
    e.preventDefault();

    const user_name = e.target.user_name.value;
    const password = e.target.password.value;

    //validate the input
    if (user_name === "") {
      alert('Please enter username');
    } else if (password === "") {
      alert('Please enter password');
    }

    const userObject = {
      user_name: user_name,
      password: password
    };

    fetch(`http://localhost:8000/api/users/${user_name}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userObject),
    })
    //if call is successfull
    .then(res => {
      alert('blah')
    })
    //if the call is failing
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <section className="login">
        <form
          className="login-form"
          onSubmit={this.handleLogin}
        >
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
