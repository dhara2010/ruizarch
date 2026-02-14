import React, { useState, useEffect } from 'react'

function Coming_soon() {

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 99);

    const [timeLeft, setTimeLeft] = useState(getTimeRamaining());

    function getTimeRamaining() {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        return {days, hours, minutes, seconds};
    }

    useEffect(() => {
         const timer = setInterval(() => {
            setTimeLeft(getTimeRamaining())
         }, 1000);
         return () => clearInterval(timer);
    }, []);
    return (
        <div className='relative min-h-screen w-full text-white'>
            <div className="absolute overflow-hidden h-full w-full">
                <img src="./images/15.jpg" alt="" className={`absolute top-0 left-0 h-full w-full object-cover`} />
            </div>
            <div className={`absolute top-0 left-0 h-full w-full bg-black/80`}></div>
            <div className="relative z-10 h-full flex flex-col lg:flex-row justify-between items-center px-6 md:px-28">
                <div className="flex flex-col justify-center gap-10 max-w-xl text-center md:text-left lg:mt-30">
                    <div>
                        <p className='font-semibold uppercase'>New Experience</p>
                        <hr className="hr-line3 w-15" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight uppercase"> Coming <br />soon </h1>
                    <p className='text-neutral-400 lg:max-w-120'>Soon we will live an unforgettable experience all together with our new website, we will bring tools to improve our communication and improve the products that improve the lives of our customers.</p>
                </div>
                <div className="relative flex flex-col gap-6 mt-10 lg:mt-80 z-10">
                    <p className='text-center lg:text-end text-neutral-400 font-semibold'>We’re Getting Ready to Launch in:</p>
                    <div className='flex flex-col lg:flex-row lg:justify-center items-center text-center gap-5'>
                        <div className="flex flex-col text-center gap-4">
                            <div className="flex justify-center items-center text-3xl border size-20 border-[#bcff00] rounded-full">{timeLeft.days}</div>
                            <p>Days</p>
                        </div>
                        <p className='text-3xl hidden lg:block lg:-mt-12'>:</p>
                        <div className="flex flex-col text-center gap-4">
                            <div className="flex justify-center items-center text-3xl border size-20 border-[#bcff00] rounded-full">{timeLeft.hours}</div>
                            <p>Hours</p>
                        </div>
                        <p className='text-3xl hidden lg:block lg:-mt-12'>:</p>
                        <div className="flex flex-col text-center gap-4">
                            <div className="flex justify-center items-center text-3xl border size-20 border-[#bcff00] rounded-full">{timeLeft.minutes}</div>
                            <p>Minutes</p>
                        </div>
                        <p className='text-3xl hidden lg:block lg:-mt-12'>:</p>
                        <div className="flex flex-col text-center gap-4">
                            <div className="flex justify-center items-center text-3xl border size-20 border-[#bcff00] rounded-full">{timeLeft.seconds}</div>
                            <p>Second</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coming_soon
