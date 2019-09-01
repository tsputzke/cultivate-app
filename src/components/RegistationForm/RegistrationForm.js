import React, { Component } from 'react'

export default class RegistrationForm extends Component {
  state = { userAdded: false }

  // componentDidUpdate() {
  //   if(this.state === ({userAdded: true})) {
  //     console.log('state is updated')
  //   }
  // }
  
  handleNewUser = e => {
    e.preventDefault()

    const user_name = e.target.user_name.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;

    //check passwords

    //check passwords match
    if (password !== confirm_password) {
      alert('Passwords must match')
    }

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

  fetch(`http://localhost:8000/api/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newUserObject),
  })
  //if call is successfull
  .then(res => {
    console.log('state before:', this.state)
    this.setState({ userAdded: true })
    console.log('state after:', this.state)
  })
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
              <label htmlFor="confirm_password">Confirm Password: </label>
              <input type="password" name="confirm_password" required />
            </div>
            <button id="new-user-button" type="submit">Submit</button>
          </form>
        </section>
    )
  }
}