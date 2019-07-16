import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Message } from 'element-ui'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$message = Message;