import React from 'react'
import Box from './Box'

function WorkPlace() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mt-30'>
            <Box img={"./images/group/6.jpg"} text="Trevor Virtue" desg="Vice President" />
            <Box img={"./images/group/7.jpg"} text="Eugenia Anders" desg="Business Consultant" />
        </div>
    )
}

export default WorkPlace
