import React from 'react'
import Box from './Box'

function Executive() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mt-30'>
            <Box img={"./images/group/1.jpg"} text="Charlie Williams" desg="Project Manager" />
            <Box img={"./images/group/8.jpg"} text="Audrey Miller" desg="Backend Developer" />
        </div>
    )
}

export default Executive
