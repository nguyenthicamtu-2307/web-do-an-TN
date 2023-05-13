import appAxios from '../axios-config'

export const API_AUTHENTICATION = {
  signIn: `/relief-app/v1/auth/login`,
}

export default class AuthenticationAPI {
  static signIn = (params = {}) =>
    appAxios.post(API_AUTHENTICATION.signIn, params)
}
