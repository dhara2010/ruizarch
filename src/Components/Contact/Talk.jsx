import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

const Talk = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [lineRef, isLineVisible] = useScrollAnimation();
    const [p2Ref, isP2Visible] = useScrollAnimation();
    const [input1Ref, isInput1Visible] = useScrollAnimation();
    const [input2Ref, isInput2Visible] = useScrollAnimation();
    const [input3Ref, isInput3Visible] = useScrollAnimation();
    const [input4Ref, isInput4Visible] = useScrollAnimation();
    const [msgRef, isMsgVisible] = useScrollAnimation();
    const [fTextRef, isFTextVisible] = useScrollAnimation();
    const [btnRef, isBtnVisible] = useScrollAnimation();
    const [btn1Ref, isBtn1Visible] = useScrollAnimation();
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-32 lg:px-28'>
            <div className="absolute inset-0 -z-10 bg-purple-100/50">
                <img src="./images/bg.svg" alt="" className="w-full h-full object-cover" />
            </div>
            <div ref={textRef} className={`flex flex-col w-full sm:flex-row justify-between gap-8 lg:gap-20 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col gap-8 w-full md:w-1/3">
                    <h1 ref={headRef} className={`text-3xl lg:text-5xl font-semibold uppercase transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>We’d love to talk</h1>
                    <p ref={p1Ref} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
                    <hr ref={lineRef} className={`border-line4 w-full transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
                    <p ref={p2Ref} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Interested in joining the team? Browse our current openings.</p>
                    <Link to='/Team'>
                        <div ref={btn1Ref} className={`flex items-center justify-center gap-4 md:justify-start group cursor-pointer transition-all duration-500 ease-in-out ${isBtn1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-sm font-bold">JOIN US</p>
                            <button className="bg-[#bcff00] p-3 transform transition-transform duration-300 group-hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className='md:w-2/3'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center'>
                        <div ref={input1Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>FULL NAME <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Name Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                        <div ref={input2Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Email Address <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Email Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                        <div ref={input3Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Phone <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Phone Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                        <div ref={input4Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Budget <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Budget Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                        <div ref={msgRef} className={`flex flex-col gap-6 md:col-span-2 transition-all duration-500 ease-in-out ${isMsgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Message <span className='text-red-500'>*</span></label>
                            <textarea type="text" placeholder='Enter Your Message Here' rows='5' className="w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-1" />
                        </div>
                    </div>
                    <div ref={fTextRef} className={`flex mt-8 transition-all duration-500 ease-in-out ${isFTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <input type="checkbox" defaultChecked className='cursor-pointer mr-4 accent-[#bcff00] scale-125 sm:scale-150' /> Accept the terms and conditions of personal data.
                    </div>
                    <button ref={btnRef} className={`bg-[#bcff00] font-semibold uppercase py-6 px-15 mt-8 transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>send now</button>
                </div>
            </div>
        </div>
    )
}

export default Talk
