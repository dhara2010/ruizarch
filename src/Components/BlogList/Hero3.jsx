import React,{useState,useEffect} from 'react'

const Hero3 = ({text='Urban', img, h1, h2, h3}) => {
  
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
      <div className={`absolute top-0 left-0 h-full w-full bg-black/70 ${isScrolled ? "translate-3d" : ""}`}></div>
        <div className="relative z-10 font-bold h-full md:min-h-screen uppercase flex flex-col justify-center px-6 md:px-28 mt-6">
        <p className='pt-40'>{text}</p>  
        <hr className="border-line4 w-15" />
        <h1 className='text-3xl md:text-4xl lg:text-6xl mt-10 lg:max-w-180'>{h1} <span className='text-[#bcff00]'> {h2} </span> {h3}</h1>
      </div>
    </div>
  )
}

export default Hero3
