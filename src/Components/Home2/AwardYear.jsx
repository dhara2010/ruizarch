import React, { useState } from "react";
import { useScrollAnimation } from '../Home/ScrollAnimation';


export default function Awards() {
  const [hovered, setHovered] = useState(null);
      const [BoxRef, isBoxVisible] = useScrollAnimation();
  

  const awards = [
    { year: "2022", text: "Design of the Year" },
    { year: "2019", text: "Firms of the Year" },
    { year: "2014", text: "Product Winners" },
    { year: "2008", text: "Photography Winners" },
  ];

  const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/home2.2.jpg",
    "./images/4.jpg",
  ];

  const AwardYear = ({ year, text, index }) => (
    <div
      className="lg:ml-10"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="flex gap-8 group items-center cursor-pointer">
        <p className="text-neutral-400 group-hover:text-black transition-colors duration-300">
          {year}
        </p>
        <h4 className="text-neutral-400 text-xl xl:text-2xl font-semibold relative overflow-hidden transition-colors duration-300">
          <span className="absolute inset-0 bg-[#bcff00] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-black px-2">
            {text}
          </span>
        </h4>
      </div>
      <hr className="border-line4 mt-5 w-full xl:w-166" />
    </div>
  );

  return (
    <div ref={BoxRef} className={`relative flex flex-col md:flex-row gap-8 transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="relative md:w-2/3 flex flex-col gap-10">
        {awards.map((award, i) => (
          <AwardYear key={i} year={award.year} text={award.text} index={i}/>
        ))}
      </div>

      <div className="w-full absolute hidden lg:block">
        {images.map((img, i) => (
          <img key={i} src={img} alt="" className={`absolute w-90 h-60 -right-10 top-10 transition-all duration-700 ${ hovered === i ? "opacity-100 scale-110" : "opacity-0 scale-0"}`}/>
        ))}
      </div>
    </div>
  );
}
