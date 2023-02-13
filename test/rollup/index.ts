import path from 'path';
import { rollup as build } from 'rollup';
import { rollup } from '@akrc/unplugin-mdx';

test('rollup', async () => {
  const result = await build({
    input: path.resolve(__dirname, 'fixture/index.mdx'),
    plugins: [rollup()]
  });
  const code = (await result.generate({ format: 'esm' })).output[0].code;
  expect(code.includes('h1')).toBeTruthy();
});
