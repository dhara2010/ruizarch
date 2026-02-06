import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import TimonialsBox from './TimonialsBox';

const logos = ["./images/3.png", "./images/4.png", "./images/5.png", "./images/6.png"];
const Timonials = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [imgRef, isImgVisible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 lg:px-28'>
            <div className="absolute inset-0 -z-10 bg-purple-100/50">
                <img src="./images/bg.svg" alt="" className="w-full h-full" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10">
                <div className="flex flex-col uppercase gap-10">
                    <div ref={textRef} className={` transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h6 className='font-bold'>Testimonials</h6>
                        <hr className="hr-line" />
                    </div>
                    <h1 ref={headRef} className={`text-5xl font-semibold transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>What they think of us</h1>
                </div>

                <TimonialsBox />
            </div>
            <div ref={imgRef} className={`hidden lg:grid grid-cols-5 justify-between items-center lg:mt-30 transition-all duration-500 ease-in-out ${ isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }`} >
                {logos.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-full max-w-[160px] mx-auto" />
                ))}
            </div>
            <div className="lg:hidden overflow-hidden w-full my-10">
                <div className="marquee flex">
                    {[...logos, ...logos].map((src, i) => (
                        <img key={i} src={src} alt="" className="w-[120px] sm:w-[140px] mx-5 sm:mx-6" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timonials
