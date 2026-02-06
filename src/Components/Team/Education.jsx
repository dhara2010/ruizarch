import React from 'react'
import Box from './Box'

function Education() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mt-30'>
            <Box img={"./images/group/3.jpg"} text="Nguta Ithya" desg="President"/>
            <Box img={"./images/group/4.jpg"} text="Tamzyn French" desg="Seo Specialist"/>
            <Box img={"./images/group/5.jpg"} text="Salome Simoes" desg="Designer"/>
        </div>
    )
}

export default Education
