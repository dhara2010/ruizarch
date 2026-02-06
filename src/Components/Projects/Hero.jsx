import React, { useState, useEffect } from 'react'

const Hero = ({img,text1, text2}) => {
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
        <img src={img} alt="" className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700 ${isScrolled ? "scale-110" : "scale-100"} `} />
      </div>
      <div className={`absolute top-0 left-0 h-full w-full bg-black/80 ${isScrolled ? "translate-3d" : ""}`}></div>
      <div className="relative z-10 h-full md:min-h-screen flex px-6 md:px-28 mt-6">
        <div className="flex flex-col justify-center gap-6 uppercase max-w-xl text-left lg:mt-30">
         <div>
           <p className='font-semibold mt-40 lg:mt-0'>Modern concept</p>
          <hr className="hr-line3 w-15" />
         </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"> {text1} <span className="text-[#bcff00] text-4xl sm:text-5xl md:text-6xl"> {text2} </span></h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
