let BASE_URL = ''
let TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
  TIME_OUT = 100000
}

export { BASE_URL, TIME_OUT }
