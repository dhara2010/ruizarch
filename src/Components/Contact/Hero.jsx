import React, { useState, useEffect } from 'react'

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
        <img src="./images/services/1.jpg" alt="" className={`absolute top-0 h-full left-0 w-full object-cover transition-transform duration-700 ${isScrolled ? "scale-110" : "scale-100"} `} />
      </div>
      <div className={`absolute top-0 left-0 h-full w-full bg-black/70 ${isScrolled ? "translate-3d" : ""}`}></div>
      <div className="relative uppercase z-10 h-full md:min-h-screen flex flex-col items-center text-center justify-center px-6 md:px-28 pt-40">
        <h1 className='text-6xl font-bold mt-40'>We’d love to talk</h1>
        <p className='text-sm pt-10'>Home <span className='mx-4'>/</span> Contact</p>
      </div>
    </div>
  )
}

export default Hero
