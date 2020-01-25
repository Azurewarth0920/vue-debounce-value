import Vue from 'vue'
import App from './App'
import vueDebounceModel from '../src/index'

Vue.use(vueDebounceModel, {
  debounceTime: 400,
  maxWait: 400
})

new Vue({
  el: '#app',
  render: h => h(App)
})
