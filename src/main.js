import '../public/css/normalize.css'
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import axios from 'axios'
import global_value from './plugins/global'

import './plugins/nwomb.js'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$global = global_value;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
