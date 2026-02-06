import React, { useState } from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';

const testimonials = [
    {
        id: 1,
        name: "Trevor Virtue",
        role: "Designer",
        img: "./images/avt1.jpg",
        icon: "./images/12.svg"
    },
    {
        id: 2,
        name: "Emma Miller",
        role: "SMM Manager",
        img: "./images/avt2.jpg",
        icon: "./images/12.svg"
    },
    {
        id: 3,
        name: "Michael Lee",
        role: "Project Manager",
        img: "./images/avt3.jpg",
        icon: "./images/12.svg"
    }
];

const TimonialsBox = () => {
    const [boxRef, isBoxVisible] = useScrollAnimation();
      const [buttonRef, isButtonVisible] = useScrollAnimation();
    const [index, setIndex] = useState(1);

    const handleNext = () => {
        if (index < testimonials.length - 1) {
            setIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    const { name, role, img, icon } = testimonials[index];

    return (
        <div className="w-full max-w-xl mx-auto mt-20">
            <div key={index} ref={boxRef} className={`transform opacity-100 scale-100 transition-all duration-500 ease-in-out object-cover ${isBoxVisible ? "opacity-100" : "opacity-0"}`}>
                <div className="flex">
                    <div className="flex bg-[#bcff00] size-15 justify-center items-center">
                        <img src={icon} alt="icon" className="size-7" />
                    </div>
                    <img src={img} alt="user" className="size-15 shadow-lg" />
                    <div className='ml-5'>
                        <h5 className="text-md font-semibold uppercase">{name}</h5>
                        <p className="text-neutral-500">{role}</p>
                    </div>
                </div>
                <div className="flex">
                    <hr className="border-line4 h-70 lg:h-40 w-0" />
                <p className="ml-15 mt-6 text-neutral-500 leading-relaxed">
                    
                    In my opinion, it was an unforgettable experience working on my ideas. They
                    understood everything I wanted in my project and idea that was great. I would
                    work with ruizarch again for future projects, even to ask them for advice to start
                    projects or ideas.
                </p>
                </div>
            </div>
            <div ref={buttonRef} className={`flex flex-col sm:flex-row gap-8 mt-10 transition-all duration-500 ease-in-out ${ isButtonVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }`} >
                <button className={`uppercase font-semibold ${index === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-[#bcff00] cursor-pointer"}`} onClick={handlePrev} disabled={index === 0}>
                    Prev
                </button>
                <hr className="border-line3 xl:h-8" />
                <button className={`uppercase font-semibold ${index === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : " hover:text-[#bcff00] cursor-pointer"}`} onClick={handleNext} disabled={index === testimonials.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default TimonialsBox
