import React,{useState, useEffect} from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

const SkillsBox = ({num, width, text}) => {
    const [boxRef, isBoxVisible] = useScrollAnimation();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(isBoxVisible){
            setTimeout(() => setProgress(width), 100);
        }
    },[isBoxVisible, width])
    return (
        <div ref={boxRef} className={`flex gap-5 items-center transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="font-bold">{num}%</p>
            <div className="relative w-full h-15 border-line3">
                <div className='h-full bg-[#bcff00] flex items-center transition-all duration-1000 ease-out' style={{width: `${progress}%`}}>
                    <p className='font-semibold uppercase pl-10'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsBox
