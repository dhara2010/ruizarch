import React from 'react'
import PlanningBox from './PlanningBox';

function Planning() {
    return (
        <div className="bg-purple-200/50">
            <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28 z-10'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <PlanningBox head={'Perfect Planning'}/>
                    <PlanningBox head={'Professional Design'}/>
                    <PlanningBox head={'Best Experts Team'}/>
                </div>
            </div>
        </div>
    )
}

export default Planning
