import { spawnSync } from 'child_process';
import { readFileSync } from 'fs';
import path from 'path';

test('webpack', () => {
  spawnSync('pnpm', ['webpack']);
  const output = path.resolve('./dist/main.js');
  const content = readFileSync(output);
  expect(content.includes('Hello')).toBeTruthy();
});
