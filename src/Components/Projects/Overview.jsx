import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function Overview() {
        const [p1Ref, isP1Visible] = useScrollAnimation();
        const [h1Ref, isH1Visible] = useScrollAnimation();
        const [p2Ref, isP2Visible] = useScrollAnimation();
        const [divRef, isDivVisible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 pb-20 xl:px-28'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="flex flex-col  gap-6 uppercase max-w-xl text-left lg:mt-30">
                    <div ref={p1Ref} className={`transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className='font-semibold'>Overview</p>
                        <hr className="border-line4 w-15" />
                    </div>
                    <h1 ref={h1Ref} className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight transition-all duration-500 ease-in-out ${isH1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> Construction and <span className="bg-[#bcff00] px-1"> interior </span> design</h1>
                </div>
                <div className='flex flex-col gap-6 col-span-2 lg:ml-25 mt-6 lg:mt-45'>
                    <p ref={p2Ref} className={`text-neutral-500 text-[15px] leading-6 transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <div ref={divRef} className={`flex flex-col lg:flex-row items-center justify-between gap-5 transition-all duration-500 ease-in-out ${isDivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="border-line3 p-8">
                            <div className="flex items-center flex-col gap-3 text-center">
                                <img src="./images/avt2.jpg" alt="" className='size-25 rounded-full' />
                                <h3 className='text-xl font-bold uppercase'>Joe French</h3>
                                <p className='text-neutral-500'>Project Agent</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 text-neutral-500 max-w-100'>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <p>Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-line4 w-full mt-33" />
        </div>
    )
}

export default Overview
