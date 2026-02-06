import React from 'react'
import ImagesBox from './ImagesBox'
import { useScrollAnimation } from './ScrollAnimation';


const Images = () => {
        const [imgRef, isImgVisible] = useScrollAnimation();
    
    return (
        <div className='relative mx-7 z-10'>
            <div ref={imgRef} className={`grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className='flex flex-col item-center gap-7'>
                    <ImagesBox src="./images/img1.jpg" text={'Interior design studio'} height={'300px'} link={'/Projects'}/>
                    <ImagesBox src="./images/img2.jpg" text={'city house'} height={'300px'}  link={'/Project2'}/>
                </div>
                <ImagesBox src="./images/img3.jpg" text={'kemia industrial factory'} height={'628px'}  link={'/Project3'}/>
                <div className="flex flex-col item-center gap-7">
                    <ImagesBox src="./images/img4.jpg" text={'cascade of lava'} height={'300px'}  link={'/Project4'}/>
                    <ImagesBox src="./images/img5.jpg" text={'smart house by molekule'} height={'300px'}  link={'/Project5'}/>
                </div>
                <ImagesBox src="./images/img6.jpg" text={"tony's chocolonely"} height={'628px'}  link={'/Project6'}/>
            </div>
        </div>
    )
}

export default Images
