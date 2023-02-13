import { unplugin } from '@akrc/unplugin-mdx';
import path from 'path';
import { EsbuildPlugin } from 'esbuild-loader';

/**
 * @type {import('webpack'.Configuration)}
 */
const config = {
  mode: 'development',
  entry: path.resolve('./fixture/main.tsx'),
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015'
        }
      }
    ]
  },
  plugins: [unplugin.webpack(), new EsbuildPlugin()]
};

export default config;
