import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function LeftCnt() {
    const [box1Ref, isBox1Visible] = useScrollAnimation();
    const [divRef, isDivVisible] = useScrollAnimation();
    const [tagRef, isTagVisible] = useScrollAnimation();
    const [ShareRef, isShareVisible] = useScrollAnimation();

    return (
        <div className='flex flex-col gap-6 lg:gap-12'>
            <div ref={box1Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <img src="./images/Blog/4.jpg" alt="" className='w-10 rounded-full' />
                <p className='text-sm'>Nguta Ithya</p>
                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                <p className='text-sm text-neutral-400'>02.04.2022</p>
            </div>
            <div ref={divRef} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isDivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className='text-neutral-600 text-[15px]'>Gutem temporibus quae facilis totam, dolorem laborum optio laudantium explicabo quia ea. Officia beatae excepturi adipisci? Nobis consequatur ullam officiis adipisci assumenda, voluptas optio, commodi, soluta itaque error consectetur cupiditate vero voluptatem architecto blanditiis quidem amet. Quod ipsam consequuntur distinctio velit sed ipsum quisquam, itaque placeat error non animi quam aut similique nulla ab. Quaerat dicta, dolores veritatis magnam quae aut omnis in porro.</p>
                <p className='font-bold text-sm'>Voluptatem odit ullam veritatis</p>
                <p className='text-neutral-600 text-[15px]'>Omnis consectetur in libero! Quo animi minus sunt, excepturi inventore! Recusandae enim fugit saepe mollitia laboriosam minima sapiente laborum aspernatur ut! Voluptatibus tempora cupiditate nulla cum dicta odit unde eius sit molestias corrupti pariatur illum aspernatur blanditiis, dolor earum quidem incidunt eligendi magnam obcaecati iure quis corporis. Perspiciatis rem provident aliquid iusto temporibus, exercitationem voluptatibus accusamus amet ratione atque, dolor vel necessitatibus illo ipsa officia, sunt quia magni saepe velit ipsum sapiente blanditiis minima.</p>
                <div className='flex flex-col  text-neutral-600'>
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
                            <p>UI</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                            <p>Design</p>
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
    )
}

export default LeftCnt
