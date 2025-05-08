import React, { useState } from 'react'
import SlidePanel from './SlidePanel'

const ContentButton: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }

  return (
    <>
      <button
        onClick={togglePanel}
        className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-[9999]"
      >
        {isPanelOpen ? '닫기' : '열기'}
      </button>

      <SlidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  )
}

export default ContentButton
