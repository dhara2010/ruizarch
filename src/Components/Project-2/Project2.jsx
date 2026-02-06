import React from 'react'
import Hero from '../Projects/Hero'
import Overview from '../Projects/Overview'
import Prj from '../Projects/Prj'
import Thing from '../Projects/Thing'
import Resume from '../Projects/Resume'
import ImageSlider from '../SingleService/ImageSlider'

function Project2() {

    const project2img = [
        "./images/projects/2.jpg",
        "./images/projects/1.jpg",
        "./images/projects/4.jpg",
    ]
  return (
     <div>
      <Hero img={"./images/projects/2.jpg"} text1={'City House'} text2={'Construction'}/>
      <Overview/>
      <Prj/>
      <ImageSlider images={project2img}/>
      <Thing/>
      <Resume prevLink="/projects" nextLink="/project3" />
    </div>
  )
}

export default Project2
