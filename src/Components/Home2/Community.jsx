import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation.js'
import { Link } from 'react-router-dom'


const Community = () => {
    const [headRef, isHeadVisible] = useScrollAnimation()
    const [textRef, isTextVisible] = useScrollAnimation()
    const [btnRef, isBtnVisible] = useScrollAnimation()
    const [nRef, isNVisible] = useScrollAnimation()
    const [ntRef, isNtVisible] = useScrollAnimation()
    return (
        <div className='relative min-h-screen w-full text-white'>
            <div className="absolute overflow-hidden h-full w-full">
                <img src="./images/home2.3.jpg" alt="" className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700`} />
            </div>
            <div className={`absolute top-0 left-0 h-full w-full bg-black/70`}></div>
            <div className="relative z-10 min-h-screen flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-28 py-10">
                <div className="flex flex-col justify-center gap-6 max-w-xl text-center lg:text-left w-full">
                    <h1 ref={headRef} className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight uppercase transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> Design with <span className="text-[#bcff00]"> community </span> in <br />mind </h1>
                    <p ref={textRef} className={`text-neutral-400 max-w-sm mx-auto lg:mx-0 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                    <Link to='/About'>
                        <div ref={btnRef} className={`flex mt-3 items-center justify-center gap-4 lg:justify-start transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="font-bold">LERN MORE</p>
                            <button className="bg-[#bcff00] p-2 transform transition-transform duration-300 hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className="relative w-full lg:w-1/2 flex flex-col sm:flex-row flex-wrap items-center gap-20 mt-10 lg:mt-65 z-10 justify-center">
                    <div className="flex flex-col space-y-4 items-center">
                        <h1 ref={nRef} className={`text-4xl sm:text-5xl font-bold  transition-all duration-500 ease-in-out ${isNVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>600</h1>
                        <p ref={ntRef} className={`text-[#bcff00] uppercase font-semibold transition-all duration-500 ease-in-out ${isNtVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Locations</p>
                    </div>
                    <div className="flex flex-col space-y-4 items-center">
                        <h1 ref={nRef} className={`text-4xl sm:text-5xl font-bold  transition-all duration-500 ease-in-out ${isNVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>6</h1>
                        <p ref={ntRef} className={`text-[#bcff00] uppercase font-semibold transition-all duration-500 ease-in-out ${isNtVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Continents</p>
                    </div>
                    <div className="flex flex-col space-y-4 items-center">
                        <h1 ref={nRef} className={`text-4xl sm:text-5xl font-bold  transition-all duration-500 ease-in-out ${isNVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>22</h1>
                        <p ref={ntRef} className={`text-[#bcff00] uppercase font-semibold transition-all duration-500 ease-in-out ${isNtVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Workers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
