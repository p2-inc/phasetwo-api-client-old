import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import builtins from 'builtin-modules';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'PhasetwoApiClient',
    },
    plugins: [resolve({ browser: true }), commonjs(), filesize()],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    external: [].concat(builtins, 'isomorphic-unfetch'),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [filesize()],
  },
];
