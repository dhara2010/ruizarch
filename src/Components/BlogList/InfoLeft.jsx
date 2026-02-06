import React, { useState } from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

function InfoLeft({ currentPage }) {

    const [imgRef, isImgVisible] = useScrollAnimation();
    const [activeTab, setActiveTab] = useState("All");
    const [lineRef, isLineVisible] = useScrollAnimation();
    const [h1Ref, isH1Visible] = useScrollAnimation();
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [linkRef, isLinkVisible] = useScrollAnimation();
    return (
        <div className="flex flex-col">
            <div className="group">
                <Link to='/The_infrasture_that_power_the_world'>
                <div ref={imgRef} className={`relative w-full lg:w-170 h-64 sm:h-80 lg:h-100 overflow-hidden transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <img src="./images/projects/2.jpg" alt="image" className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" />
                    <div className='absolute bottom-9 right-0 -rotate-90 bg-[#bcff00] px-4 py-1 font-medium'>02.01.2022</div>
                </div>
                <hr ref={lineRef} className={`border-line4 w-15 group-hover:bg-[#bcff00] my-8 transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <h5 ref={h1Ref} className={`text-xl sm:text-2xl  font-bold uppercase max-w-70 transition-all duration-500 ease-in-out ${isH1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>The Infrastructure That Powers The World</h5>
                    <p ref={p1Ref} className={`text-sm sm:text-base text-neutral-500 lg:max-w-80 transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos.</p>
                </div>
                </Link>
            </div>
            <div ref={linkRef} className={`flex flex-col items-center lg:flex-row gap-8 mt-15 transition-all duration-500 ease-in-out ${isLinkVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <hr className="border-line4 w-full" />
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <Link to='/All' onClick={() => setActiveTab("All")} className={`uppercase px-2 ${activeTab === 'All' ? 'bg-[#bcff00]  px-2' : ''}`}>All</Link>
                    <Link to='/Urban' onClick={() => setActiveTab("Urban")} className={`uppercase px-2 ${activeTab === 'Urban' ? 'bg-[#bcff00]  px-2' : ''}`}>Urban</Link>
                    <Link to='/Technology' onClick={() => setActiveTab("Technology")} className={`uppercase px-2 ${activeTab === 'Technology' ? 'bg-[#bcff00]  px-2' : ''}`}>Technology</Link>
                    <Link to='/Design' onClick={() => setActiveTab("Design")} className={`uppercase px-2 ${activeTab === 'Design' ? 'bg-[#bcff00]  px-2' : ''}`}>Design</Link>
                    <Link to='/Architecture' onClick={() => setActiveTab("Architecture")} className={`uppercase px-2 ${activeTab === 'Architecture' ? 'bg-[#bcff00]  px-2' : ''}`}>Architecture</Link>
                </div>
                <hr className="border-line4 w-full" />
            </div>
            <div className='mt-10 flex flex-col gap-8'>
                {currentPage === 1 && <Page1 />}
                {currentPage === 2 && <Page2 />}
            </div>
        </div>
    )
}

export default InfoLeft
