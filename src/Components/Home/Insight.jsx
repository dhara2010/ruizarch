import React from 'react'
import { useScrollAnimation } from './ScrollAnimation';
import { Link } from 'react-router-dom';

const Insight = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [buttonRef, isButtonVisible] = useScrollAnimation();
    const [imgRef, isImgVisible] = useScrollAnimation();
    const [imgTextRef, isImgTextVisible] = useScrollAnimation();
    const [imgHRef, isImgHVisible] = useScrollAnimation();
    const [imgPRef, isImgPVisible] = useScrollAnimation();
    return (
        <div className="relative w-full  px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10">
            <div className="flex flex-col gap-8 justify-center items-center text-center uppercase">
                <div ref={textRef} className={`flex flex-col items-center transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h6 className='font-bold'>Insights</h6>
                    <hr className="hr-line mt-2" />
                </div>
                <h1 ref={headRef} className={`text-5xl font-bold transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Ideas and News</h1>
                <Link to='/BlogList'>
                    <button ref={buttonRef} className={`bg-[#bcff00] p-3 transition-all duration-500 ease-in-out ${isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <i className="fa-solid fa-arrow-right text-black"></i>
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 min-h-[340px]">
                <div className="group flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
                    <div ref={imgRef} className={`relative w-full sm:w-1/2 h-full overflow-hidden transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Link to='/Explore_new_design_urbanism'><img src="./images/img1.jpg" alt="image" className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" /></Link>
                        <div className='absolute bottom-9 right-0 -rotate-90 bg-[#bcff00] px-4 py-1 font-medium'>02.04.2022</div>
                    </div>
                    <div ref={imgTextRef} className={`flex flex-col justify-center gap-6 sm:w-1/2 h-full transition-all duration-500 ease-in-out ${isImgTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <hr className="hr-line2" />
                        <h1 ref={imgHRef} className={`text-xl sm:text-2xl font-bold uppercase transition-all duration-500 ease-in-out ${isImgHVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Explore New Design in Urbanism </h1>
                        <p ref={imgPRef} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isImgPVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between group gap-6">
                    <div ref={imgRef} className={`relative w-full sm:w-1/2 h-full overflow-hidden transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Link to='/Design_a_perfect_home' ><img src="./images/img2.jpg" alt="image" className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" /></Link>
                        <div className='absolute bottom-9 right-0 -rotate-90 bg-[#bcff00] px-4 py-1 font-medium'>02.04.2022</div>
                    </div>
                    <div ref={imgTextRef} className={`flex flex-col justify-center gap-6 sm:w-1/2 h-full transition-all duration-500 ease-in-out ${isImgTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <hr className="hr-line2" />
                        <h1 ref={imgHRef} className={`text-xl sm:text-2xl font-bold uppercase transition-all duration-500 ease-in-out ${isImgHVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Design a perfect home</h1>
                        <p ref={imgPRef} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isImgPVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insight
