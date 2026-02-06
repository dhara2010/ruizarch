import React from 'react'
import Img from './Img'
import { Link } from 'react-router-dom'

function Decor() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link to='/project4'><Img src={"./images/projects/3.jpg"} label={'DECORE'} head={'Casecade of Lava'} height="h-90" /></Link>
        </div >
    )
}

export default Decor
