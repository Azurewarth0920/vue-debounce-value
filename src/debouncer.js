import debounce from 'lodash.debounce'
import { parseOptions } from './utils'

let defaults = {
  delay: 500,
  useThrottle: false
}

export const setDefaults = options => {
  defaults = Object.assign({}, defaults, options)
}

export default {
  inserted(el, binding, vnode) {
    const { target, useThrottle, delay } = parseOptions(binding, defaults)
    const throttleOption = useThrottle ? { maxWait: delay } : {}

    const debounceFunction = debounce(
      function(event) {
        if (vnode.context && event.target) {
          vnode.context[target] = event.target.value
        }
      },
      delay,
      throttleOption
    )

    el.addEventListener('input', debounceFunction)
    vnode.context[`_${target}_debouncer`] = debounceFunction
  },
  unbind(el, binding, vnode) {
    const { target } = parseOptions(binding)

    el.removeEventListener('input', vnode.context[`_${target}_debouncer`])
    delete vnode.context[`_${target}_debouncer`]
  }
}
