import React from 'react'
import { useLocation } from 'react-router-dom'
const Line = () => {
  const location = useLocation()
const noPaddingPages = ['/coming_soon', '/error']
 const noPadding = noPaddingPages.includes(location.pathname.toLowerCase())
  return (
    <div className={`absolute inset-0 z-10 pointer-events-none top-36 lg:top-30 px-4 md:px-6 lg:px-28 grid grid-cols-2 lg:grid-cols-3 ${noPadding ? '' : 'mb-26 md:mb-32 lg:mb-18 '}`}>
      <div className="border-l border-r border-neutral-100/40 h-full"></div>
      <div className="hidden lg:block border-r border-neutral-100/40 h-full"></div>
      <div className="border-r border-neutral-100/40 h-full"></div>
    </div>
  )
}

export default Line
