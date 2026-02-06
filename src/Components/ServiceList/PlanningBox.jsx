import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import ClickLine from '../ClickLine';

const PlanningBox = ({head}) => {
        const [headRef, isHeadVisible] = useScrollAnimation();
        const [lineRef, isLineVisible] = useScrollAnimation();
        const [textRef, isTextVisible] = useScrollAnimation();
    return (
        <div className='flex flex-col gap-5'>
            <h1 ref={headRef} className={`uppercase text-3xl font-bold max-w-60 transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{head}</h1>
            <hr ref={lineRef} className={`hr-line transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
            <p  ref={textRef} className={`text-sm text-neutral-500 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex flex-col gap-5">
                <ClickLine text={'3D Modeling'} />
                <ClickLine text={'Programs to Map Territory'} />
                <ClickLine text={'Robotics and AI Technology'} />
                <ClickLine text={'Morphological Thinking'} />
                <ClickLine text={'Material Simulation'} />
            </div>
        </div>
    )
}

export default PlanningBox
