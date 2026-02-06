import React from 'react'
import Que from '../Home/Que'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

const Help = () => {
        const [textRef, isTextVisible] = useScrollAnimation();
        const [headRef, isHeadVisible] = useScrollAnimation();
        const [btnRef, isBtnVisible] = useScrollAnimation();
    
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 pb-20 xl:px-28 z-10'>
            <div className="flex flex-col uppercase gap-5">
               <div ref={textRef} className={`transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h6 className='font-bold'>How We Work</h6>
                    <hr className="hr-line mt-2" />
                </div>
                <h1 ref={headRef} className={`text-5xl font-semibold pb-5 transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>We Can Help!</h1>
                <Que title="General Information" content="Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                <Que title="Management of personal data" content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                <Que title="Does Ruizarch accept article submissions?" content="Netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                <Que title="What is the Ruizarch insights app?" content="Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo." />
                <Link to='/Contact'><button ref={btnRef} className={`px-9 py-5 bg-[#bcff00] w-60 font-bold uppercase transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>More Quetions?</button></Link>
            </div>
        </div>
    )
}

export default Help
