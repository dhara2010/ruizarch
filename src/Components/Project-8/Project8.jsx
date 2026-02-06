import React from 'react'
import Hero from '../Projects/Hero'
import Overview from '../Projects/Overview'
import Prj from '../Projects/Prj'
import Thing from '../Projects/Thing'
import Resume from '../Projects/Resume'
import ImageSlider from '../SingleService/ImageSlider'

function Project8() {
    const project8img = [
        "./images/projects/2.jpg",
        "./images/projects/1.jpg",
        "./images/projects/3.jpg",
    ]
    return (
        <div>
            <Hero img={"./images/projects/8.jpg"} text1={'Dental Clinic'} text2={'Construction'} />
            <Overview />
            <Prj />
            <ImageSlider images={project8img} />
            <Thing />
            <Resume prevLink="/project7" nextLink="/projects" />
        </div>
    )
}

export default Project8
