import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';

const onwarn = (warning, warn) => {
  if (warning.message.includes('"use client"')) return;
  warn(warning);
};

export default [
  {
    input: 'src/index.tsx',
    output: {
      file: 'build/index.js',
      format: 'esm',
      sourcemap: true,
      inlineDynamicImports: true,
    },
    external: ['react', 'react-dom', 'tailwindcss', 'tailwindcss-animate'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', include: 'src/index.tsx' }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: false,
        extract: 'global.css',
        plugins: [tailwindcss(tailwindConfig)],
      }),
      terser(),
    ],
    onwarn,
  },
  {
    input: 'src/index.tsx',
    output: {
      file: 'build/index.d.ts',
      format: 'esm',
      inlineDynamicImports: true,
    },
    external: ['react', 'react-dom', 'tailwindcss', 'tailwindcss-animate', /\.css$/],
    plugins: [dts()],
    onwarn,
  },
];
