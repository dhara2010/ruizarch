import React from 'react'
import Box from './Box'

const DataCenter = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mt-30'>
            <Box img={"./images/group/2.jpg"} text="Peter Stanbridge" desg="Designer" />
        </div>
    )
}

export default DataCenter
