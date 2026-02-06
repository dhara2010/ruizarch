import React from 'react'
import { useScrollAnimation } from './ScrollAnimation';
import { Link } from 'react-router-dom'

const Purchase = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [buttonRef, isButtonVisible] = useScrollAnimation();
    const [iconRef, isIconVisible] = useScrollAnimation();
    const [iconTextRef, isIconTextVisible] = useScrollAnimation();

    return (
        <div ref={textRef} className={`relative z-10  px-4 sm:px-6 md:px-10 py-30 xl:px-28 transition-all duration-500 ease-in-out  ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-30">
                <div className="flex flex-col gap-7 uppercase">
                    <div>
                        <h6 className='font-bold'>Ruizarch purchase</h6>
                        <hr className="hr-line mt-1"></hr>
                    </div>
                    <h1 ref={headRef} className={`text-5xl font-semibold leading-tigh transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>We turn ideas into works of art</h1>
                    <Link to='/About'>
                        <div ref={buttonRef} className={`group flex items-center justify-center gap-4 md:justify-start cursor-pointer mt-5 transition-all duration-500 ease-in-out ${isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
                            <p className="text-sm font-bold">more about us</p>
                            <button className="bg-[#bcff00] p-3 transform transition-transform duration-300 cursor-pointer group-hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col gap-10 lg:ml-20 items-center'>
                    <p ref={textRef} className={`text-neutral-400 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <Link to='/SingleService'>
                            <div ref={iconRef} className={`flex flex-col gap-4 transition-all duration-500 ease-in-out ${isIconVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                                <button className='bg-[#bcff00] w-14 h-14 flex justify-center ' >
                                    <img src="./images/3.svg" alt="" />
                                </button>
                                <p ref={iconTextRef} className={`uppercase font-semibold transition-all duration-500 ease-in-out ${isIconTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Architecture</p>
                            </div>
                        </Link>
                        <Link to='/SingleService'>
                            <div ref={iconRef} className={`flex flex-col gap-4 transition-all duration-500 ease-in-out ${isIconVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                                <button className='bg-[#bcff00] w-14 h-14 flex justify-center'>
                                    <img src="./images/4.svg" alt="" />
                                </button>
                                <p ref={iconTextRef} className={`uppercase font-semibold transition-all duration-500 ease-in-out ${isIconTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Interiors</p>
                            </div>
                        </Link>
                        <Link to='/SingleService'>
                            <div ref={iconRef} className={`flex flex-col gap-4 transition-all duration-500 ease-in-out ${isIconVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                                <button className='bg-[#bcff00] w-14 h-14 flex justify-center'>
                                    <img src="./images/5.svg" alt="" />
                                </button>
                                <p ref={iconTextRef} className={`uppercase font-semibold transition-all duration-500 ease-in-out ${isIconTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Planning</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
