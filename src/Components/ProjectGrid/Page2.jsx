import React,{useState} from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import All from './All';
import Architecture from './Architecture';
import Interior from './Interior';
import Decor from './Decor';

const Page2 = () => {

    const [pRef, ispVisible] = useScrollAnimation();
    const [linkRef, isLinkVisible] = useScrollAnimation();
    const [imgRef, isImgVisible] = useScrollAnimation();
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
            <div className="flex flex-col items-center gap-10 text-center">
                <p ref={pRef} className={`max-w-140 text-neutral-500 leading-loose text-lg transition-all duration-500 ease-in-out ${ispVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Our Projects harness design and technology to create places where people live, work, and heal.</p>
            </div>
            <div className="mt-20">
                <div ref={linkRef} className={`flex gap-5 justify-between items-center transition-all duration-500 ease-in-out ${isLinkVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <hr className="border-line4 w-full" />
                    <div className="flex lg:flex-row flex-col text-center gap-8 uppercase font-semibold">
                        <button onClick={() => setActiveTab("All")} className={`uppercase px-2 ${activeTab === 'All' ? 'bg-[#bcff00]  px-2' : ''}`}>All</button>
                        <button onClick={() => setActiveTab("Architecture")} className={`uppercase  px-2 ${activeTab === "Architecture" ? 'bg-[#bcff00] px-2' : ''}`}>Architecture</button>
                        <button onClick={() => setActiveTab("Interior")} className={`uppercase  px-2 ${activeTab === 'Interior' ? 'bg-[#bcff00] px-2' : ''}`}>Interior</button>
                        <button onClick={() => setActiveTab("Decor")} className={`uppercase  px-2 ${activeTab === 'Decor' ? 'bg-[#bcff00] px-2' : ''}`}>Decor</button>
                    </div>
                    <hr className="border-line4 w-full" />
                </div>
            </div>
            <div ref={imgRef} className={`mt-10 transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {activeTab === "All" && <All />}
                {activeTab === "Architecture" && <Architecture />}
                {activeTab === "Interior" && <Interior />}
                {activeTab === "Decor" && <Decor />}
            </div>
        </div>
    )
}

export default Page2
