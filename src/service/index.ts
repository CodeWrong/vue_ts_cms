// service 统一的出口
import LyRequest from './request'

import { BASE_URL, TIME_OUT } from './request/config'

const lyRequest = new LyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求的拦截')
      return config
    },
    requestInterceptorError: (error) => {
      return error
    },
    responseInterceptor: (config) => {
      console.log('请求成果的拦截')
      return config
    },
    responseInterceptorError: (error) => {
      console.log('请求失败的拦截\n', error)
    }
  },
  showLoading: true
})

export default lyRequest
