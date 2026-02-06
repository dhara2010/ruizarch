import React from 'react';
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

const Ideas = () => {
        const [headRef, isHeadVisible] = useScrollAnimation();
        const [textRef, isTextVisible] = useScrollAnimation();
        const [pRef, isPVisible] = useScrollAnimation();
        const [btnRef, isBtnVisible] = useScrollAnimation();
    
  return (
    <div className='relative w-full px-4 sm:px-6 md:px-10 xl:px-28 pb-20 z-10' >
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">
        <div className="flex flex-col gap-5 uppercase">
          <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-sm font-semibold">Your Idea</p>
            <div className="hr-line mt-1" />
          </div>
          <h1 ref={textRef} className={`text-4xl md:text-5xl font-semibold leading-snug transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Interested in Our <span className="bg-[#bcff00] px-1">Work?</span></h1>
        </div>
        <p ref={pRef} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isPVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to='/Contact'>
        <div ref={btnRef} className={`flex justify-start lg:justify-end transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="uppercase bg-[#bcff00] text-black font-semibold py-6 px-15 cursor-pointer">
            Let’s Talk Now
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Ideas;
