import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

function Do() {
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [p2Ref, isP2Visible] = useScrollAnimation();
    const [p3Ref, isP3Visible] = useScrollAnimation();
    const [p4Ref, isP4Visible] = useScrollAnimation();
    const [h1Ref, isH1Visible] = useScrollAnimation();
    const [h2Ref, isH2Visible] = useScrollAnimation();
    const [h3Ref, isH3Visible] = useScrollAnimation();
    const [h4Ref, isH4Visible] = useScrollAnimation();
    const [btn1Ref, isBtn1Visible] = useScrollAnimation();
    const [boxRef, isBoxVisible] = useScrollAnimation();
    const [p5Ref, isP5Visible] = useScrollAnimation();
    const [p6Ref, isP6Visible] = useScrollAnimation();
    const [h5Ref, isH5Visible] = useScrollAnimation();
    const [h6Ref, isH6Visible] = useScrollAnimation();
    const [btn4Ref, isBtn4Visible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 xl:px-28 py-20' >
            <div className='flex flex-col gap-10'>
                <h1 ref={h1Ref} className={`uppercase text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-500 ease-in-out ${isH1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>What We Do</h1>
                <p ref={p1Ref} className={`text-neutral-500 text-[15px] transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mt-20 flex flex-col lg:flex-row items-center lg:gap-8">
                <div className='flex flex-col gap-8'>
                    <h4 ref={h2Ref} className={`text-2xl font-semibold uppercase transition-all duration-500 ease-in-out ${isH2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Architecture</h4>
                    <p ref={p2Ref} className={`text-neutral-500 text-[15px] transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.</p>
                    <Link to='/SingleService'>
                        <div ref={btn1Ref} className={`flex items-center gap-4 md:justify-start group cursor-pointer transition-all duration-500 ease-in-out ${isBtn1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-sm font-bold">KNOW MORE</p>
                            <button className="bg-[#bcff00] p-3 transform transition-transform duration-300 group-hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col gap-8'>
                    <h4 ref={h3Ref} className={`text-2xl font-semibold uppercase transition-all duration-500 ease-in-out ${isH3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Interior Design</h4>
                    <p ref={p3Ref} className={`text-neutral-500 text-[15px] transition-all duration-500 ease-in-out ${isP3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.</p>
                    <Link to='/SingleService'>
                        <div ref={btn1Ref} className={`flex items-center gap-4 md:justify-start group cursor-pointer transition-all duration-500 ease-in-out ${isBtn1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-sm font-bold">KNOW MORE</p>
                            <button className="bg-[#bcff00] p-3 transform transition-transform duration-300 group-hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col gap-8'>
                    <h4 ref={h4Ref} className={`text-2xl font-semibold uppercase transition-all duration-500 ease-in-out ${isH4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Planning</h4>
                    <p ref={p4Ref} className={`text-neutral-500 text-[15px] transition-all duration-500 ease-in-out ${isP4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.</p>
                    <Link to='/SingleService'>
                        <div ref={btn1Ref} className={`flex items-center gap-4 md:justify-start group cursor-pointer transition-all duration-500 ease-in-out ${isBtn1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="text-sm font-bold">KNOW MORE</p>
                            <button className="bg-[#bcff00] p-3 transform transition-transform duration-300 group-hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
            <div ref={boxRef} className={`border-line3 p-5 lg:p-16 mt-20 transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className='flex flex-col gap-2'>
                        <p ref={p5Ref} className={`transition-all duration-500 ease-in-out ${isP5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >Email address</p>
                        <h5 ref={h5Ref} className={`text-xl lg:text-2xl transition-all duration-500 ease-in-out ${isH5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>projects@ruizarch.com</h5>
                    </div>
                    <div className='flex flex-col gap-2 my-4 lg:my-0'>
                        <p ref={p6Ref} className={`transition-all duration-500 ease-in-out ${isP6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Free Consultation</p>
                        <h5 ref={h6Ref} className={`text-xl lg:text-2xl transition-all duration-500 ease-in-out ${isH6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>1 800 847 7978</h5>
                    </div>
                    <Link to='/Contact'><button ref={btn4Ref} className={`lg:px-15 py-6 bg-[#bcff00] font-semibold uppercase transition-all duration-500 ease-in-out ${isBtn4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Find a Space</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Do
