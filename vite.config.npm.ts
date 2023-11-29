import * as path from 'path';
import typescript2 from 'rollup-plugin-typescript2';
import dts from 'vite-plugin-dts';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: "src/components/index.ts",
      name: 'ua-elements-vue',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `ua-elements-vue.${format}.ts`
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/components/index.ts")
      },
      external: ["vue"],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    }
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
