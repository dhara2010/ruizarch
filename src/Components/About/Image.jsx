import React from 'react'

function Image() {
    const logos = ["./images/3.png", "./images/4.png", "./images/5.png", "./images/6.png"];
    return (
        <div className="relative w-full z-10">
            <div className="hidden lg:grid grid-cols-5 justify-between items-center bg-purple-100 h-78">
                {logos.map((src, i) => (
                    <img key={i} src={src} alt="" className="w-full max-w-[160px] mx-auto" />
                ))}
            </div>
            <div className="lg:hidden overflow-hidden w-full mb-10">
                <div className="marquee flex">
                    {[...logos, ...logos].map((src, i) => (
                        <img key={i} src={src} alt="" className="w-[100px] lg:w-[140px] mx-5 sm:mx-6" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Image
