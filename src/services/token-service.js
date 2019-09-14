import config from '../config'

const TokenService = {

  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(user_name, password) {
    return window.btoa(`${user_name}:${password}`)
  },

  saveUserId(user_id) {
    window.sessionStorage.setItem('user_id', user_id)
  },
  getUserId(user_id) {
    return window.sessionStorage.getItem('user_id', user_id)
  }
}

export default TokenService