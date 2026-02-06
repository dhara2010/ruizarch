import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'

function Architecture() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link to='/projects'><Img src={"./images/projects/1.jpg"} label={'ARCHITECTURE'} head={'INTERIOR DESIGN STUDIO'} height="h-130" /></Link>
            <Link to='/project2'><Img src={"./images/projects/2.jpg"} label={'ARCHITECTURE'} head={'City House'} height="h-90" /></Link>
            <img></img>
            <Link to='/project3'><Img src={"./images/projects/4.jpg"} label={'ARCHITECTURE'} head={'Kemia Industrial Factory'} height="h-130 lg:-mt-40" /></Link>
        </div>
    )
}

export default Architecture
