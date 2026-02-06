import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import ClickLine from '../ClickLine';

const Experts = () => {

    const [imageRef, isImageVisible] = useScrollAnimation();
      const [textRef, isTextVisible] = useScrollAnimation();
      const [headRef, isHeadVisible] = useScrollAnimation();
    return (
        <div className="relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10">
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-10 md:gap-20 mt-10">
                <div ref={imageRef} className={`relative transition-all duration-500 ease-in-out ${isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <img src="./images/services/14.jpg" alt="" className="w-full h-auto object-cover object-center" />
                    <div className="absolute bottom-0 right-10 lg:right-0 w-40 md:w-60 h-52 md:h-64 p-4 sm:p-6 md:p-8">
                        <div className="border-box"></div>
                        <div className="absolute bg-white inset-0 p-4 md:p-8 flex flex-col justify-center text-right z-10">
                             <div className="flex items-center flex-col gap-3 text-center">
                                <img src="./images/avt2.jpg" alt="" className='size-10 lg:size-25 rounded-full' />
                                <h3 className='text-xl font-bold uppercase'>Joe French</h3>
                                <p className='text-neutral-500'>Project Agent</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={textRef} className={`transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                    <p className="uppercase font-bold text-sm sm:text-base md:text-lg">Our Experts</p>
                    <hr className="hr-line my-2 sm:my-3 md:my-4" />
                    <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
                        <h4 className="mt-3 uppercase text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-sm"> Years of Experience </h4>
                        <p className="mt-5 text-neutral-500 text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                        <ClickLine text={'1250 Projects Carried out Only in the EE.UU.'}/>
                        <ClickLine text={'A Great Work Team Globally'}/>
                        <ClickLine text={'+ 940 Projects Carried Out in the World'}/>
                        <ClickLine text={'+ 100 Billion Invested in Projects'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experts
