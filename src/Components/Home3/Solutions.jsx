import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import ClickLine from '../ClickLine';

const Solutions = () => {
    const [imageRef, isImageVisible] = useScrollAnimation();
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    return (
        <div className="relative w-full z-10">
            <div className="px-4 sm:px-6 md:px-10 lg:px-28 pb-30 grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-10 md:gap-20 mt-10">
                <div ref={imageRef} className={`relative transition-all duration-500 ease-in-out ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <img src="./images/2.jpg" alt="" className="w-full h-auto shadow-lg" />
                </div>

                <div ref={textRef} className={`transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <p className="uppercase font-bold text-sm sm:text-base md:text-lg">Solutions</p>
                    <hr className="hr-line my-2 sm:my-3 md:my-4" />
                    <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <h4 className="mt-3 uppercase text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">A well qualified staff</h4>
                        <p className="mt-5 text-neutral-500 text-sm sm:text-base md:text-lg">Our work staff in all areas and jobs are well qualified in the matters we need to achieve the objectives, in each project we carry out with our clients.</p>
                    </div>
                    <div className="flex flex-col mt-5 gap-4">
                        <ClickLine text={'Morphological Thinking'} />
                        <ClickLine text={'Creative Architectural'} />
                        <ClickLine text={'Planning Designs'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions
