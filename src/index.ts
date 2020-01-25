import _Vue from 'vue'
import debounce from 'lodash.debounce'

export default function (Vue: typeof _Vue, { debounceTime, maxWait }) {
  Vue.directive('debounce-model', {
    inserted(el, binding, vnode) {
      console.log(vnode)

      const _applyDebounce = debounce(function () {
        if (vnode.context) {
          vnode.context.$data[binding.expression] = (<HTMLInputElement>el).value
        }
      }, debounceTime, {
        maxWait
      })

      vnode.context[`$_applyDebounce_${binding.expression}`] = _applyDebounce
    },
    update (el, binding, vnode) {
      vnode.context[`$_applyDebounce_${binding.expression}`]()
    },
    unbind(el, binding, vnode) {
      vnode.context[`$_applyDebounce_${binding.expression}`].cancel
    }
  })
}
