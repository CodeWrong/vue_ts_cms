import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'
import 'normalize.css'

// import './service/axios_demo'
import lyRequest from './service'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(globalRegister)
app.mount('#app')

lyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
