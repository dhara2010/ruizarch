import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Prj from './Prj'
import ImageSlider from '../SingleService/ImageSlider'
import Thing from './Thing'
import Resume from './Resume'

function Projects() {
  return (
    <div>
      <Hero img={"./images/projects/8.jpg"} text1={'Interior Design'} text2={'Studio'}/>
      <Overview/>
      <Prj/>
      <ImageSlider/>
      <Thing/>
      <Resume prevLink="/project8" nextLink="/Project2" />
    </div>
  )
}

export default Projects
