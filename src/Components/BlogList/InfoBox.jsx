import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function InfoBox({date, img, head}) {
    const [imgRef, isImgVisible] = useScrollAnimation();
    const [lineRef, isLineVisible] = useScrollAnimation();
    const [h1Ref, isH1Visible] = useScrollAnimation();
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [btnRef, isBtnVisible] = useScrollAnimation();

    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 group">
            <div ref={imgRef} className={`relative w-full lg:w-170 h-85 overflow-hidden transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <img src={img} alt="image" className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" />
                <p className='absolute bottom-9 right-0 -rotate-90 bg-[#bcff00] px-4 py-1'>{date}</p>
            </div>
            <div>
                <hr ref={lineRef} className={`border-line4 w-15 group-hover:bg-[#bcff00] mb-8 transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
                <h4 ref={h1Ref} className={`text-xl font-bold mb-8 uppercase transition-all duration-500 ease-in-out ${isH1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{head}</h4>
                <p ref={p1Ref} className={`mb-8 transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos.</p>
                <button ref={btnRef} className={`uppercase flex gap-3 items-center transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className="font-bold">Read</p>
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 transition-all duration-300  group-hover:bg-white group-hover:border-2 group-hover:border-[#bcff00] group-hover:translate-x-1">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default InfoBox
