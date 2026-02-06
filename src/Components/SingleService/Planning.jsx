import React from 'react'
import ClickLine from '../ClickLine'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import CountUp from '../Home/CountUp';

const Planning = () => {
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [h1Ref, ish1Visible] = useScrollAnimation();
    const [p1Ref, isp1Visible] = useScrollAnimation();
    const [p2Ref, isp2Visible] = useScrollAnimation();
    const [lineRef, isLineVisible] = useScrollAnimation();
    const [p3Ref, isp3Visible] = useScrollAnimation();
    const [divRef, isdivVisible] = useScrollAnimation();
    const [p4Ref, isp4Visible] = useScrollAnimation();
    const [div2Ref, isdiv2Visible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2'>
                    <h1 ref={headRef} className={`text-5xl uppercase font-bold transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Perfect Planning</h1>
                    <p ref={p1Ref} className={`mt-10 text-neutral-500 leading-relaxed transition-all duration-500 ease-in-out ${isp1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <h1 ref={h1Ref} className={`my-10 text-5xl uppercase font-bold transition-all duration-500 ease-in-out ${ish1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Approach</h1>
                    <p ref={p2Ref} className={`text-neutral-500 leading-relaxed transition-all duration-500 ease-in-out ${isp2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <hr ref={lineRef} className={`mt-8 border-line4 transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
                </div>
                <div className='lg:col-span-1 lg:ml-10'>
                    <div className="border-line3 p-5">
                        <div className="flex flex-col">
                            <p ref={p3Ref} className={`uppercase font-bold py-6 transition-all duration-500 ease-in-out ${isp3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Capabilities</p>
                            <div ref={divRef} className={`transition-all duration-500 ease-in-out ${isdivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Non dictum quam risus pharetra esta.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Risus pharetra, ullamcorper.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Hac nibh fermentum, condimentum cursus.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Massa volutpat purus sit elementum.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Elit curabitur risus bibendum.</p>
                                </div>
                                <hr className="border-line4 mt-10" />
                            </div>
                            <p ref={p4Ref} className={`uppercase font-bold py-6 transition-all duration-500 ease-in-out ${isp4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Work Process</p>
                            <div ref={div2Ref} className={`pb-5 transition-all duration-500 ease-in-out ${isdiv2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Listen: Dictum quam risus pharetra esta.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Strategies: Ullamcorper tincidunt.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Project Work: Platea condimentum cursus.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                    <p>Launch: Massa volutpat elementum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planning
