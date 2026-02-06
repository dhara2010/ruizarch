import React from 'react'
import Hero from '../Projects/Hero'
import Overview from '../Projects/Overview'
import Prj from '../Projects/Prj'
import Thing from '../Projects/Thing'
import Resume from '../Projects/Resume'
import ImageSlider from '../SingleService/ImageSlider'

function Project5() {
    const project5img = [
        "./images/projects/7.jpg",
        "./images/projects/1.jpg",
        "./images/projects/2.jpg",
    ]
  return (
     <div>
      <Hero img={"./images/projects/5.jpg"} text1={'Smart House'} text2={'Interior'}/>
      <Overview/>
      <Prj/>
      <ImageSlider images={project5img}/>
      <Thing/>
      <Resume prevLink="/project4" nextLink="/project6" />
    </div>
  )
}

export default Project5
