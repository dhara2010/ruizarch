import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from "react-router-dom";

function Box({img,text,desg}) {
    const [boxRef, isBoxVisible] = useScrollAnimation();
    
    return (
        <Link to='/Team_member' state={{img, text, desg}} className="group block">
            <div ref={boxRef} className={`relative group transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="px-10 py-14 border-transparent hover:border hover:border-[#bcff00] transition-all duration-300">
                <div className="flex flex-col text-center items-center justify-center">
                    <img src={img} alt="" className='rounded-full w-30' />
                    <p className='uppercase font-bold mt-6'>{text}</p>
                    <p className="text-neutral-500 mt-2">{desg}</p>
                </div>
                <button className="absolute bottom-3 right-3 bg-[#bcff00] font-semibold px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">+</button>
            </div>
        </div>
        </Link>
    )
}

export default Box
