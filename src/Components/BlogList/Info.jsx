import React, { useState, useEffect  } from 'react'
import InfoLeft from './InfoLeft';
import InfoRight from './InfoRight';

function Info() {
const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
    return (
        <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28'>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2 w-full lg:w-180'>
                    <InfoLeft currentPage={currentPage}/>
                </div>
                <div className="border-line3 p-5 lg:col-span-1 lg:ml-10 h-420">
                    <InfoRight />
                </div>
            </div>
            <hr className="border-line4 w-full my-8 lg:my-20" />
            <div className="flex flex-col lg:flex-row lg:justify-between items-center font-semibold">
                <div className='gap-10 flex'>
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)} className='disabled:opacity-50'>Prev</button>
                    <div className="border-line4 h-8"></div>
                    <button disabled={currentPage === 2} onClick={() => setCurrentPage(2)} className='disabled:opacity-50'>Next</button>
                </div>
                <div className='gap-10 flex'>
                    <button className={currentPage === 1 ? "bg-[#bcff00] px-3" : ""} onClick={() => setCurrentPage(1)}>1</button>
                    <button className={currentPage === 2 ? "bg-[#bcff00] px-3" : ""} onClick={() => setCurrentPage(2)}>2</button>
                </div>
            </div>
        </div>
    )
}

export default Info
