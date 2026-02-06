import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from './ScrollAnimation';

const ServicesBox = ({ no, img, head = 'Interior Decor', text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod labore aliqua.', link  }) => {
    const [boxRef, isBoxVisible] = useScrollAnimation();

    return (
        <div ref={boxRef} className={`relative border-line2 p-8 bg-white group overflow-hidden transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to={link}>
            <h3 className='text-neutral-200 text-2xl font-extrabold'>{no}</h3>
            <div className="flex flex-col items-center text-center">
                <img src={img} alt="" className='size-8 mt-4' />
                <h5 className='uppercase text-2xl font-bold mt-8'>{head}</h5>
                <hr className='hr-line2 mt-2 group-hover:hr-hover transition-all duration-400' />
                <p className='text-neutral-600 mb-4 mt-6 group-hover:hidden transition-all duration-300'>{text}</p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="flex items-center gap-2 bg-[#bcff00] text-black font-bold px-7 py-5">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
             </Link>
        </div>
    )
}

export default ServicesBox
