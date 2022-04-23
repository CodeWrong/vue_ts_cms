import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LyRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorError?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorError?: (error: any) => any
}

export interface LyRequestConfig extends AxiosRequestConfig {
  interceptors?: LyRequestInterceptors
  showLoading?: boolean
}
