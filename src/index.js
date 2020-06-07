import VueDebounceValue, { setDefaults } from './debouncer'

const install = (Vue, options) => {
  if (options) setDefaults(options)
  Vue.directive('debounce-value', VueDebounceValue)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDebounceValue = VueDebounceValue
  window.VueDebounceValue.setDefaults = setDefaults
  window.Vue.use(install)
}

VueDebounceValue.install = install
export default VueDebounceValue
