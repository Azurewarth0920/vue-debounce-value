import baseConfig, { banner } from './rollup.config.base'
import { uglify } from 'rollup-plugin-uglify'

const globals = {
  vue: 'Vue'
}

const config = Object.assign({}, baseConfig, {
  output: [
    {
      file: 'dist/vue-debounce-value.min.js',
      name: 'vueDebounceValue',
      format: 'umd',
      banner,
      globals
    }
  ]
})

config.plugins.push(
  uglify({
    output: {
      comments(node, comment) {
        const text = comment.value
        const type = comment.type
        if (type === 'comment2') {
          return /^!/i.test(text)
        }
      }
    }
  })
)

export default config
