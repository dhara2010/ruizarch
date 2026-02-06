import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    const images = [
        "./images/home2.1.jpg",
        "./images/home2.2.jpg",
        "./images/home2.3.jpg"
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='relative min-h-screen w-full text-white'>
            <div className="absolute top-0 left-0 overflow-hidden h-full w-full">
                {images.map((img, index) => (
                    <img ley={index} src={img} alt={`slide ${index + 1}`} className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImg === index ? "opacity-100" : "opacity-0"} ${isScrolled ? "scale-110" : "scale-100"}`} />
                ))}
            </div>
            <div className='absolute top-0 left-0 h-full w-full bg-black/70'></div>
            <div className="relative z-10 min-h-screen md:min-h-screen flex flex-col xl:flex-row justify-between items-center px-6 md:px-28 mt-6">
                <div className="flex flex-col justify-center max-w-2xl gap-6 text-center md:text-left">
                    <p className='text-neutral-400 font-medium'>Dolor sit amet consectetur</p>
                    <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold leading-tight my-7.5"> Explore new <br /><span className="text-[#bcff00] text-4xl sm:text-5xl md:text-6xl"> design </span>in urbanism </h1>
                    <Link to='/ProjectGrid'>
                    <div className="flex items-center justify-center gap-4 md:justify-start">
                        <p className="text-sm font-bold uppercase">look more</p>
                        <button className="bg-[#bcff00] p-2 transform transition-transform duration-300 hover:translate-x-2">
                            <i className="fa-solid fa-arrow-right text-black"></i>
                        </button>
                    </div>
                    </Link>
                </div>
                <div className="relative flex flex-col justify-start sm:flex-row gap-25 mt-30 z-10 items-center lg:top-20">
                    <div className='grid grid-cols-1 lg:grid-cols-2 space-x-8 space-y-2 font-semibold'>
                        {images.map((_, i) => (
                            <p key={i} onClick={() => setCurrentImg(i)} className={`${currentImg === i ? "text-[#bcff00]" : ""} cursor-pointer`}>
                                {`0${i + 1}`}
                            </p>
                        ))}
                    </div>
                    <div className='flex gap-8'>
                        <button onClick={() => setCurrentImg((prev) => (prev - 1 + images.length) % images.length)} className='uppercase cursor-pointer'>Prev</button>
                        <hr className="border-line h-8" />
                        <button onClick={() => setCurrentImg((prev) => (prev + 1) % images.length)} className='uppercase cursor-pointer'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
