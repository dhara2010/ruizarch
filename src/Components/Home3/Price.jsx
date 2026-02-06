import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

const Price = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [input1Ref, isInput1Visible] = useScrollAnimation();
    const [input2Ref, isInput2Visible] = useScrollAnimation();
    const [input3Ref, isInput3Visible] = useScrollAnimation();
    const [input4Ref, isInput4Visible] = useScrollAnimation();
    const [btnRef, isBtnVisible] = useScrollAnimation();
    const [text2Ref, isText2Visible] = useScrollAnimation();
    const [lineRef, isLineVisible] = useScrollAnimation();
    const [text3Ref, isText3Visible] = useScrollAnimation();
    const [btn2Ref, isBtn2Visible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 lg:px-28 z-10'>
            <div className="absolute inset-0 -z-10 bg-purple-100/50">
                <img src="./images/bg.svg" alt="" className="w-full h-full" />
            </div>
            <div ref={textRef} className={`flex flex-col w-full sm:flex-row justify-between gap-8 xl:gap-20 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col gap-10 w-full md:w-1/3">
                    <div ref={textRef} className={`uppercase transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h6 className='font-bold'>Estimated Price</h6>
                        <hr className="hr-line" />
                    </div>
                    <h1 ref={headRef} className={`uppercase text-2xl lg:text-5xl font-bold transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Interior Cost Calculator</h1>
                    <p className='text-neutral-600 text-sm'>To get a cost estimate for your interior design idea, select the following options:</p>
                </div>
                <div className="w-full grid grid-cols-1 xl:ml-20">
                    <div className='grid md:grid-cols-2 gap-8 w-full items-center lg:mt-20 lg:ml-20'>
                        <div ref={input1Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-semibold uppercase'>Remodeling place <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Home' className='w-full text-sm border-b border-black focus:border-[#bcff00] outline-none pb-3 lg:pb-8' />
                        </div>
                        <div ref={input2Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-semibold uppercase'>Area size <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='м²' className='w-full text-sm border-b border-black focus:border-[#bcff00] outline-none pb-3 lg:pb-8' />
                        </div>
                        <div ref={input3Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-semibold uppercase'>Design style <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='Modern' className='w-full text-sm border-b border-black focus:border-[#bcff00] outline-none pb-3 lg:pb-8' />
                        </div>
                        <div ref={input4Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isInput4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <label htmlFor="" className='font-semibold uppercase'>Budget <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder='$' className='w-full text-sm border-b border-black focus:border-[#bcff00] outline-none pb-3 lg:pb-8' />
                        </div>
                        <div>
                            <button ref={btnRef} className={`uppercase w-full lg:w-60 py-5 border font-semibold transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Calculate</button>
                        </div>
                        <div ref={text2Ref} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isText2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p>Your budget is:</p>
                            <p className='text-xl lg:text-2xl font-bold items-center'>USD$ 56.000 <span className='ml-2 text-sm text-neutral-400 font-normal'>/No tax included</span></p>
                        </div>
                        <hr ref={lineRef} className={`border-line4 col-span-2 w-full my-8 transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}/>
                        <div ref={text3Ref} className={`uppercase transition-all duration-500 ease-in-out ${isText3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p>Submit Your Ideas</p>
                            <h4 className='text-xl font-bold max-w-60'>Get Full Estimate Details</h4>
                        </div>
                        <div ref={btn2Ref} className={`flex items-center justify-center transition-all duration-500 ease-in-out ${isBtn2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link to='/Contact'><button className='uppercase w-full lg:w-60 py-5 bg-[#bcff00] font-bold'>Get an Estimate</button></Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
