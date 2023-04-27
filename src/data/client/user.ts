import { AuthResponseTypes, LoginInputTypes } from '@/types/index'

import { API_ENDPOINTS } from './api-endpoints'
import { HttpClient } from './http-client'

export const userClient = {
  login: (variables: LoginInputTypes) => {
    return HttpClient.post<AuthResponseTypes>(API_ENDPOINTS.LOGIN, variables)
  },
  logout: () => {
    return HttpClient.post<any>(API_ENDPOINTS.LOGOUT, {})
  },
  register: () => {
    return HttpClient.post<any>(API_ENDPOINTS.REGISTER, {})
  }
}
