import React from 'react'
import { useScrollAnimation } from './ScrollAnimation';
import Que from './Que';
import { Link } from 'react-router-dom';


const Core = () => {

    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [pRef, isPVisible] = useScrollAnimation();
    const [buttonRef, isButtonVisible] = useScrollAnimation();
    return (
        <div className="relative w-full min-h-screen text-white">
            <div className="absolute top-0 left-0 overflow-hidden h-full w-full">
                <img src="./images/3.jpg" alt="" className='h-full w-full object-cover' />
            </div>
            <div className='absolute top-0 left-0 h-full w-full bg-black/70'></div>
            <div className="relative p-10 md:p-28 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-10 pr-30">
                    <div ref={textRef} className={`flex flex-col transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h6 className="font-bold uppercase">our core</h6>
                        <hr className="hr-line3 w-15 mt-2" />
                    </div>
                    <h1 ref={headRef} className={`text-5xl font-bold transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Whole difference</h1>
                    <p ref={pRef} className={`text-neutral-400 transition-all duration-500 ease-in-out ${isPVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                    <Link to='/SingleService'>
                        <div ref={buttonRef} className={`flex items-center justify-center gap-4 md:justify-start uppercase transition-all duration-500 ease-in-out ${isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className=" font-bold">Read more</p>
                            <button className='bg-[#bcff00] p-2 transform transition-transform duration-300 hover:translate-x-2' >
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className="p-10 space-y-6">
                    <Que title="Team of Experts" content="Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                    <Que title="Creativity and Innovation" content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                    <Que title="Technology" content="Netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                    <Que title="Sustainability" content="Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                    <Que title="Honesty and Transparency" content="Fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                </div>

            </div>
        </div>
    )
}

export default Core
