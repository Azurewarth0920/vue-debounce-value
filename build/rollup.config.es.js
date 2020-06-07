import baseConfig, { banner } from './rollup.config.base'

const config = Object.assign({}, baseConfig, {
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      banner
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      banner
    }
  ]
})

export default config
