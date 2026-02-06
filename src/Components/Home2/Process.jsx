import React, { useState } from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import ProcessBox from './ProcessBox';

const Process = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [BoxRef, isBoxVisible] = useScrollAnimation();

    const totalSlides = 3;
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };
    const handleNext = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === totalSlides - 1;

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 lg:px-28'>
            <div className="absolute inset-0 -z-10  bg-purple-100/50">
                <img src="./images/bg.svg" alt="" className="w-full h-full" />
            </div>
            <div ref={textRef} className={`flex flex-col sm:flex-row sm:items-end justify-between gap-8 sm:gap:12 tems-start transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col gap-5 uppercase w-full sm:w-auto">
                    <div>
                        <h6 className='font-bold text-base sm:text-lg'>How it works</h6>
                        <hr className="hr-line mt-1"></hr>
                    </div>
                    <h1 ref={headRef} className={`text-5xl sm:text-3xl font-semibold leading-tigh transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Our Process</h1>
                </div>
                <div className='flex flex-row sm:flex-row gap-4 sm:gap-8'>
                    <button onClick={handlePrev} disabled={isPrevDisabled} className={`uppercase font-bold ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>Prev</button>
                    <hr className="border-line3 h-8" />
                    <button onClick={handleNext} disabled={isNextDisabled} className={`uppercase font-bold ${isNextDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>Next</button>
                </div>
            </div>
            <div className="overflow-hidden mt-20" >
                <div ref={BoxRef} className={`flex gap-5 transition-all duration-500 ease-in-out`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
                        <ProcessBox head={'we hear'} />
                        <ProcessBox head={'we gives ideas'} />
                        <ProcessBox head={'we plan the base'} />
                    </div>
                    <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
                        <ProcessBox head={'we hear'} />
                        <ProcessBox head={'we gives ideas'} />
                        <ProcessBox head={'we plan the base'} />
                    </div>
                    <div className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
                        <ProcessBox head={'we hear'} />
                        <ProcessBox head={'we gives ideas'} />
                        <ProcessBox head={'we plan the base'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
