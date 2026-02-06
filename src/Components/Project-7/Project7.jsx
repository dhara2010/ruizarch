import React from 'react'
import Hero from '../Projects/Hero'
import Overview from '../Projects/Overview'
import Prj from '../Projects/Prj'
import Thing from '../Projects/Thing'
import Resume from '../Projects/Resume'
import ImageSlider from '../SingleService/ImageSlider'

function Project7() {
    const project7img = [
        "./images/projects/4.jpg",
        "./images/projects/1.jpg",
        "./images/projects/2.jpg",
    ]
  return (
     <div>
      <Hero img={"./images/projects/7.jpg"} text1={'Technology Company'} text2={'Construction'}/>
      <Overview/>
      <Prj/>
      <ImageSlider images={project7img}/>
      <Thing/>
      <Resume prevLink="/project6" nextLink="/project8" />
    </div>
  )
}

export default Project7
