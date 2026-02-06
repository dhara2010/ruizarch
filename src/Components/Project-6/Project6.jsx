import React from 'react'
import Hero from '../Projects/Hero'
import Overview from '../Projects/Overview'
import Prj from '../Projects/Prj'
import Thing from '../Projects/Thing'
import Resume from '../Projects/Resume'
import ImageSlider from '../SingleService/ImageSlider'

function Project6() {
    const project6img = [
        "./images/projects/3.jpg",
        "./images/projects/1.jpg",
        "./images/projects/2.jpg",
    ]
  return (
     <div>
      <Hero img={"./images/projects/6.jpg"} text1={"Tony's Chocolonely"} text2={'Factory'}/>
      <Overview/>
      <Prj/>
      <ImageSlider images={project6img}/>
      <Thing/>
      <Resume prevLink="/project5" nextLink="/project7" />
    </div>
  )
}

export default Project6
