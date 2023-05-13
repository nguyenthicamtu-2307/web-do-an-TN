import appAxios from '../axios-config'

export const API_EVENT = {
  CREATE_EVENT: `/relief-app/v1/admin/events`,
  GET_LIST_EVENT: `/relief-app/v1/admin/events`,
  GET_DETAIL_EVENT: (id) => `/relief-app/v1/admin/events/${id}`,
  CHANGE_STATUS_EVENT: (id) => `/relief-app/v1/admin/events/${id}`,
  EDIT_EVENT: (id) => `/relief-app/v1/admin/events/${id}`,
}

export default class EventAPI {
  static createEvent = (params = {}) =>
    appAxios.post(API_EVENT.CREATE_EVENT, params)

  static getListEvent = (params = {}) =>
    appAxios.get(API_EVENT.GET_LIST_EVENT, params)

  static getDetailEvent = (params = {}) =>
    appAxios.get(API_EVENT.GET_DETAIL_EVENT(params.id), params)

  static changeStatusEvent = (params = {}) =>
    appAxios.patch(API_EVENT.CHANGE_STATUS_EVENT(params.id), params)

  static editEvent = (params = {}) =>
    appAxios.put(API_EVENT.EDIT_EVENT(params.id), params)
}
