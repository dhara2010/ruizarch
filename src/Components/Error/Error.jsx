import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Error() {

  return (
    <div className='relative min-h-screen w-full text-white'>
      <div className="absolute overflow-hidden h-full w-full">
        <img src='./images/16.jpg' alt="" className={`absolute top-0 left-0 h-full w-full object-cover`} />
      </div>
      <div className={`absolute top-0 left-0 h-full w-full bg-black/80`}></div>
      <div className="relative z-10 min-h-[120vh] md:min-h-screen flex px-6 md:px-28 mt-6">
        <div className="flex flex-col justify-center gap-8 max-w-xl text-center md:text-left lg:mt-30">
          <div>
            <p className='font-semibold uppercase'>Page Not Found</p>
            <hr className="hr-line3 w-15" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight uppercase"> Error <span className="bg-[#bcff00] text-black px-1"> 404 </span></h1>
          <p className='text-neutral-400 max-w-100 text-sm'>The page you are looking for does not exist, it may have been moved or removed altogether.</p>
          <Link to='/'><button className="py-6 bg-[#bcff00] uppercase text-black font-bold w-60 cursor-pointer">Back To Home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Error
