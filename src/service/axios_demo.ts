import axios from 'axios'

// axios 的实例对象
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

axios.defaults.baseURL = 'http://httpbin.org'
axios
  .get('/get', {
    params: {
      name: 'Roly Rain',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post('/post', {
    data: {
      name: 'Roly Rain',
      age: 18,
      height: 1.88
    }
  })
  .then((res) => {
    console.log(res)
  })
