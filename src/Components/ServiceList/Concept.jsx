import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

const Concept = () => {
        const [textRef, isTextVisible] = useScrollAnimation();
        const [pRef, ispVisible] = useScrollAnimation();
    
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
            <div className="flex flex-col items-center gap-10  text-center">
                <div ref={textRef} className={`flex flex-col font-bold items-center uppercase transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className='text-md'>Modern concept</p>
                    <hr className="hr-line2" />
                </div>
                <p ref={pRef} className={`text-neutral-500 text-lg leading-loose w-2/3 transition-all duration-500 ease-in-out ${ispVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Ruizarch we are a leader in architecture and design with a user-centric approach and deep technical expertise. We are consistently ranked as one of the top 10 architecture firms in the world, and our core disciplines are supported by a wide range of complementary services, all of which have a singular goal: to build environments where our clients thrive.</p>
            </div>
        </div>
    )
}

export default Concept
