import React, { useState } from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

const ImageSlider = ({images = [ "./images/services/2.jpg","./images/services/3.jpg", "./images/services/4.jpg",] }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageRef, isImageVisible] = useScrollAnimation();
    const [boxImgRef, isBoxImgVisible] = useScrollAnimation();

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
        <div className="relative w-full z-10">
            <div ref={imageRef} className={`relative transition-all duration-500 ease-in-out ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                <img src={images[currentIndex]} alt="" className={`w-full h-130 object-cover transition-all duration-500 ease-in-out`} />
                <div ref={boxImgRef} className={`absolute bottom-0 right-5 bg-white px-15 py-10 transition-all duration-500 ease-in-out ${isBoxImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex gap-8 uppercase font-bold">
                        <button onClick={handlePrev} disabled={currentIndex === 0} className={`transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : "hover:text-[#bcff00]"}`}>Prev</button>
                        <hr className="border-line4 h-7" />
                        <button onClick={handleNext} disabled={currentIndex === images.length - 1} className={`transition ${currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : "hover:text-[#bcff00]"}`}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider 
