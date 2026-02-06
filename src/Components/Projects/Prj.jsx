import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function Prj() {
    const [h1Ref, isH1Visible] = useScrollAnimation();
    const [h2Ref, isH2Visible] = useScrollAnimation();
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [h3Ref, isH3Visible] = useScrollAnimation();
    const [p2Ref, isP2Visible] = useScrollAnimation();
    const [h4Ref, isH4Visible] = useScrollAnimation();
    const [p3Ref, isP3Visible] = useScrollAnimation();
    const [h5Ref, isH5Visible] = useScrollAnimation();
    const [p4Ref, isP4Visible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 pt-10 pb-20 xl:px-28'>
            <h1 ref={h1Ref} className={`uppercase text-5xl font-semibold transition-all duration-500 ease-in-out ${isH1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Info Project</h1>
            <div className="mt-10 lg:mt-24 flex flex-col lg:flex-row justify-between lg:items-center lg:mr-20">
                <div>
                    <h6 ref={h2Ref} className={`font-semibold uppercase mb-5 transition-all duration-500 ease-in-out ${isH2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Location</h6>
                    <div ref={p1Ref} className={`flex mb-6 lg:mb-0 items-center gap-3 transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <p>Los Angeles, California</p>
                    </div>
                </div>
                <div>
                    <h6 ref={h3Ref} className={`font-semibold uppercase mb-5 transition-all duration-500 ease-in-out ${isH3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Square Feet</h6>
                    <div ref={p2Ref} className={`flex mb-6 lg:mb-0 items-center gap-3 transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <p>Based Upon Qualifications</p>
                    </div>
                </div>
                <div>
                    <h6 ref={h4Ref} className={`font-semibold uppercase mb-5 transition-all duration-500 ease-in-out ${isH4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Completion Date</h6>
                    <div ref={p3Ref} className={`flex mb-6 lg:mb-0 items-center gap-3 transition-all duration-500 ease-in-out ${isP3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <p>May 6, 2025</p>
                    </div>
                </div>
                <div>
                    <h6 ref={h5Ref} className={`font-semibold uppercase mb-5 transition-all duration-500 ease-in-out ${isH5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Project Component</h6>
                    <div ref={p4Ref} className={`flex mb-6 lg:mb-0 items-center gap-3 transition-all duration-500 ease-in-out ${isP4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <p>Architectural Services</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prj
