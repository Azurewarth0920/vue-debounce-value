import debounce from 'lodash.debounce'

export default function(Vue, { debounceTime, maxWait }) {
  Vue.directive('debounce', {
    inserted(el, binding, vnode) {
      const maxWaitFilter = maxWait ? { maxWait } : {}

      const debounceFunction = debounce(
        function(event) {
          if (vnode.context && event.target) {
            vnode.context[binding.expression] = event.target.value
          }
        },
        debounceTime,
        { maxWait }
      )

      el.addEventListener('input', debounceFunction)
      vnode.context[`_${binding.expression}_debouncer`] = debounceFunction
    },
    unbind(el, binding, vnode) {
      el.removeEventListener(
        'input',
        vnode.context[`_${binding.expression}_debouncer`]
      )

      vnode.context[`_${binding.expression}_debouncer`].cancel()
      delete vnode.context[`_${binding.expression}_debouncer`]
    }
  })
}
