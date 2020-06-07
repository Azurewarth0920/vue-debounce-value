import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { name, version, homepage, author } from '../package.json'

export const banner = `/*!
 * ${name} v${version}
 * ${homepage}
 *
 * Copyright (c) 2020-present ${author}
 * Released under the MIT license
 * ${homepage}/blob/master/LICENSE
 */`

export default {
  input: './src/index.js',

  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env'],
      plugins: ['@babel/transform-object-assign']
    })
  ]
}
