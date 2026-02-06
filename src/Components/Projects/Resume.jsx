import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import Project3 from '../Project-3/Project3';

function Resume({ prevLink, nextLink }) {
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [h1Ref, isH1Visible] = useScrollAnimation();
    const [p2Ref, isP2Visible] = useScrollAnimation();
    const [p3Ref, isP3Visible] = useScrollAnimation();
    const [p4Ref, isP4Visible] = useScrollAnimation();
    const [p5Ref, isP5Visible] = useScrollAnimation();
    const [divRef, isDivVisible] = useScrollAnimation();
    const [p6Ref, isP6Visible] = useScrollAnimation();
    const [p7Ref, isP7Visible] = useScrollAnimation();
    const [btn1Ref, isBtn1Visible] = useScrollAnimation();
    const [p8Ref, isP8Visible] = useScrollAnimation();
    const [btn2Ref, isBtn2Visible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 pb-30 xl:px-28 z-10'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-6">
                    <h1 ref={h1Ref} className={`uppercase text-4xl font-semibold transition-all duration-500 ease-in-out ${isH1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Resume</h1>
                    <p ref={p1Ref} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p ref={p2Ref} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                        <div>
                            <p ref={p3Ref} className={`font-semibold uppercase transition-all duration-500 ease-in-out ${isP3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Jane Meldrum</p>
                            <p ref={p4Ref} className={`mt-3 text-neutral-500 transition-all duration-500 ease-in-out ${isP4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>CEO of Ruizarch</p>
                        </div>
                        <p ref={p5Ref} className={`text-5xl  transition-all duration-500 ease-in-out ${isP5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ fontFamily: "Caveat, cursive" }}>J.meldrum</p>
                    </div>
                </div>
                <div className='lg:ml-30 mt-6 lg:mt-18 transform opacity-100 scale-100' >
                    <div ref={divRef} className={`flex transition-all duration-500 ease-in-out ${isDivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex bg-[#bcff00] size-15 justify-center items-center">
                            <img src="./images/12.svg" alt="" />
                        </div>
                    </div>
                    <div ref={p6Ref} className={`flex transition-all duration-500 ease-in-out ${isP6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <hr className="border-line4 h-80 lg:h-50 lg:w-0" />
                        <div className="flex flex-col ml-15 gap-5">
                            <p className="mt-12 text-2xl font-semibold" style={{ fontFamily: "Caveat, cursive" }}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>
                            <p className='text-neutral-500'>Thomas Osha, Senior Vice President.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-line4 w-full mt-20" />
            <div className="flex flex-col lg:flex-row items-center uppercase lg:justify-between mt-5 lg:mt-20">
                <div>
                    <h4 ref={p7Ref} className={`font-bold text-2xl mb-8 transition-all duration-500 ease-in-out ${isP7Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Previous Project</h4>
                    <Link to={prevLink} ref={btn1Ref} className={`flex items-center gap-5 group cursor-pointer transition-all duration-500 ease-in-out ${isBtn1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-[#bcff00] flex items-center justify-center size-10">
                            <i className='fa-solid fa-arrow-left'></i>
                        </div>
                        <p className='uppercase font-semibold transform transition-transform duration-300 group-hover:translate-x-1'>Previous Work</p>
                    </Link>
                </div>
                <div className='mt-10 lg:mt-0'>
                    <h4 ref={p8Ref} className={`font-bold text-2xl mb-8 transition-all duration-500 ease-in-out ${isP8Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Previous Project</h4>
                    <Link to={prevLink} ref={btn2Ref} className={`flex items-center gap-5 group cursor-pointer transition-all duration-500 ease-in-out ${isBtn2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <p className='uppercase font-semibold transform transition-transform duration-300 group-hover:-translate-x-1'>Next Work</p>
                        <div className="bg-[#bcff00] flex items-center justify-center size-10">
                            <i className='fa-solid fa-arrow-right'></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Resume
