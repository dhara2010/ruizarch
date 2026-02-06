import React from 'react'
import { Link } from 'react-router-dom'

function Idea() {
    return (
        <div className='relative w-full h-full py-20 text-white' >
             <div className="absolute top-0 left-0 overflow-hidden h-full w-full">
                <img src="./images/11.jpg" alt="" className='h-full w-full object-cover' />
            </div>
             <div className='absolute top-0 left-0 h-full w-full bg-black/70'></div>
            <div className="relative flex flex-col items-center text-center justify-center py-10">
                <div className='flex flex-col text-center justify-center items-center'>
                    <p className='text-lg font-semibold uppercase'>Bring your ideas to life</p>
                    <hr className="border-line4 w-20 mt-2" />
                </div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase mt-10 lg:max-w-130 lg:leading-tight'>Get started with the project today</h1>
                <div className="flex flex-col lg:flex-row gap-8 mt-5 items-center lg:mt-20">
                    <Link to='/Contact'><button className="px-8 py-4 bg-[#bcff00] uppercase text-black font-semibold">Start a Project</button></Link>
                    <div className="flex flex-col text-left">
                        <p className='text-sm text-[#bcff00]'>New Project</p>
                        <p className='text-2xl'>1 800 847 7978</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Idea
