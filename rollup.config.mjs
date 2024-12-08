import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const { dependencies, peerDependencies, devDependencies } = packageJson;

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.stories.*'] }),
    postcss({
      extract: true,
      minimize: true,
    }),
    terser(),
  ],
  external: [
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {}),
    ...Object.keys(devDependencies || {}),
  ],
};
