import { build } from 'esbuild';
import { unplugin } from '@akrc/unplugin-mdx';
import path from 'path';

test('esbuild', async () => {
  const result = await build({
    entryPoints: [path.resolve(__dirname, './fixture/index.mdx')],
    // @ts-ignore
    plugins: [unplugin.esbuild()],
    write: false
  });
  expect(result.outputFiles[0].text.includes('h2')).toBeTruthy();
});
