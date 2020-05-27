import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'builtin-modules';
import pkg from './package.json';

export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd', // Universal Module Definition (browser || Node)
      name: 'PhasetwoApiClient',
    },
    {
      file: pkg.module,
      format: 'es', // ES6 import/export
    },
  ],
  plugins: [resolve(), commonjs()],
  external: builtins,
};
