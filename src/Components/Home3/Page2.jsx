import React from 'react'

const Page2 = () => {
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-32 lg:px-28'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="flex flex-col group gap-5">
                    <div className="flex">
                        <div className="border-line3 p-4">
                            <img src="./images/4.svg" alt="" className='group-hover:scale-110'/>
                        </div>
                    </div>
                    <h2 className="text-2xl uppercase font-semibold">Creativity</h2>
                    <p className='text-neutral-500'>The high creativity in our work staff, that makes us the best in finding solutions with great ideas for our clients.</p>
                </div>
                <div className="flex flex-col group gap-5">
                    <div className="flex">
                        <div className="border-line3 p-4">
                            <img src="./images/9.svg" alt="" className='group-hover:scale-110'/>
                        </div>
                    </div>
                    <h2 className="text-2xl uppercase font-semibold">Technology</h2>
                    <p className='text-neutral-500'>Our experts design, develop and search for the best and newest tools to achieve the objectives of each project.</p>
                </div>
                <div className="flex flex-col group gap-5">
                    <div className="flex">
                        <div className="border-line3 p-4">
                            <img src="./images/5.svg" alt="" className='group-hover:scale-110'/>
                        </div>
                    </div>
                    <h2 className="text-2xl uppercase font-semibold">Sustainability</h2>
                    <p className='text-neutral-500'>The challenge of the future is coexistence with the environment, our strategy in each project is to achieve that goal.</p>
                </div>
            </div>
        </div>
    )
}

export default Page2
