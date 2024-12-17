import React from 'react'
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

function ZoomControls({ onZoomIn, onZoomOut, onReset, scale }) {
  return (
    <div className="absolute bottom-4 right-4 flex gap-2 bg-white rounded-lg shadow-lg p-2">
      <button
        onClick={onZoomOut}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Zoom Out"
      >
        <ZoomOut className="w-5 h-5 text-gray-600" />
      </button>
      <div className="flex items-center px-2 text-sm text-gray-600">
        {Math.round(scale * 100)}%
      </div>
      <button
        onClick={onZoomIn}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Zoom In"
      >
        <ZoomIn className="w-5 h-5 text-gray-600" />
      </button>
      <button
        onClick={onReset}
        className="p-2 hover:bg-gray-100 rounded-lg"
        title="Reset Zoom"
      >
        <RotateCcw className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  )
}

export default ZoomControls
