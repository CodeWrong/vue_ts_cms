let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://httpbin.org/get'
  BASE_NAME = 'RolyRain'
}
