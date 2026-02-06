import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import AwardYear from './AwardYear';
import { Link } from 'react-router-dom';

const Awards = () => {
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [textRef, isTextVisible] = useScrollAnimation();
    const [btnRef, isBtnVisible] = useScrollAnimation();


    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-32 lg:px-28 z-10'>
            <div className='flex flex-col w-full sm:flex-row justify-between gap-8 lg:gap-20 '>
                <div className="flex flex-col gap-8 w-full md:w-1/3">
                    <h1 ref={headRef} className={`text-3xl lg:text-5xl font-semibold uppercase transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Architecture Awards</h1>
                    <p ref={textRef} className={`text-neutral-400 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum gravida.</p>
                    <Link to='/BlogList'>
                        <div ref={btnRef} className={`flex items-center justify-center gap-4 md:justify-start transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-sm font-bold uppercase">see all</p>
                            <button className="bg-[#bcff00] p-2 transform transition-transform duration-300 hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className='relative md:w-2/3 flex flex-col gap-8'>
                    <AwardYear />
                </div>
            </div>
        </div>
    )
}

export default Awards
