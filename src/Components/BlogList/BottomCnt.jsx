import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function BottomCnt() {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [head2Ref, isHead2Visible] = useScrollAnimation();
    const [input1Ref, isInput1Visible] = useScrollAnimation();
    const [input2Ref, isInput2Visible] = useScrollAnimation();
    const [input3Ref, isInput3Visible] = useScrollAnimation();
    const [btnRef, isBtnVisible] = useScrollAnimation();
    return (
        <div>
            <div className='relative w-full px-4 sm:px-6 md:px-10 py-32 lg:px-28'>
                <div className="absolute inset-0 -z-10 bg-purple-100/50">
                    <img src="./images/bg.svg" alt="" className="w-full h-full object-cover" />
                </div>
                <h4 ref={headRef} className={`text-3xl font-bold uppercase mb-8 transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Leave a reply</h4>
                <div ref={textRef} className={`grid grid-cols-1 lg:grid-cols-2 uppercase sm:flex-row items-center justify-between gap-8  transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col gap-8">
                        <div ref={input1Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Write a Comment <span className='text-red-500'>*</span></label>
                            <textarea rows='6' type="text" className='w-full border-b border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div ref={input1Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>FULL NAME <span className='text-red-500'>*</span></label>
                            <input type="text" className='w-full border-b border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                        <div ref={input2Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Email Address<span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='email@mydomain.com' className='w-full border-b border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                        <div ref={input3Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-bold'>Website <span className='text-red-500'>*</span></label>
                            <input type="text" className='w-full border-b border-black focus:border-[#bcff00] outline-none pb-8' />
                        </div>
                        <button ref={btnRef} className={`bg-[#bcff00] font-semibold uppercase py-6 px-15 mt-8 transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Submit Comment</button>
                    </div>
                </div>
            </div>
            <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 lg:w-[65%]'>
                <h4 ref={head2Ref} className={`uppercase font-bold text-3xl transition-all duration-500 ease-in-out ${isHead2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Comments - <span className='bg-[#bcff00] px-1'>03</span></h4>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 mt-10">
                        <div className="flex gap-8 items-center">
                            <img src="./images/avt2.jpg" alt="" className='w-20 h-20 rounded-full' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-bold uppercase'>Ponnappa Priya</h6>
                                <p className='text-neutral-400 text-sm'>September 23, 2023</p>
                            </div>
                        </div>
                        <button className="border hover:bg-[#bcff00] px-4 py-2">REPLY</button>
                    </div>
                    <p className="text-neutral-500 max-w-xl lg:ml-30 mt-3">We realised we really wanted to catch a glimpse of what went on behind the scenes of the companies we looked up to.</p>
                </div>
                 <div className='lg:ml-30'>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 mt-6">
                        <div className="flex gap-8 items-center">
                            <img src="./images/avt1.jpg" alt="" className='w-20 h-20 rounded-full' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-bold uppercase'>Tamzyn French</h6>
                                <p className='text-neutral-400 text-sm'>September 23, 2023</p>
                            </div>
                        </div>
                        <button className="border hover:bg-[#bcff00] px-4 py-2">REPLY</button>
                    </div>
                    <p className="text-neutral-500 max-w-xl lg:ml-30 mt-3">We realised we really wanted to catch a glimpse of what went on behind the scenes of the companies we looked up to.</p>
                </div>
                 <div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 mt-6">
                        <div className="flex gap-8 items-center">
                            <img src="./images/avt3.jpg" alt="" className='w-20 h-20 rounded-full' />
                            <div className='flex flex-col gap-2'>
                                <h6 className='font-bold uppercase'>Oscar Newman</h6>
                                <p className='text-neutral-400 text-sm'>September 23, 2023</p>
                            </div>
                        </div>
                        <button className="border hover:bg-[#bcff00] px-4 py-2">REPLY</button>
                    </div>
                    <p className="text-neutral-500 max-w-xl lg:ml-30 mt-3">We realised we really wanted to catch a glimpse of what went on behind the scenes of the companies we looked up to.</p>
                </div>
            </div>
        </div>
    )
}

export default BottomCnt
