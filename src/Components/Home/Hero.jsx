import React, { useState, useEffect } from 'react'
import CountUp from './CountUp';
import { Link} from 'react-router-dom'


const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className='relative min-h-screen w-full text-white'>
            <div className="absolute overflow-hidden h-full w-full">
                <img src="./images/1.jpg" alt="" className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700 ${isScrolled ? "scale-110" : "scale-100"} `} />
            </div>
            <div className={`absolute top-0 left-0 h-full w-full bg-black/70 ${isScrolled ? "translate-3d" : ""}`}></div>
            <div className="relative z-10 h-full md:min-h-screen flex flex-col xl:flex-row justify-between items-center px-6 md:px-28 mt-6">
                <div className="flex flex-col justify-center gap-6 uppercase max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-40 lg:mt-0"> MODERN <span className="text-[#bcff00] text-4xl sm:text-5xl md:text-6xl"> ARCHITECTURAL </span>  DESIGN </h1>
                    <Link to='/Projects'>
                        <div className="flex items-center justify-center gap-4 md:justify-start">
                            <p className="text-sm font-bold">VIEW PROJECTS</p>
                            <button className="bg-[#bcff00] p-3 transform transition-transform duration-300 hover:translate-x-2">
                                <i className="fa-solid fa-arrow-right text-black"></i>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className="relative flex flex-col lg:flex-row gap-6 mt-30 pb-10 lg:pb-0 z-10">
                    <div className="flex flex-col gap-6">
                        <div className="border-line p-6 w-52">
                            <h5 className="text-[#bcff00] text-xl"><CountUp end={346} /></h5>
                            <p className="text-sm mt-1">Succeeded Projects</p>
                        </div>
                        <div className="border-line p-6 w-52">
                            <h5 className="text-[#bcff00] text-xl"><CountUp end={10} /></h5>
                            <p className="text-sm mt-1">Years Experience</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="border-line p-6 w-52">
                            <h5 className="text-[#bcff00] text-xl"><CountUp end={9} /></h5>
                            <p className="text-sm mt-1">Working Hours</p>
                        </div>
                        <div className="border-line p-6 w-52">
                            <h5 className="text-[#bcff00] text-xl"><CountUp end={99} /></h5>
                            <p className="text-sm mt-1">Billion Invested</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
