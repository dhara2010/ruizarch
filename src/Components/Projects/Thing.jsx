import React from 'react'
import ServicesBox from '../Home/ServicesBox'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function Thing() {
    const [p1Ref, isP1Visible] = useScrollAnimation();
    const [h1Ref, isH1Visible] = useScrollAnimation();
    const [p2Ref, isP2Visible] = useScrollAnimation();

    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-30 items-center">
                <div className="col-span-1">
                    <div className="flex flex-col gap-6 max-w-xl r md:text-left lg:mt-30">
                        <div ref={p1Ref} className={`transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <p className='font-semibold uppercase'>The important thing</p>
                            <hr className="border-line4 w-15" />
                        </div>
                        <h1 ref={h1Ref} className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight uppercase transition-all duration-500 ease-in-out ${isH1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Project Fundamentals</h1>
                        <p ref={p2Ref} className={`text-neutral-500 transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="col-span-2 lg:ml-30">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ServicesBox img={'./images/4.svg'} head='Creativity' text='Consectetur adipiscing elit, sed do eiusmod labore aliqua.' link={'/SingleService'}/>
                        <ServicesBox img={'./images/9.svg'} head='Technology' text='Consectetur adipiscing elit, sed do eiusmod labore aliqua.' link={'/SingleService'}/>
                        <ServicesBox img={'./images/12.svg'} head='Sustainability' text='Consectetur adipiscing elit, sed do eiusmod labore aliqua.' link={'/SingleService'}/>
                        <ServicesBox img={'./images/7.svg'} head='Innovation' text='Consectetur adipiscing elit, sed do eiusmod labore aliqua.' link={'/SingleService'}/>
                    </div>
                </div>
            </div>
            <hr className="border-line4 w-full mt-30" />
        </div>
    )
}

export default Thing
