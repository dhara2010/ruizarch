import React from 'react'
import Hero3 from './Hero3'
import InfoRight from './InfoRight'
import BottomCnt from './BottomCnt'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function Tips_for_a_planning_project() {
    const [box1Ref, isBox1Visible] = useScrollAnimation();
    const [divRef, isDivVisible] = useScrollAnimation();
    const [tagRef, isTagVisible] = useScrollAnimation();
    const [ShareRef, isShareVisible] = useScrollAnimation();

    return (
        <div>
            <Hero3 img={"./images/projects/2.jpg"} h1={<div className="lg:w-[1000px]">Play to Your strengths and</div>} h2="supercharge " h3="your business" />
            <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28'>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                    <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2 w-full lg:w-170'>
                        <div className='flex flex-col gap-6 lg:gap-12'>
                            <div ref={box1Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <img src="./images/Blog/4.jpg" alt="" className='w-10 rounded-full' />
                                <p className='text-sm'>Nguta Ithya</p>
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p className='text-sm text-neutral-400'>02.04.2022</p>
                            </div>
                            <div ref={divRef} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isDivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className='text-neutral-600 text-[15px]'>Gutem temporibus quae facilis totam, dolorem laborum optio laudantium explicabo quia ea. Officia beatae excepturi adipisci? Nobis consequatur ullam officiis adipisci assumenda, voluptas optio, commodi, soluta itaque error consectetur cupiditate vero voluptatem architecto blanditiis quidem amet. Quod ipsam consequuntur distinctio velit sed ipsum quisquam, itaque placeat error non animi quam aut similique nulla ab. Quaerat dicta, dolores veritatis magnam quae aut omnis in porro.</p>
                                <p className='font-bold text-[18px]'>Voluptatem odit ullam veritatis</p>
                                <p className='text-neutral-600 text-[15px]'>Omnis consectetur in libero! Quo animi minus sunt, excepturi inventore! Recusandae enim fugit saepe mollitia laboriosam minima sapiente laborum aspernatur ut! Voluptatibus tempora cupiditate nulla cum dicta odit unde eius sit molestias corrupti pariatur illum aspernatur blanditiis, dolor earum quidem incidunt eligendi magnam obcaecati iure quis corporis. Perspiciatis rem provident aliquid iusto temporibus, exercitationem voluptatibus accusamus amet ratione atque, dolor vel necessitatibus illo ipsa officia, sunt quia magni saepe velit ipsum sapiente blanditiis minima.</p>
                                <div className='flex flex-col text-neutral-600'>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Voluptate aspernatur</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Fugiat asperiores</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Doloremque quidem porro</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Numquam porro sequi</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                        <p>Laudantium quis</p>
                                    </div>
                                </div>
                                <p className='text-neutral-600 text-[15px]'>Voluptatem odit ullam veritatis corrupti officia non aperiam eius vero amet, sed porro blanditiis, harum, quo fugit cupiditate. Maxime quaerat ratione</p>
                                <p className='text-neutral-600 text-[15px]'>Tempora quasi nihil eos minus facilis. Modi atque odit mollitia, molestias eum inventore, minima distinctio laborum asperiores odio sit fuga rem, totam error aspernatur ipsa? Officia doloribus, non perspiciatis, aspernatur a numquam pariatur reprehenderit, incidunt fugiat modi nam. Repudiandae obcaecati excepturi, autem dicta tempore qui consequatur quisquam architecto dolorem voluptates nihil est ex perferendis eligendi laboriosam maxime placeat doloribus et reprehenderit beatae tempora numquam harum expedita! Amet at odit pariatur eum tenetur ratione</p>
                                 <div className='transform opacity-100 scale-100' >
                                    <div className={`flex`}>
                                        <div className="flex bg-[#bcff00] h-20 w-50 justify-center items-center">
                                            <img src="./images/12.svg" alt="" />
                                        </div>
                                        <hr className="border-line4 lg:h-30 lg:w-0" />
                                        <p className="text-3xl ml-10 mt-5" style={{ fontFamily: "Caveat, cursive" }}>I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.</p>
                                    </div>
                                </div>
                                <p className='text-neutral-600 text-[15px]'>Modi sint reprehenderit vitae officiis pariatur, ab debitis voluptate ea eius assumenda beatae, tempora, dolores deserunt, ipsam ipsum! Quod ipsam consequuntur distinctio velit sed ipsum quisquam, itaque placeat error non animi quam aut similique nulla ab. Quaerat dicta, dolores veritatis magnam quae aut omnis in porro.</p>
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
                                            <p>Design</p>
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

export default Tips_for_a_planning_project
