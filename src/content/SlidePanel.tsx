import React from 'react'

interface SlidePanelProps {
  isOpen: boolean
  onClose: () => void
}

const SlidePanel: React.FC<SlidePanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* 슬라이딩 패널 */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } p-6 flex flex-col`}
        style={{ zIndex: 10000 }} // Ensure panel is above overlay
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            나의 확장 프로그램
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-grow overflow-y-auto text-gray-700">
          <p className="mb-4">
            여기에 확장 프로그램 콘텐츠를 표시합니다. 웹페이지와 CSS가 충돌하지
            않습니다.
          </p>

          {/* 샘플 카드 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              샘플 카드
            </h3>
            <p>Tailwind CSS로 스타일링된 컴포넌트입니다.</p>
          </div>

          {/* 버튼 그룹 */}
          <div className="flex space-x-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              버튼 1
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              버튼 2
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlidePanel
