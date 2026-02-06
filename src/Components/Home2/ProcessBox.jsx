import React from 'react'

const ProcessBox = ({head}) => {
    return (
        <div className="flex flex-col gap-7 group">
            <div className="flex items-center gap-5">
                <div className="border-line3">
                    <img src="./images/11.svg" alt="" className='p-4' />
                </div>
                <div className="hr-line2" style={{ width: '250px' }}></div>
            </div>
            <h4 className='font-bold text-2xl uppercase'>{head}</h4>
            <p className='text-neutral-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.</p>
        </div>
    )
}

export default ProcessBox
