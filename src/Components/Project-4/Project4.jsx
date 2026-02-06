import React from 'react'
import Hero from '../Projects/Hero'
import Overview from '../Projects/Overview'
import Prj from '../Projects/Prj'
import Thing from '../Projects/Thing'
import Resume from '../Projects/Resume'
import ImageSlider from '../SingleService/ImageSlider'

function Project4() {
    const project4img = [
        "./images/projects/5.jpg",
        "./images/projects/1.jpg",
        "./images/projects/2.jpg",
    ]
  return (
     <div>
      <Hero img={"./images/projects/4.jpg"} text1={'Cascade of Lava'} text2={'Decor'}/>
      <Overview/>
      <Prj/>
      <ImageSlider images={project4img}/>
      <Thing/>
      <Resume prevLink="/project3" nextLink="/project5" />
    </div>
  )
}

export default Project4
