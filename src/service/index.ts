// service 统一的出口
import LyRequest from './request'

import { BASE_URL, TIME_OUT } from './request/config'

const lyRequest = new LyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorError: (error) => {
      return error
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorError: (error) => {}
  },
  showLoading: true
})

export default lyRequest
