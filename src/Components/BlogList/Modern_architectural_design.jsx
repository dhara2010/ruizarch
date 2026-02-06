import React from 'react'
import Hero3 from './Hero3'
import InfoRight from './InfoRight'
import BottomCnt from './BottomCnt'
import { useScrollAnimation } from '../Home/ScrollAnimation';

function Modern_architectural_design() {
    const [box1Ref, isBox1Visible] = useScrollAnimation();
    const [divRef, isDivVisible] = useScrollAnimation();
    const [tagRef, isTagVisible] = useScrollAnimation();
    const [ShareRef, isShareVisible] = useScrollAnimation();
    
    return (
        <div>
            <Hero3 img={"./images/projects/8.jpg"} text='Design' h1="Modern" h2="Architectural " h3="Design" />
            <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28'>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                    <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2 w-full lg:w-170'>
                        <div className='flex flex-col gap-6 lg:gap-12'>
                            <div ref={box1Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <img src="./images/Blog/2.jpg" alt="" className='w-10 rounded-full' />
                                <p className='text-sm'>Charlie Williams</p>
                                <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                <p className='text-sm text-neutral-400'>02.04.2022</p>
                            </div>
                            <div ref={divRef} className={`flex flex-col gap-6 transition-all duration-500 ease-in-out ${isDivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <p className='text-neutral-600 text-[15px]'>Are you passionate about design and interested in pursuing a career as a graphic designer? Graphic design is a dynamic field that combines creativity, technical skills, and a keen eye for aesthetics. Whether you're a beginner or someone looking to enhance their skills, this article will guide you through 10 simple steps to become a graphic designer.</p>
                                <div className='transform opacity-100 scale-100' >
                                    <div className={`flex`}>
                                        <div className="flex bg-[#bcff00] h-20 w-30 justify-center items-center">
                                            <img src="./images/12.svg" alt="" />
                                        </div>
                                        <hr className="border-line4 lg:h-30 lg:w-0" />
                                        <p className="text-3xl ml-10 mt-5" style={{ fontFamily: "Caveat, cursive" }}>"Creativity is intelligence having fun." - Albert Einstein</p>
                                    </div>
                                </div>
                                <p className='font-bold text-[18px]'>Understand the Field</p>
                                <p className='text-neutral-600 text-[15px]'>Start by gaining a comprehensive understanding of what graphic design entails. Research the different types of graphic design, such as branding, web design, print design, and illustration. Explore the work of successful graphic designers and analyze their portfolios to learn about various design styles and techniques.</p>
                                <p className='font-bold text-[18px]'>Get a Design Education</p>
                                <p className='text-neutral-600 text-[15px]'>While formal education is not always a requirement, it can provide you with a solid foundation and enhance your credibility as a graphic designer. Consider pursuing a degree or diploma in graphic design or a related field. Look for reputable design schools or online courses that offer comprehensive programs to learn both theory and practical skills.</p>
                                <p className='font-bold text-[18px]'>Build Your Portfolio</p>
                                <p className='text-neutral-600 text-[15px]'>Your portfolio is your calling card as a graphic designer. Compile a collection of your best design projects to showcase your abilities and style. Include a variety of work, such as logos, brochures, websites, or illustrations, to demonstrate your versatility. Constantly update your portfolio as you complete new projects or improve existing ones.</p>
                                <p className='font-bold text-[18px]'>Gain Practical Experience</p>
                                <p className='text-neutral-600 text-[15px]'>To become a successful graphic designer, practical experience is crucial. Seek internships, freelance opportunities, or entry-level positions to gain hands-on experience in the field. This will allow you to apply your skills in real-world scenarios, understand client requirements, work with deadlines, and collaborate with others in a professional environment.</p>
                                <hr className="border-line4 w-full" />
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:mr-30">
                                <div ref={tagRef} className={`flex gap-15 transition-all duration-500 ease-in-out ${isTagVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                    <h5 className='font-bold uppercase'>Tags:</h5>
                                    <div className='flex flex-col text-sm'>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                            <p>Design</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                                            <p>Development</p>
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

export default Modern_architectural_design
