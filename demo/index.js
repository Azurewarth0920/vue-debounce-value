import Vue from 'vue'
import App from './App'
import VueDebounceValue from '../src/index'

Vue.use(VueDebounceValue, {
  delay: 400,
  useThrottle: true
})

new Vue({
  el: '#app',
  render: h => h(App)
})
