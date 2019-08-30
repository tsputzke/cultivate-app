import React, { Component } from 'react'

export default class RegistrationForm extends Component {
  handleNewUser = e => {
    e.preventDefault()

    const user_name = e.target.user_name.value;
    const password = e.target.password.value;

    //validate the input
    if (user_name === "") {
      alert('Please enter username');
    } else if (password === "") {
      alert('Please enter password');
    }

    const newUserObject = {
      user_name: user_name,
      password: password
    };

    console.log(newUserObject)

  fetch(`http://localhost:8000/api`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newUserObject),
  })
  //if call is successfull
  .then(res => console.log(res))
  //if the call is failing
  .catch(err => console.log(err));
}
  render() {
    return (
      <section id="registration-section">
          <h1 className="form-title">Register:</h1>
          <form 
            id="registration-form"
            onSubmit={this.handleNewUser}
          >
            <div>
              <label htmlFor="user_name">Username: </label>
              <input type="text" name="user_name" required />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" required />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password: </label>
              <input type="password" name="confirm-password" required />
            </div>
            <button id="new-user-button" type="submit">Submit</button>
          </form>
        </section>
    )
  }
}