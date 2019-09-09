import React, { Component } from 'react';

export default class Registration extends Component {
  state = { 
    user_name: '',
    password: '',
    userAdded: false,
    error: null,
  };

  handleNewUser = e => {
    e.preventDefault();

    const user_name = e.target.user_name.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;

    //check passwords

    //check passwords match
    if (password !== confirm_password) {
      alert("Passwords must match");
    }

    //validate the input
    if (user_name === "") {
      alert("Please enter username");
    } else if (password === "") {
      alert("Please enter password");
    }

    const newUserObject = {
      user_name: user_name,
      password: password
    };

    fetch(`http://localhost:8000/api/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUserObject)
    })
      //if call is successfull
      .then(res => {
        this.setState({ userAdded: true });
      })
      //if the call is failing
      .catch(err => console.log(err));
  };

  render() {
    const { error } = this.state
    return (
      <div className='registration'>
        <form className="registration-form" onSubmit={this.handleNewUser}>
          <fieldset>
            <legend>Register: </legend>
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
          </fieldset>
        </form>
      </div>
    );
  }
}
