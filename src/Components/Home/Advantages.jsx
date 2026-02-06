import React from 'react'
import { useScrollAnimation } from './ScrollAnimation';
import AdvantagesBox from './AdvantagesBox';

const Advantages = () => {

    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [textpRef, isTextpVisible] = useScrollAnimation();
    const [boxRef, isBoxVisible] = useScrollAnimation();

    return (
        <div className="relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10">
            <div className="flex flex-col gap-8 justify-center items-center text-center">
                <div ref={textRef} className={`flex flex-col items-center uppercase transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h6 className='font-bold'>Our Advantages</h6>
                    <hr className="hr-line mt-2" />
                </div>
                <h1 ref={headRef} className={`text-5xl font-bold leading-tigh max-w-3xl uppercase transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>We Take Care of Everything for You!</h1>
                <p ref={textpRef} className={`text-neutral-600 max-w-md transition-all duration-500 ease-in-out ${isTextpVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.</p>
            </div>
            <div ref={boxRef} className={`grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <AdvantagesBox title={'Listen'}/>
                <AdvantagesBox title={'Strategies'}/>
                <AdvantagesBox title={'Project Work'}/>
                <AdvantagesBox title={'Launch'}/>
            </div>
        </div>
    )
}

export default Advantages
