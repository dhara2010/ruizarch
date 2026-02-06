import React from 'react'
import Box from './Box'

function All() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:mt-30'>
            <Box img={"./images/group/1.jpg"} text="Charlie Williams" desg="Project Manager"/>
            <Box img={"./images/group/2.jpg"} text="Peter Stanbridge" desg="Designer"/>
            <Box img={"./images/group/3.jpg"} text="Nguta Ithya" desg="President"/>
            <Box img={"./images/group/4.jpg"} text="Tamzyn French" desg="Seo Specialist"/>
            <Box img={"./images/group/5.jpg"} text="Salome Simoes" desg="Designer"/>
            <Box img={"./images/group/6.jpg"} text="Trevor Virtue" desg="Vice President"/>
            <Box img={"./images/group/7.jpg"} text="Eugenia Anders" desg="Business Consultant"/>
            <Box img={"./images/group/8.jpg"} text="Audrey Miller" desg="Backend Developer"/>
            <Box img={"./images/group/9.jpg"} text="Verona Blair" desg="Front Developer"/>
            <Box img={"./images/group/10.jpg"} text="Jane Meldrum" desg="Full Stack Developer"/>
            <Box img={"./images/group/11.jpg"} text="Maureen Smith" desg="UI/UX Designer"/>
            <Box img={"./images/group/12.jpg"} text="Desiree Burch" desg="Manager"/>
        </div>
    )
}

export default All
