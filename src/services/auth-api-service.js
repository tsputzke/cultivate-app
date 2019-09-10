const AuthApiService = {
  postLogin(credentials) {
    return fetch(`https://blooming-stream-59570.herokuapp.com/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response =>
        (!response.ok)
          ? response.json().then(e => Promise.reject(e),
								alert('Credentials not found'))
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