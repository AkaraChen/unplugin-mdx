import { build, createServer } from 'vite';
import { RollupOutput } from 'rollup';
import { unplugin } from '@akrc/unplugin-mdx';

const opts = {
  build: {
    write: false
  },
  plugins: [unplugin.vite()]
};

test('vite', async () => {
  const result = (await build(opts)) as unknown as RollupOutput;
  let triggered = false;
  result.output.forEach(out => {
    if (out.type === 'chunk') {
      if (out.code.includes('h1')) {
        triggered = true;
      }
    }
  });
  expect(triggered).toBeTruthy();
});

test('vite server', async () => {
  expect(async () => {
    const server = await createServer(opts);
    await server.listen();
  }).not.toThrow();
});
