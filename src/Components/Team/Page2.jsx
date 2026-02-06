import React, { useState } from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import All from './All';
import Executive from './Executive';
import DataCenter from './DataCenter';
import Education from './Education';
import WorkPlace from './WorkPlace';
import { Link } from 'react-router-dom';

const Page2 = () => {

    const [imageRef, isImageVisible] = useScrollAnimation();
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [buttonRef, isButtonVisible] = useScrollAnimation();
    const [pRef, ispVisible] = useScrollAnimation();
    const [linkRef, isLinkVisible] = useScrollAnimation();
    const [imgRef, isImgVisible] = useScrollAnimation();
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28'>
            <div className="flex flex-col items-center gap-10 text-center">
                <p ref={pRef} className={`max-w-105 text-neutral-500 leading-loose transition-all duration-500 ease-in-out ${ispVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
            <div className="mt-20">
                <div ref={linkRef} className={`flex gap-5 justify-between items-center transition-all duration-500 ease-in-out ${isLinkVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <hr className="border-line4 w-full" />
                    <div className="flex lg:flex-row flex-col text-center gap-8 uppercase font-bold text-sm">
                        <button onClick={() => setActiveTab("All")} className={`uppercase px-2 ${activeTab === 'All' ? 'bg-[#bcff00]  px-2' : ''}`}>All</button>
                        <button onClick={() => setActiveTab("Executive")} className={`uppercase  px-2 ${activeTab === "Executive" ? 'bg-[#bcff00] px-2' : ''}`}>Executive</button>
                        <button onClick={() => setActiveTab("DataCenter")} className={`uppercase  px-2 ${activeTab === 'DataCenter' ? 'bg-[#bcff00] px-2' : ''}`}>DataCenter</button>
                        <button onClick={() => setActiveTab("Education")} className={`uppercase  px-2 ${activeTab === 'Education' ? 'bg-[#bcff00] px-2' : ''}`}>Education</button>
                        <button onClick={() => setActiveTab("WorkPlace")} className={`uppercase  px-2 ${activeTab === 'WorkP    lace' ? 'bg-[#bcff00] px-2' : ''}`}>Workplace</button>
                    </div>
                    <hr className="border-line4 w-full" />
                </div>
            </div>
            <div ref={imgRef} className={`mt-10 transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {activeTab === "All" && <All />}
                {activeTab === "Executive" && <Executive />}
                {activeTab === "DataCenter" && <DataCenter />}
                {activeTab === "Education" && <Education />}
                {activeTab === "WorkPlace" && <WorkPlace />}
            </div>

            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-10 md:gap-20 mt-10">
                <div ref={imageRef} className={`relative transition-all duration-500 ease-in-out ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <img src="./images/group/13.jpg" alt="" className="w-full h-auto shadow-lg" />
                    <div className="absolute bottom-0 right-10 lg:right-0 w-40 sm:w-52 md:w-60 h-52 sm:h-60 md:h-64 p-4 sm:p-6 md:p-8">
                        <div className="border-box"></div>
                        <div className="absolute bg-white inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-center text-center items-center z-10">
                            <img src="./images/avt1.jpg" alt="" className='rounded-full size-20' />
                            <h4 className="text-lg md:text-xl font-bold mt-2 sm:mt-3 md:mt-5 uppercase">joe french</h4>
                            <p className='text-neutral-400 mt-3'>Recruit</p>
                        </div>
                    </div>
                </div>
                <div ref={textRef} className={`lg:ml-20 transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <p className="uppercase font-bold text-sm sm:text-base md:text-lg">Your Future</p>
                    <hr className="hr-line my-2 sm:my-3 md:my-4" />
                    <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <h4 className="mt-3 uppercase text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-sm"> Interested in Working Together? </h4>
                        <p className="mt-5 text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <Link to='/Contact'><button ref={buttonRef} className={`bg-[#bcff00] px-8 py-4 mt-5 uppercase font-bold transition-all duration-500 ease-in-out ${isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Sign UP Now </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Page2
