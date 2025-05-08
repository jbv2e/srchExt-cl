/// <reference types="node" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  define: {
    process: {
      env: {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      },
    },
  },
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/content/content.tsx'),
      name: 'ContentScript',
      formats: ['iife'],
      fileName: () => 'content.js',
    },
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          // content.tsx에서 import된 CSS가 style.css 또는 유사한 이름으로 처리될 수 있음
          if (assetInfo.name?.endsWith('.css')) {
            return 'content.css' // 출력 CSS 파일명을 content.css로 고정
          }
          return '[name].[ext]'
        },
        // assetFileNames: '[name].[ext]',
      },
    },
  },
})
