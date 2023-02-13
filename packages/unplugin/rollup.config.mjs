import { defineConfig } from 'rollup';
import ts from 'rollup-plugin-ts';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const config = defineConfig({
  input: './src/index.ts',
  plugins: [
    nodeResolve(),
    commonjs(),
    ts({
      tsconfig: './tsconfig.json'
    })
  ],
  external: ['unplugin', 'mdxrs-napi']
});

export default defineConfig([
  Object.assign({}, config, {
    output: {
      file: './dist/index.js',
      format: 'cjs'
    }
  }),
  Object.assign({}, config, {
    output: {
      file: './dist/cjs.js',
      format: 'esm'
    }
  })
]);
