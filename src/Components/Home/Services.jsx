import React from 'react'
import ServicesBox from './ServicesBox'
import { useScrollAnimation } from './ScrollAnimation';

const Services = () => {
      const [textRef, isTextVisible] = useScrollAnimation();
      const [headRef, isHeadVisible] = useScrollAnimation();
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 lg:px-28 z-10'>
            <div className="absolute inset-0 -z-10  bg-purple-100/50">
                <img src="./images/bg.svg" alt="" className="w-full h-full"/>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center text-center uppercase">
                <div ref={textRef} className={`transition-all duration-500 ease-in-out ${ isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }`}>
                    <h6 className='font-bold'>Services</h6>
                    <hr className="hr-line" />
                </div>
                <h1 ref={headRef} className={`text-5xl font-bold  transition-all duration-500 ease-in-out ${ isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }`}>What We Do</h1>
            </div>
            <div className='mt-10' >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <ServicesBox img={"./images/3.svg"} link='/SingleService' no={'01.'}/>
                    <ServicesBox img={"./images/5.svg"} link='/SingleService' no={'02.'}/>
                    <ServicesBox img={"./images/4.svg"} link='/SingleService' no={'03.'}/>
                </div>
            </div>
        </div>
    )
}

export default Services
