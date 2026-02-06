import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import PlanBox from './PlanBox';


const Plan = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
            <div className="flex flex-col items-center gap-10 uppercase font-bold text-center">
                <div ref={textRef} className={`flex flex-col items-center uppercase transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className='text-md'>Flexible plans</p>
                    <hr className="hr-line2" />
                </div>
                <h1 ref={headRef} className={`text-5xl transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Pricing</h1>
            </div>
            <div className="lg:mt-26 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <PlanBox text={'Basic'} price={'99'}/>
                <PlanBox text={'Advanced'} price={'199'} color1="#bcff00"/>
                <PlanBox text={'Pro'} price={'599'}   color1="#bcff00" color2="#bcff00"/>
            </div>
        </div>
    )
}

export default Plan
