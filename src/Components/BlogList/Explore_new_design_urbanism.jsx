import React from 'react'
import Hero3 from './Hero3'
import InfoRight from './InfoRight'
import LeftCnt from './LeftCnt'
import BottomCnt from './BottomCnt'

function Explore_new_design_urbanism() {
  return (
    <div>
      <Hero3 img={"./images/Projects/1.jpg"} h1="Explore new" h2="design " h3="in urbanism" />
      <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28'>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
          <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2 w-full lg:w-170'>
              <LeftCnt/>
          </div>
          <div className="border-line3 p-5 lg:col-span-1 lg:ml-10 h-420 sm:mt-10">
            <InfoRight />
          </div>
        </div>
      </div>
      <BottomCnt/>
    </div>
  )
}

export default Explore_new_design_urbanism
