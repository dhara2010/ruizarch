import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import SkillsBox from './SkillsBox';

const Skills = () => {
    const [textRef, isTextVisible] = useScrollAnimation();
    const [headRef, isHeadVisible] = useScrollAnimation();
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 lg:px-28 z-10'>
            <div className="absolute inset-0 -z-10 bg-purple-100/50">
                <img src="./images/bg.svg" alt="" className="w-full h-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-10 w-full">
                    <div ref={textRef} className={`uppercase transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h6 className='font-bold'>Our Skills</h6>
                        <hr className="hr-line" />
                    </div>
                    <h1 ref={headRef} className={`uppercase text-5xl font-bold transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>We make custom made items</h1>
                    <p className='text-neutral-600 text-sm max-w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col gap-8">
                    <SkillsBox num={35} width='35' text={'Design'}/>
                    <SkillsBox num={60} width='60' text={'Interior Scetch'}/>
                    <SkillsBox num={80} width='80' text={'3D Moelling'}/>
                    <SkillsBox num={40} width='40' text={'Planning'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills
