import React from 'react'
import ReactDOM from 'react-dom/client'
import ContentButton from './ContentButton'
// import '../index.css' // Tailwind CSS 가져오기
import './content.css'

// CSS 충돌 방지를 위한 컨테이너 생성
const container = document.createElement('div')
container.id = 'slide-panel-root'

// 대상 요소를 찾습니다.
const targetElement = document.querySelector('div#container')

if (targetElement) {
  targetElement.appendChild(container)
} else {
  // 대상 요소가 없으면 body에 추가하거나 오류를 로깅할 수 있습니다.
  // 여기서는 body에 추가하는 기존 방식을 유지합니다.
  console.warn('Target element #div-container not found. Appending to body.')
  document.body.appendChild(container)
}

// 스타일 격리를 위해 Shadow DOM 사용
const shadowRoot = container.attachShadow({ mode: 'open' })
const shadowContainer = document.createElement('div')
// shadowContainer가 위치 지정 컨텍스트를 제공하도록 설정
shadowContainer.style.position = 'relative'
shadowContainer.style.width = '100%' // 부모 요소(#div-container)의 너비를 채움
shadowContainer.style.height = '100%' // 부모 요소(#div-container)의 높이를 채움
shadowRoot.appendChild(shadowContainer)

// 로컬 스타일시트 생성하여 Shadow DOM에 주입
const styleElement = document.createElement('style')
shadowRoot.appendChild(styleElement)

// Tailwind 생성 CSS를 가져와서 Shadow DOM에 주입하는 함수
const injectStyles = async () => {
  try {
    // 확장 프로그램 내의 CSS 파일 경로 (빌드 후 위치 기준)
    const cssURL = chrome.runtime.getURL('content.css')
    const response = await fetch(cssURL)
    const css = await response.text()

    // Shadow DOM에 스타일 주입
    styleElement.textContent = css
  } catch (error) {
    console.error('스타일 로딩 실패:', error)
  }
}

// 스타일 주입 실행
injectStyles()

// React 루트 생성 및 렌더링
const root = ReactDOM.createRoot(shadowContainer)
root.render(
  <React.StrictMode>
    <ContentButton />
  </React.StrictMode>
)
