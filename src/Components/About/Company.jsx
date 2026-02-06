import React, { useState } from 'react';
import { useScrollAnimation } from '../Home/ScrollAnimation';

function Company() {

        const [imageRef, isImageVisible] = useScrollAnimation();
        const [boxImgRef, isBoxImgVisible] = useScrollAnimation();
    
    const images = [
            "./images/2.jpg",
            "./images/8.jpg",
            "./images/7.jpg",
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
            <div className="flex flex-col lg:flex-row lg:gap-20">
                <div className="flex flex-col gap-8 w-full lg:w-250">
                    <div>
                        <p className='font-semibold uppercase'>Our company</p>
                        <div className="border-line4 w-15 mt-1"></div>
                    </div>
                    <h5 className='text-2xl md:text-3xl lg:text-5xl font-bold uppercase leading-tight'>We provide services <span className='bg-[#bcff00] px-1'>and</span> solutions</h5>
                    <p className='text-neutral-700 text-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                        <div>
                            <p className='uppercase font-bold'>Jane Meldrum</p>
                            <p className='mt-2 text-neutral-500'>CEO of Ruizarch</p>
                        </div>
                        <p className='text-2xl lg:text-5xl' style={{ fontFamily: "Caveat, cursive" }}>J.meldrum</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10 w-full">
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
            </div>
            
        </div>
    )
}

export default Company
