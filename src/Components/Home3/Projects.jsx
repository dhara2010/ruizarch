import React, { useState } from 'react';
import { useScrollAnimation } from '../Home/ScrollAnimation';
import ClickLine from '../ClickLine';

const Projects = () => {

    const [imageRef, isImageVisible] = useScrollAnimation();
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [boxImgRef, isBoxImgVisible] = useScrollAnimation();
    const [boxRef, isBoxVisible] = useScrollAnimation();

    const images = [
        "./images/7.jpg",
        "./images/home2.1.jpg",
        "./images/8.jpg",
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
        <div className="relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10">
            <div ref={textRef} className={`flex flex-col w-full sm:flex-row justify-between gap-10 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
                    <p className="uppercase font-bold text-sm sm:text-base md:text-lg">Recent Projects</p>
                    <hr className="hr-line my-2 sm:my-3 md:my-4" />
                    <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <h4 className="mt-3 uppercase text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-sm"> What We Have Done </h4>
                        <p className="mt-5 text-neutral-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div ref={boxRef} className={`flex flex-col lg:flex-row mt-8 gap-8 items-center transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="border-line3 p-8">
                            <div className="flex items-center flex-col gap-3 text-center">
                                <img src="./images/avt2.jpg" alt="" className='size-25 rounded-full' />
                                <h3 className='text-xl font-bold uppercase'>Joe French</h3>
                                <p className='text-neutral-500'>Project Agent</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <ClickLine text={'Morphological Thinking'} />
                            <ClickLine text={'Creative Architectural'} />
                            <ClickLine text={'Planning Designs'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
