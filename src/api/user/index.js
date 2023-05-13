import appAxios from '../axios-config'

export const API_USER = {
  GET_LIST_USER: `/relief-app/v1/admin/local-officers`,
  GET_DETAIL_USER: (id) => `/relief-app/v1/admin/users/${id}`,
  ACTIVE_USER: (id) => `/relief-app/v1/admin/users/local-officers/${id}`,
}

export default class UserAPI {
  static getListUser = (params = {}) =>
    appAxios.get(API_USER.GET_LIST_USER, params)

  static getDetailUser = (params = {}) =>
    appAxios.get(API_USER.GET_DETAIL_USER(params.id), params)

  static activeUser = (params = {}) =>
    appAxios.patch(API_USER.ACTIVE_USER(params.id), params)
}
