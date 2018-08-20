import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import home from '../components/home/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  },
  plugins
})
