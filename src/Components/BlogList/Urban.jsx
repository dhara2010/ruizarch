import React,{useState} from 'react'
import InfoBox from './InfoBox';
import Hero2 from './Hero2';
import { Link } from 'react-router-dom';
import InfoRight from './InfoRight';

function Urban() {
        const [activeTab, setActiveTab] = useState("Urban");
    
    return (
        <div>
            <Hero2 head={'Category: Urban'} text={'Urban'} />
            <div className='relative w-full px-4 sm:px-6 md:px-10 py-30 xl:px-28'>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                    <div className='flex flex-col gap-8 pr-0 lg:pr-10 lg:col-span-2 w-full lg:w-180'>
                        <div className="flex flex-col items-center lg:flex-row gap-8 mt-15">
                            <hr className="border-line4 w-full" />
                            <div className="flex flex-col lg:flex-row justify-between gap-6">
                                <Link to='/BlogList' onClick={() => setActiveTab("All")} className={`uppercase px-2 ${activeTab === 'All' ? 'bg-[#bcff00]  px-2' : ''}`}>All</Link>
                                <Link to='/Urban' onClick={() => setActiveTab("Urban")} className={`uppercase px-2 ${activeTab === 'Urban' ? 'bg-[#bcff00]  px-2' : ''}`}>Urban</Link>
                                <Link to='/Technology' onClick={() => setActiveTab("Technology")} className={`uppercase px-2 ${activeTab === 'Technology' ? 'bg-[#bcff00]  px-2' : ''}`}>Technology</Link>
                                <Link to='/Design' onClick={() => setActiveTab("Design")} className={`uppercase px-2 ${activeTab === 'Design' ? 'bg-[#bcff00]  px-2' : ''}`}>Design</Link>
                                <Link to='/Architecture' onClick={() => setActiveTab("Architecture")} className={`uppercase px-2 ${activeTab === 'Architecture' ? 'bg-[#bcff00]  px-2' : ''}`}>Architecture</Link>
                            </div>
                            <hr className="border-line4 w-full" />
                        </div>
                        <div className='mt-10 flex flex-col gap-8'>
                            <div className='space-y-10'>
                                <InfoBox img={"./images/projects/1.jpg"} head={'Explore new design in urbanism'} date={'02.04.2022'}/>
                                <InfoBox img={"./images/projects/3.jpg"} head={'Design a perfect home'} date={'02.04.2022'}/>
                                <InfoBox img={"./images/projects/2.jpg"} head={'Tips for Planning a Project'} date={'02.03.2022'}/>
                            </div>
                        </div>
                    </div>
                    <div className="border-line3 p-5 lg:col-span-1 lg:ml-10 h-420">
                        <InfoRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Urban
