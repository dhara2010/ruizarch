import React from 'react'
import { useScrollAnimation } from './ScrollAnimation';
import WorkBox from './WorkBox';

const Work = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [boxRef, isBoxVisible] = useScrollAnimation();

    return (
        <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-28 py-20 z-10">
            <div className="flex flex-col gap-8 justify-center items-center text-center uppercase">
                <div ref={textRef} className={`flex flex-col items-center transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h6 className='font-bold'>How We Work</h6>
                    <hr className="hr-line mt-2" />
                </div>
                <h1 ref={headRef} className={`text-5xl font-bold  transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>This is How Magic Happens</h1>
            </div>
            <div ref={boxRef} className={`mt-20 grid grid-cols-1 lg:grid-cols-3 md:gap-3 transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <WorkBox img={"./images/7.svg"} head={'High Efficiency'}/>
                <WorkBox img={"./images/8.svg"} head={'Team of Experts'}/>
                <WorkBox img={"./images/9.svg"} head={'Technology'}/>
            </div>
        </div>
    )
}

export default Work
