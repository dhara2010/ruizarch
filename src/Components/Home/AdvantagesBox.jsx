import React from 'react'

const AdvantagesBox = ({title}) => {
    return (
        <div className='flex flex-col item-center gap-6 group text-center mt-10'>
            <h1 className='text-2xl font-bold uppercase'>{title}</h1>
            <div className='flex items-center justify-center'>
                <hr className="hr-line2" />
                <div className='border-line3 p-4'>
                    <img src="./images/6.svg" alt="" />
                </div>
                <hr className="hr-line2" />
            </div>
            <p className='max-w-sm text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    )
}

export default AdvantagesBox
