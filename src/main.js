import Vue from 'vue'
import _ from 'lodash'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './plugins/element.js'
import './theme/element-variables.scss'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')