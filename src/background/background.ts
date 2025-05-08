chrome.runtime.onInstalled.addListener(() => {
  console.log('확장 프로그램이 설치되었습니다.')
})

// 메시지 리스너 등 필요한 백그라운드 로직 추가
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PANEL_OPENED') {
    console.log(`패널이 열렸습니다. ${sender?.tab?.url} ${message.data}`)
    sendResponse({ message: `PANEL_OPENED` })
  } else if (message.type === 'PANEL_CLOSED') {
    console.log(`패널이 닫혔습니다. ${sender?.tab?.url} ${message.data}`)
    sendResponse({ message: 'PANEL_CLOSED' })
  }
  return true
})
