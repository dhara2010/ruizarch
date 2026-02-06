import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

const Touch = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [phRef, isPhVisible] = useScrollAnimation();
    const [emailRef, isEmailVisible] = useScrollAnimation();
    const [addRef, isAddVisible] = useScrollAnimation();
    const [input1Ref, isInput1Visible] = useScrollAnimation();
    const [input2Ref, isInput2Visible] = useScrollAnimation();
    const [input3Ref, isInput3Visible] = useScrollAnimation();
    const [input4Ref, isInput4Visible] = useScrollAnimation();
    const [msgRef, isMsgVisible] = useScrollAnimation();
    const [fTextRef, isFTextVisible] = useScrollAnimation();
    const [btnRef, isBtnVisible] = useScrollAnimation();
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-32 lg:px-28'>
            <div className="absolute inset-0 -z-10 bg-purple-100/50">
                <img src="./images/bg.svg" alt="" className="w-full h-full object-cover" />
            </div>
            <div ref={textRef} className={`flex flex-col w-full sm:flex-row justify-between gap-8 lg:gap-20 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col gap-8 w-full md:w-1/3">
                    <div>
                        <h6 className='font-bold text-base sm:text-lg uppercase'>Get in touch</h6>
                        <hr className="hr-line mt-1"></hr>
                    </div>
                    <div>
                        <h1 ref={headRef} className={`text-3xl lg:text-5xl font-semibold uppercase transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Let's talk about your ideas</h1>
                        <hr className='hr-line mt-8 w-72 sm:w-full' />
                    </div>
                    <div ref={phRef} className={`transition-all duration-500 ease-in-out ${isPhVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center gap-3">
                            <div className="size-1 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>+7 (200) 600-30-30</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-1 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>+7 (200) 200 - 80 - 02</p>
                        </div>
                    </div>
                    <div ref={emailRef} className={`transition-all duration-500 ease-in-out ${isEmailVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center gap-3">
                            <div className="size-1 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>info@ruizarch.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-1 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>hello@ruizarch.com</p>
                        </div>
                    </div>
                    <div ref={addRef} className={`transition-all duration-500 ease-in-out ${isAddVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center gap-3">
                            <div className="size-1 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>USA</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-1 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>New York - 1800 Wazee Street</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-1 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>Suite 300 NY, NY 80202</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-2/3'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center lg:mt-20'>
                        <div ref={input1Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>FULL NAME <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Name Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' required/>
                        </div>
                        <div ref={input2Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Email Address <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Email Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' required/>
                        </div>
                        <div ref={input3Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Phone <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Phone Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' required />
                        </div>
                        <div ref={input4Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Budget <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Enter Your Budget Here' className='w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-8' required />
                        </div>
                        <div ref={msgRef} className={`flex flex-col gap-6 md:col-span-2 transition-all duration-500 ease-in-out ${isMsgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Message <span className='text-red-500'>*</span></label>
                            <textarea type="text" placeholder='Enter Your Message Here' rows='5'  className="w-full border-b-2 border-black focus:border-[#bcff00] outline-none pb-1" required />
                        </div>
                    </div>
                    <div ref={fTextRef} className={`flex mt-8 transition-all duration-500 ease-in-out ${isFTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <input type="checkbox" defaultChecked className='cursor-pointer mr-4 accent-[#bcff00] scale-125 sm:scale-150'/> Accept the terms and conditions of personal data.
                    </div>
                    <button ref={btnRef} type='submit' className={`bg-[#bcff00] font-semibold uppercase py-6 px-15 mt-8 transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>send now</button>
                </div>
            </div>
        </div>
    )
}

export default Touch
