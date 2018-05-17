import html from 'rollup-plugin-generate-html-template';
import buble from 'rollup-plugin-buble';
import json from 'rollup-plugin-json';
import importhtml from 'rollup-plugin-html';
import bundle from 'rollup-plugin-css-bundle';

export default {
  input: 'src/main.js',
  external: ['react', 'react-dom', 'firebase'],
  output: {
    format: 'umd',
    name: 'partikip',
    file: 'dist/partikip.js',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'firebase': 'firebase'
    }
  },
  watch: {
    include: 'src/**/*.*'
  },
  plugins: [
    json(),
    importhtml(),
    bundle(),
    buble(),
    html({
      template: 'src/index.html',
      target: 'dist/index.html'
    })
  ]
}