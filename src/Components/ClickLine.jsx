import React from 'react'
import { useScrollAnimation } from './Home/ScrollAnimation';

const ClickLine = ({text}) => {
  const [t1Ref, isT1Visible] = useScrollAnimation();
  return (
    <div ref={t1Ref} className={`flex items-center group gap-5 cursor-pointer transition-all duration-500 ease-in-out ${isT1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="flex bg-gray-300 rounded-full size-10 items-center justify-center transform transition-all duration-300 group-hover:bg-[#bcff00]">
        <img src="./images/11.svg" alt="" className='size-5' />
      </div>
      <p className='group-hover:translate-x-4 transform transition-all duration-300'>{text}</p>
    </div>
  )
}

export default ClickLine
