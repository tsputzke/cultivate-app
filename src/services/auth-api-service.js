const AuthApiService = {
  postLogin({ user_name, password }) {
    return fetch(`http://localhost:8000/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(response =>
        (!response.ok)
          ? response.json().then(e => Promise.reject(e),
								alert('Username / password combination not found'))
          : response.json()
      )
  },
  postUser(user) {
    return fetch(`http://localhost:8000/api/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      // If call is successful
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}



export default AuthApiService