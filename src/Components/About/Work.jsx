import React, { useState } from 'react';
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';


const Work = () => {

    const [imageRef, isImageVisible] = useScrollAnimation();
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [boxImgRef, isBoxImgVisible] = useScrollAnimation();
    const [btn1Ref, isBtn1Visible] = useScrollAnimation();

    const images = [
        "./images/8.jpg",
        "./images/7.jpg",
        "./images/1.jpg",
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    }
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    }
    return (
        <div className="relative w-full px-4 sm:px-6 md:px-10 py-20 xl:px-28 z-10">
            <div ref={textRef} className={`flex items-center flex-col w-full sm:flex-row justify-between gap-10 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col gap-10 w-full lg:w-2/2">
                    <div ref={imageRef} className={`relative transition-all duration-500 ease-in-out ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <img src={images[currentIndex]} alt="" className={`w-full h-100 lg:h-130 object-cover transition-all duration-500 ease-in-out`} />
                        <div ref={boxImgRef} className={`absolute bottom-0 right-5 bg-white px-15 py-10 transition-all duration-500 ease-in-out ${isBoxImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex gap-8 uppercase font-bold">
                                <button onClick={handlePrev} disabled={currentIndex === 0} className={`transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : "hover:text-[#bcff00]"}`}>Prev</button>
                                <hr className="border-line4 h-7" />
                                <button onClick={handleNext} disabled={currentIndex === images.length - 1} className={`transition ${currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : "hover:text-[#bcff00]"}`}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={textRef} className={`w-full lg:w-2/2 lg:ml-20 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <p className="uppercase font-bold text-sm sm:text-base md:text-lg">Work</p>
                    <hr className="hr-line my-2 sm:my-3 md:my-4" />
                    <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <h4 className="mt-3 uppercase text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-sm"> What We Have Done </h4>
                        <p className="mt-5 text-neutral-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <Link to='/Project'>
                        <div ref={btn1Ref} className={`mt-10 flex items-center justify-center gap-4 md:justify-start group cursor-pointer transition-all duration-500 ease-in-out ${isBtn1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className="font-bold uppercase">See Projects</p>
                            <button className="bg-[#bcff00] p-3 transform transition-transform duration-300 group-hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Work;
