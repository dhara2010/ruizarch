import React from 'react'
import InfoBox from './InfoBox'
import { Link } from 'react-router-dom'

function Page2() {
    return (
        <div className=' flex flex-col gap-8'>
            <Link to='/The_office_renaissance'><InfoBox img={"./images/projects/4.jpg"} head={'The office renaissance'} date={'02.01.2022'}/></Link>
            <Link to='/The_infrasture_that_power_the_world'><InfoBox img={"./images/projects/2.jpg"} head={'The Infrastructure That Powers The World'} date={'02.01.2022'}/></Link>
        </div>
    )
}

export default Page2
