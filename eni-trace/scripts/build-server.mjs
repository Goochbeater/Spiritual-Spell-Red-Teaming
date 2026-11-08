import { build } from 'esbuild'

await build({
  entryPoints: ['api/boot.mjs'],
  outfile: '.server/boot.js',
  platform: 'node',
  target: 'node22',
  format: 'esm',
  bundle: true,
  minify: true,
  sourcemap: false,
  banner: {
    js: "import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);",
  },
  logLevel: 'info',
})
