import React from 'react'
import Hero from '../Projects/Hero'
import Overview from '../Projects/Overview'
import Prj from '../Projects/Prj'
import Thing from '../Projects/Thing'
import Resume from '../Projects/Resume'
import ImageSlider from '../SingleService/ImageSlider'

function Project3() {
    const project3img = [
        "./images/projects/4.jpg",
        "./images/projects/1.jpg",
        "./images/projects/2.jpg",
    ]
  return (
     <div>
      <Hero img={"./images/projects/2.jpg"} text1={'Industrial Factory'} text2={'Reconstruction'}/>
      <Overview/>
      <Prj/>
      <ImageSlider images={project3img}/>
      <Thing/>
      <Resume prevLink="/project2" nextLink="/project4" />
    </div>
  )
}

export default Project3
