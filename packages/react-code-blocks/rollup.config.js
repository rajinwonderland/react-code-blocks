import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import minify from 'rollup-plugin-babel-minify'
import visualizer from 'rollup-plugin-visualizer'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'
import json from 'rollup-plugin-json'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external({
      includeDependencies: false,
    }),
    url(),
    svgr(),
    minify(),
    visualizer({
      filename: './dist/statistics.html',
      title: 'React Code Blocks',
    }),
    babel({
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /node_modules/,
    }),
    commonjs({
      include: [
        /node_modules\/prop-types/,
        /node_modules\/hoist-non-react-statics/,
        /node_modules\/invariant/,
        /node_modules\/react-is/,
        /node_modules\/warning/,
      ],
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType', 'isElement'],
      },
    }),
    resolve(),
    terser(),
    json(),
  ],
}
