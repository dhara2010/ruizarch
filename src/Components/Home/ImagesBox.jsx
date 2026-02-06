import React from 'react'
import { useScrollAnimation } from './ScrollAnimation';
import { Link } from 'react-router-dom';

const ImagesBox = ({ src, text, height, link }) => {
    const [imgRef, isImgVisible] = useScrollAnimation();

    return (
        <Link to={link}>
            <div ref={imgRef} className={`relative group w-full overflow-hidden transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ height }}>
                <img src={src} alt="image" className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-105" />
                <div className="absolute inset-0 m-10 bg-[#bcff00] flex items-center justify-center opacity-0 scale-95 translate-y-10 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                    <div className="flex flex-col text-center justify-center items-center">
                        <p className="text-xl max-w-1/2 font-bold text-center uppercase">{text}</p>
                        <hr className="hr-line mt-2" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ImagesBox
