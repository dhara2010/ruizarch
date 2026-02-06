import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import ServicesBox from '../Home/ServicesBox';


const Work = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isheadVisible] = useScrollAnimation();
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
            <div className="flex flex-col items-center gap-10 text-center uppercase font-bold">
                <div ref={textRef} className={`flex flex-col items-center transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className='text-md'>On This We Work</p>
                    <hr className="hr-line2" />
                </div>
                <h1 ref={headRef} className={`text-4xl transition-all duration-500 ease-in-out ${isheadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Exclusive Services</h1>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <ServicesBox img={"./images/3.svg"} no={'01.'} />
                <ServicesBox img={"./images/5.svg"} no={'02.'} head={'Design & planning'} />
                <ServicesBox img={"./images/4.svg"} no={'03.'} head={'Home Concept'} />
                <ServicesBox img={"./images/4.svg"} no={'04.'} head={'Work space'}/>
                <ServicesBox img={"./images/3.svg"} no={'05.'} head={'Exterior Design'} />
                <ServicesBox img={"./images/5.svg"} no={'06.'} head={'Furniture & Decor'} />
            </div>
        </div>
    )
}

export default Work
