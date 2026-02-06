import React from 'react'
import ClickLine from '../ClickLine'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import CountUp from '../Home/CountUp';

const Description = () => {
    const [headRef, isHeadVisible] = useScrollAnimation();
    const [h1Ref, ish1Visible] = useScrollAnimation();
    const [p1Ref, isp1Visible] = useScrollAnimation();
    const [p2Ref, isp2Visible] = useScrollAnimation();
    const [lineRef, isLineVisible] = useScrollAnimation();
    const [p3Ref, isp3Visible] = useScrollAnimation();
    const [p4Ref, isp4Visible] = useScrollAnimation();
    const [h2Ref, ish2Visible] = useScrollAnimation();
    const [p5Ref, isp5Visible] = useScrollAnimation();
    const [divRef, isdivVisible] = useScrollAnimation();
    const [p6Ref, isp6Visible] = useScrollAnimation();
    const [div2Ref, isdiv2Visible] = useScrollAnimation();
    const [p7Ref, isp7Visible] = useScrollAnimation();
    const [div3Ref, isdiv3Visible] = useScrollAnimation();
    const [box1Ref, isbox1Visible] = useScrollAnimation();
    const [box2Ref, isbox2Visible] = useScrollAnimation();
    const [box3Ref, isbox3Visible] = useScrollAnimation();
    const [box4Ref, isbox4Visible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2'>
                    <h1 ref={headRef} className={`text-2xl md:text-3xl lg:text-5xl uppercase font-bold transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Description</h1>
                    <p ref={p1Ref} className={`mt-10 text-neutral-500 leading-relaxed transition-all duration-500 ease-in-out ${isp1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <p ref={p2Ref} className={`text-neutral-500 leading-relaxed transition-all duration-500 ease-in-out ${isp2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <hr ref={lineRef} className={`border-line4 transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
                    <h1 ref={h1Ref} className={`text-5xl uppercase font-bold transition-all duration-500 ease-in-out ${ish1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Benefits</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='space-y-4 text-neutral-500'>
                            <p ref={p3Ref} className={`transition-all duration-500 ease-in-out ${isp3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Our architectural work improves people's lives. We work closely with clients to create functional solutions that creatively respond to the needs of individuals and organizations. From corporate facility innovation to commercial developments, we create beautiful, balanced designs fueled by big ideas.</p>
                            <p ref={p4Ref} className={`transition-all duration-500 ease-in-out ${isp4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <ClickLine text={'3D Modeling'} />
                            <ClickLine text={'Programs to Map Territory'} />
                            <ClickLine text={'Robotics and AI Technology'} />
                            <ClickLine text={'Material Simulation'} />
                        </div>
                    </div>
                </div>
                <div className="border-line3 p-5 lg:col-span-1 lg:ml-10 mt-10 lg:mt-0">
                    <div className="flex flex-col">
                        <h1 ref={h2Ref} className={`text-5xl font-bold uppercase pb-10 transition-all duration-500 ease-in-out ${ish2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Info Areas</h1>
                        <p ref={p5Ref} className={`uppercase font-bold py-6 transition-all duration-500 ease-in-out ${isp5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Master Planning</p>
                        <div ref={divRef} className={`transition-all duration-500 ease-in-out ${isdivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p >Workplace Consulting</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>3D Modeling Planning</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>Architecture</p>
                            </div>
                            <hr className="border-line4 mt-10" />
                        </div>
                        <p ref={p6Ref} className={`uppercase font-bold py-6 transition-all duration-500 ease-in-out ${isp6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Sustainability & Wellness</p>
                        <div ref={div2Ref} className={`transition-all duration-500 ease-in-out ${isdiv2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>Recreational Parks</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>Park and Public Squares</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>Parkland</p>
                            </div>
                            <hr className="border-line4 my-10" />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div ref={box1Ref} className={`border-line2 p-4 transition-all duration-500 ease-in-out ${isbox1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h6 className='font-bold'><CountUp end={10} />+</h6>
                                <p>Years Experience</p>
                            </div>
                            <div ref={box2Ref} className={`border-line2 p-4 transition-all duration-500 ease-in-out ${isbox2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h6 className='font-bold'><CountUp end={99} />+</h6>
                                <p>Billion Invested</p>
                            </div>
                            <div ref={box3Ref} className={`border-line2 p-4 transition-all duration-500 ease-in-out ${isbox3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h6 className='font-bold'><CountUp end={10} />+</h6>
                                <p>Years Experience</p>
                            </div>
                            <div ref={box4Ref} className={`border-line2 p-4 transition-all duration-500 ease-in-out ${isbox4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <h6 className='font-bold'><CountUp end={99} />+</h6>
                                <p>Billion Invested</p>
                            </div>
                        </div>
                        <hr className="border-line4 mt-10" />
                        <p ref={p7Ref} className={`uppercase font-bold py-6 transition-all duration-500 ease-in-out ${isp7Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Project agent</p>
                        <div ref={div3Ref} className={`transition-all duration-500 ease-in-out ${isdiv3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>Joe French</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>joe.french@ruizarch.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p>(570) 253 - 2853</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description
