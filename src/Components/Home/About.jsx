import React, { useState, useEffect, useRef } from 'react';
import CountUp from './CountUp';
import { useScrollAnimation } from './ScrollAnimation';

const logos = ["./images/3.png","./images/4.png","./images/5.png","./images/6.png"];

const About = () => {

  const [imageRef, isImageVisible] = useScrollAnimation();
  const [textRef, isTextVisible] = useScrollAnimation();
  const [headRef, isHeadVisible] = useScrollAnimation();
  const [buttonRef, isButtonVisible] = useScrollAnimation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  return (
    <div className="relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28">
      <div className="hidden lg:grid grid-cols-5 justify-between items-center">
        {logos.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full max-w-[160px] mx-auto" />
        ))}
      </div>
      <div className="lg:hidden overflow-hidden w-full mb-10">
        <div className="marquee flex">
          {[...logos, ...logos].map((src, i) => (
            <img key={i} src={src} alt="" className="w-[120px] sm:w-[140px] mx-5 sm:mx-6" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-10 md:gap-20 mt-10">
        <div ref={imageRef} className={`relative transition-all duration-500 ease-in-out ${ isImageVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }`} >
          <img src="./images/2.jpg" alt="" className="w-full h-auto shadow-lg" />
          <div className="absolute bottom-0 right-10 lg:right-0 w-40 sm:w-52 md:w-60 h-52 sm:h-60 md:h-64 p-4 sm:p-6 md:p-8">
            <div className="border-box"></div>
            <div className="absolute bg-white inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-center text-right z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <CountUp end={17} />
              </h1>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 sm:mt-3 md:mt-5">
                <span className="bg-[#bcff00] px-1">Years</span> of successful work
              </h4>
            </div>
          </div>
        </div>

        <div ref={textRef} className={`transition-all duration-500 ease-in-out ${ isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }`} >
          <p className="uppercase font-bold text-sm sm:text-base md:text-lg">About Studio</p>
          <hr className="hr-line my-2 sm:my-3 md:my-4" />
          <div ref={headRef} className={`transition-all duration-500 ease-in-out ${isHeadVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} >
            <h4 className="mt-3 uppercase text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-sm"> Great experience </h4>
            <p className="mt-5 text-neutral-500 text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida.</p>
          </div>

          <a ref={buttonRef} onClick={() => setIsVideoOpen(true)} className={`flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 font-bold cursor-pointer group transition-all duration-500 ease-in-out ${ isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }`} >
            <p className="text-sm sm:text-base md:text-lg">WATCH VIDEO</p>
            <button className="bg-[#bcff00] p-2 sm:p-3 md:p-3 transform transition-transform duration-300 group-hover:translate-x-2 rounded">
              <img src="./images/play.svg" alt="Play" className="w-4 sm:w-5 md:w-6" />
            </button>
          </a>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70 px-4">
          <div className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[50%] aspect-video">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -right-8 -top-8 text-white text-4xl sm:text-5xl md:text-6xl hover:text-gray-400 z-50"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HR4giV4oUjI?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
