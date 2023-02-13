import { createUnplugin } from 'unplugin';
import { Opts, Processor } from 'mdxrs-napi';

let compiler: Processor;

export const unplugin = createUnplugin((opts: Opts = {}) => {
  return {
    name: 'Starter',
    buildStart() {
      compiler = new Processor(opts);
    },
    transformInclude(id) {
      return id.includes('.mdx');
    },
    transform(code) {
      return compiler.process(code);
    }
  };
});

export const { esbuild, rollup, vite, webpack } = unplugin;

export default unplugin;
