import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'

function Interior() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link to='/project5'><Img src={"./images/projects/5.jpg"} label={'INTERIOR'} head={'Smart house by molekule'} height="h-130" /></Link>
            <Link to='/project6'><Img src={"./images/projects/6.jpg"} label={'INTERIOR'} head={"Toy's Chocolonely"} height="h-90" /></Link>
            <Link to='/project8'><Img src={"./images/projects/7.jpg"} label={'INTERIOR'} head={'Dental Clinic'} height="h-90" /></Link>
            <Link to='/project7'><Img src={"./images/projects/8.jpg"} label={'INTERIOR'} head={'Confidential Technology'} height="h-130 lg:-mt-40" /></Link>
        </div >
    )
}

export default Interior
