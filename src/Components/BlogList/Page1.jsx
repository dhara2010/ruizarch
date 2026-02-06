import React from 'react'
import InfoBox from './InfoBox'
import { Link } from 'react-router-dom'

function Page1() {
    return (
        <div className=' flex flex-col gap-8'>
            <Link to='/Explore_new_design_urbanism'><InfoBox img={"./images/projects/1.jpg"} head={'Explore new design in urbanism'} date={'02.04.2022'}/></Link>
            <Link to='/Design_a_perfect_home'><InfoBox img={"./images/projects/3.jpg"} head={'Design a perfect home'} date={'02.04.2022'}/></Link>
            <Link to='/Tips_for_a_planning_project'><InfoBox img={"./images/projects/2.jpg"} head={'Tips for Planning a Project'} date={'02.03.2022'}/></Link>
            <Link to='/New_construction_and_interior_designer_idea'><InfoBox img={"./images/projects/7.jpg"} head={'New Construction and interior design idea'} date={'02.03.2022'}/></Link>
            <Link to='/Modern_architectural_design'><InfoBox img={"./images/projects/8.jpg"} head={'Modern Architectural Design'} date={'02.02.2022'}/></Link>
            <Link to='/Design_with_community_in_mind'><InfoBox img={"./images/projects/1.jpg"} head={'Design with community in mind'} date={'02.02.2022'}   /></Link>
        </div>
    )
}

export default Page1
