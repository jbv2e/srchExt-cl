import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    cssCodeSplit: true, // CSS 코드 분할 활성화
    rollupOptions: {
      input: {
        // content: path.resolve(__dirname, 'src/content/content.tsx'),
        popup: path.resolve(__dirname, 'src/popup/popup.html'), // 경로 변경
        background: path.resolve(__dirname, 'src/background/background.ts'),
      },
      output: {
        // entryFileNames: (chunkInfo) => {
        //   // 'popup' 청크(HTML 파일에서 생성됨)의 경우, 'popup.html'로 출력
        //   if (
        //     chunkInfo.name === 'popup' &&
        //     chunkInfo.facadeModuleId?.endsWith('.html')
        //   ) {
        //     return '[name].html' // dist/popup.html 로 출력됩니다.
        //   }
        //   // 다른 JavaScript 파일들은 기존 방식대로 '[name].js'로 출력
        //   return '[name].js'
        // },
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]', // HTML이 아닌 다른 에셋들은 이 설정에 따라 처리됩니다.
      },
    },
  },
})
