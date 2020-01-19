import Vue from 'vue'
import App from './App'
import vueDebounceModel from '../src/index'

Vue.use(vueDebounceModel)

new Vue({
  el: '#app',
  render: h => h(App)
})
