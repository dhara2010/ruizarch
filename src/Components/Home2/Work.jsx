import React from 'react';
import CountUp from '../Home/CountUp';
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

const logos = ["./images/3.png", "./images/4.png", "./images/5.png", "./images/6.png"];

const Work = () => {

    const [imageRef, isImageVisible] = useScrollAnimation();
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [buttonRef, isButtonVisible] = useScrollAnimation();
    const [boxRef, isBoxVisible] = useScrollAnimation();

    return (
        <div className="relative w-full z-10">
            <div className="hidden lg:grid grid-cols-5 justify-between items-center bg-[#bcff00] h-78">
                {logos.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-full max-w-[160px] mx-auto" />
                ))}
            </div>
            <div className="lg:hidden overflow-hidden w-full mb-10">
                <div className="marquee flex">
                    {[...logos, ...logos].map((src, i) => (
                        <img key={i} src={src} alt="" className="w-[100px] lg:w-[140px] mx-5 sm:mx-6" />
                    ))}
                </div>
            </div>
            <div className="px-4 md:px-10 lg:px-28 py-20 grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-10 md:gap-20 mt-10">
                <div ref={imageRef} className={`relative transition-all duration-500 ease-in-out ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <img src="./images/2.jpg" alt="" className="w-100 lg:w-full h-auto shadow-lg" />
                    <div className="absolute bottom-0 right-10 md:right-0 w-35 md:w-60 h-52 md:h-64 p-4 md:p-8">
                        <div className="border-box"></div>
                        <div className="absolute bg-white inset-0 p-4 md:p-8 flex flex-col justify-center text-center items-center z-10">
                                <img src="./images/avt2.jpg" alt="" className='rounded-full size-20'/>
                            <h4 className="text-lg md:text-xl font-bold mt-2 sm:mt-3 md:mt-5 uppercase">joe french</h4>
                            <p className='text-neutral-400 mt-3'>Project Agent</p>
                        </div>
                    </div>
                </div>

                <div ref={textRef} className={`transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <p className="uppercase font-bold text-sm sm:text-base md:text-lg">Future of Work</p>
                    <hr className="hr-line my-2 sm:my-3 md:my-4" />
                    <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <h4 className="mt-3 uppercase text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-sm"> The office renaissance </h4>
                        <p className="mt-5 text-neutral-500 text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <Link to='/ProjectGrid'>
                    <div ref={buttonRef} className={`flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 font-bold cursor-pointer group transition-all duration-500 ease-in-out ${isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <p className="text-sm sm:text-base md:text-lg uppercase">learn more</p>
                        <button className="bg-[#bcff00] p-2 sm:p-3 md:p-3 transform transition-transform duration-300 group-hover:translate-x-2">
                            <i className="fa-solid fa-arrow-right w-4 sm:w-5 md:w-6"></i>
                        </button>
                    </div>
                    </Link>
                    <div ref={boxRef} className={`flex mt-5 gap-6 transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="border-line2 p-6 w-52">
                            <h5 className="text-xl font-bold"><CountUp end={10} />+</h5>
                            <p className="text-sm mt-1">Succeeded Projects</p>
                        </div>
                        <div className="border-line2 p-6 w-52">
                            <h5 className="text-xl font-bold"><CountUp end={99} />K+</h5>
                            <p className="text-sm mt-1">Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
