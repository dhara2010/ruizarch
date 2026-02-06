import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "./images/home3.1.jpg",
        "./images/home2.2.jpg",
        "./images/home2.3.jpg"
    ];

    const texts = [
        <>Explore new <span className="text-[#bcff00]">design</span> in urbanism</>,
        <>Design with <span className="text-[#bcff00]">Community <br /></span> in mind</>,
        <>Modern <span className="text-[#bcff00]">architectural</span> design</>
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='relative min-h-screen w-full text-white'>
            <div className="absolute top-0 left-0 overflow-hidden h-full w-full">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out 
                        ${currentIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} 
                        ${isScrolled ? "scale-110" : "scale-100"}`}
                    />
                ))}
            </div>
            <div className='absolute top-0 left-0 h-full w-full bg-black/90'></div>
            <div className="relative z-10 h-full md:min-h-screen flex flex-col xl:flex-row justify-between lg:items-center px-6 md:px-28 mt-6">
                <div className="flex flex-col justify-center gap-6 text-left ">
                    <div className="relative h-[300px] md:h-[400px] w-full">
                        {texts.map((text, index) => (
                            <div key={index} className={`absolute top-0 left-0 flex flex-col justify-center gap-6 text-center md:text-left transition-all duration-1000 ease-in-out ${currentIndex === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
                                <div>
                                    <p className="uppercase font-medium">The Future</p>
                                    <hr className="hr-line3 w-15" />
                                </div>
                                <h1 className="uppercase text-2xl md:text-3xl lg:text-5xl font-bold leading-tight my-7.5 mt-10 w-full">
                                    {text}
                                </h1>
                                <Link to='/Projects'>
                                    <div className="flex items-center justify-center gap-4 md:justify-start">
                                        <p className="text-sm font-bold uppercase">View a Project</p>
                                        <button className="bg-[#bcff00] p-2 transform transition-transform duration-300 hover:translate-x-2">
                                            <i className="fa-solid fa-arrow-right text-black"></i>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative flex flex-col justify-start sm:flex-row gap-25 mt-30 z-10 items-center lg:top-20">
                    <div className='grid grid-cols-1 lg:grid-cols-3 space-x-8 space-y-2 font-semibold'>
                        {images.map((_, i) => (
                            <p key={i} onClick={() => setCurrentIndex(i)} className={`${currentIndex === i ? "text-[#bcff00]" : ""} cursor-pointer`} >
                                {`0${i + 1}`}
                            </p>
                        ))}
                    </div>
                    <div className='flex gap-8'>
                        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)} className='uppercase cursor-pointer' >
                            Prev
                        </button>
                        <hr className="border-line h-5 xl:h-8" />
                        <button onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)} className='uppercase cursor-pointer' >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
