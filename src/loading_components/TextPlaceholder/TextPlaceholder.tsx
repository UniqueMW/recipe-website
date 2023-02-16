import React from 'react'

function TextPlaceholder(): JSX.Element {
  return (
    <div className="w-full animate-pulse">
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 min-w-full mb-4"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 min-w-full mb-2.5"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 min-w-full"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 min-w-full mb-2.5"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 min-w-full mb-2.5"></div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
  )
}

export default TextPlaceholder
