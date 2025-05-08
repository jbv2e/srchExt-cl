/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // 확장 프로그램의 CSS가 페이지 CSS와 충돌하지 않도록 프리픽스 추가
  prefix: 'crx-',
  corePlugins: {
    preflight: false, // 브라우저 기본 스타일 재설정 비활성화
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
