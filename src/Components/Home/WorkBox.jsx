import React from 'react'

const WorkBox = ({img, head}) => {
    return (
        <div className="flex flex-col group">
            <div className="flex">
                <hr className="hr-line2" style={{ width: '250px' }} />
                <div className="border-line3">
                    <img src={img} alt="" className='p-4' />
                </div>
            </div>
            <div className="flex-flex-col p-7">
                <h1 className='text-2xl font-bold uppercase'>{head}</h1>
                <hr className="hr-line2 mt-2" />
                <p className='text-neutral-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua.</p>
            </div>
        </div>
    )
}

export default WorkBox
