import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

const Vision = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isheadVisible] = useScrollAnimation();
    const [box1Ref, isBox1Visible] = useScrollAnimation();
    const [box2Ref, isBox2Visible] = useScrollAnimation();
    const [box3Ref, isBox3Visible] = useScrollAnimation();
    const [btnRef, isBtnVisible] = useScrollAnimation();
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 pb-20 xl:px-28 z-10'>
            <div className="flex flex-col items-center gap-10 text-center font-bold uppercase">
                <div ref={textRef} className={`flex flex-col items-center transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className='text-md'>Good Vision</p>
                    <hr className="hr-line2" />
                </div>
                <h1 ref={headRef} className={`text-5xl transition-all duration-500 ease-in-out ${isheadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Our Soul</h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-10 md:mt-20">
                <div ref={box1Ref} className={`flex flex-col gap-5 group items-center text-center transition-all duration-500 ease-in-out ${isBox1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="border-line3 p-5">
                        <img src="./images/11.svg" alt="" className='w-5 lg:w-10 group-hover:scale-110' />
                    </div>
                    <h6 className='uppercase font-bold text-2xl'>Professionals</h6>
                    <p className='text-neutral-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div ref={box2Ref} className={`flex flex-col gap-5 group items-center text-center transition-all duration-500 ease-in-out ${isBox2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="border-line3 p-5">
                        <img src="./images/11.svg" alt="" className='w-5 lg:w-10  group-hover:scale-110' />
                    </div>
                    <h6 className='uppercase font-bold text-2xl'>Programs</h6>
                    <p className='text-neutral-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div ref={box3Ref} className={`flex flex-col gap-5 group items-center text-center transition-all duration-500 ease-in-out ${isBox3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="border-line3 p-5">
                        <img src="./images/11.svg" alt="" className='w-5 lg:w-10  group-hover:scale-110' />
                    </div>
                    <h6 className='uppercase font-bold text-2xl'>IT Techology</h6>
                    <p className='text-neutral-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
            <div className="mt-10 col-span-3 flex justify-center">
                <Link to='/BlogList'>
                <div ref={btnRef} className={`flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 font-bold cursor-pointer group transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <p className="text-sm sm:text-base md:text-lg uppercase">See All</p>
                    <button className="bg-[#bcff00] p-2 sm:p-3 md:p-3 transform transition-transform duration-300 group-hover:translate-x-2">
                        <i className='fa-solid fa-arrow-right'></i>
                    </button>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Vision
