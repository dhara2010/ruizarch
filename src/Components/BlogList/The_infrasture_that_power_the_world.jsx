import React from 'react'
import Hero3 from './Hero3'
import InfoRight from './InfoRight'
import BottomCnt from './BottomCnt'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function The_infrasture_that_power_the_world() {
    const [box1Ref, isBox1Visible] = useScrollAnimation();
    const [divRef, isDivVisible] = useScrollAnimation();
    const [tagRef, isTagVisible] = useScrollAnimation();
    const [ShareRef, isShareVisible] = useScrollAnimation();

    return (
        <div> 
            <Hero3 img={"./images/projects/2.jpg"} text='Architecture' h1="The Infrastructure that" h2="Powers " h3="the World" />
            <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                    <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2 w-full lg:w-170'>
                        <div className='flex flex-col gap-6 lg:gap-12'>
                            <div ref={box1Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <img src="./images/Blog/3.jpg" alt="" className='w-10 rounded-full' />
                                <p className='text-sm'>Peter Stanbridge</p>
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p className='text-sm text-neutral-400'>02.01.2022</p>
                            </div>
                            <div ref={divRef} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isDivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className='text-neutral-600 text-[15px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                                <p className='text-neutral-600 text-[15px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                <div className='flex flex-col  text-neutral-600'>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Donec arcu lacus, ornare eget ligula vel, commodo luctus felis.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Ut dignissim sapien sit amet molestie rutrum.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Orci varius natoque penatibus et magnis dis parturient montes.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Ut at nulla ut libero mollis viverra sed vitae purus.</p>
                                    </div>
                                </div>
                                <p className='text-neutral-600 text-[15px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                <img src="./images/Blog/img.jpg" alt="" />
                                <p className='text-neutral-600 text-[15px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                <div className='transform opacity-100 scale-100' >
                                    <div className={`flex`}>
                                        <div className="flex bg-[#bcff00] h-20 w-80 justify-center items-center">
                                            <img src="./images/12.svg" alt="" />
                                        </div>
                                        <hr className="border-line4 lg:h-50 lg:w-0" />
                                        <div className="flex flex-col ml-10">
                                            <p className="text-3xl mt-5 leading-7" style={{ fontFamily: "Caveat, cursive" }}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                            <p className='mt-5 font-bold uppercase'>Jane Meldrum</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-neutral-600 text-[15px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                <hr className="border-line4 w-full" />
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:mr-30">
                                <div ref={tagRef} className={`flex gap-15 transition-all duration-500 ease-in-out ${isTagVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <h5 className='font-bold uppercase'>Tags:</h5>
                                    <div className='flex flex-col text-sm'>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                            <p>Branding</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                            <p>Construction</p>
                                        </div>  
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                            <p>Development</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                            <p>UI</p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={ShareRef} className={`flex gap-15 transition-all duration-500 ease-in-out ${isShareVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <h5 className='font-bold uppercase'>Share:</h5>
                                   <div className='flex flex-col text-sm'>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                            <a href="#"><p>Facebook</p></a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                             <a href="#"><p>Linkedin</p></a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                             <a href="#"><p>Reddit</p></a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                             <a href="#"><p>Pinterest</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-line3 p-5 lg:col-span-1 lg:ml-10 h-420 sm:mt-10">
                        <InfoRight />
                    </div>
                </div>
            </div>
            <BottomCnt />
        </div>
    )
}


export default The_infrasture_that_power_the_world
