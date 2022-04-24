import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface LyRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorError?: (error: any) => any

  responseInterceptor?: (res: T) => T

  responseInterceptorError?: (error: any) => any
}

export interface LyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LyRequestInterceptors<T>
  showLoading?: boolean
}
