import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';

const PlanBox = ({text, price, color1,color2}) => {
        const [boxRef, isBoxVisible] = useScrollAnimation();
        const [pRef, isPVisible] = useScrollAnimation();
        const [monthRef, isMonthVisible] = useScrollAnimation();
        const [lineRef, isLineVisible] = useScrollAnimation();
        const [item1Ref, isItem1Visible] = useScrollAnimation();
        const [item2Ref, isItem2Visible] = useScrollAnimation();
        const [item3Ref, isItem3Visible] = useScrollAnimation();
        const [item4Ref, isItem4Visible] = useScrollAnimation();
        const [btnRef, isBtnVisible] = useScrollAnimation();

    return (
        <div ref={boxRef} className={`border-line2 p-5 md:p-13 lg:p-8 group transition-all duration-500 ease-in-out ${isBoxVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p ref={pRef} className={`uppercase transition-all duration-500 ease-in-out ${isPVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>{text}</p>
            <div ref={monthRef} className={`flex items-center gap-4 mt-6 transition-all duration-500 ease-in-out ${isMonthVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h5 className='font-bold text-5xl'>{price}</h5>
                <div className='flex flex-col text-sm gap-1'>
                    <p>Month</p>
                    <p>Billed Annually</p>
                </div>
            </div>
            <hr ref={lineRef} className={`hr-line2 mt-9 transition-all duration-500 ease-in-out ${isLineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}/>
            <div className="flex flex-col gap-4 mt-6">
                <div ref={item1Ref} className={`flex gap-5 items-center transition-all duration-500 ease-in-out ${isItem1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex size-10 bg-[#bcff00] rounded-full items-center justify-center" >
                        <img src="./images/11.svg" alt="" className='w-5' />
                    </div>
                    <p>Design Consulting</p>
                </div>
                <div ref={item2Ref} className={`flex gap-5 items-center transition-all duration-500 ease-in-out ${isItem2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex size-10 bg-[#bcff00] rounded-full items-center justify-center">
                        <img src="./images/11.svg" alt="" className='w-5' />
                    </div>
                    <p>Implementation</p>
                </div>
                <div ref={item3Ref} className={`flex gap-5 items-center transition-all duration-500 ease-in-out ${isItem3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex size-10 bg-gray-200 rounded-full items-center justify-center" style={{ backgroundColor: color1 }}>
                        <img src="./images/11.svg" alt="" className='w-5' />
                    </div>
                    <p>Design of Products</p>
                </div>
                <div ref={item4Ref} className={`flex gap-5 items-center transition-all duration-500 ease-in-out ${isItem4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex size-10 bg-gray-200 rounded-full items-center justify-center" style={{ backgroundColor: color2 }}>
                        <img src="./images/11.svg" alt="" className='w-5' />
                    </div>
                    <p>Product Creation</p>
                </div>
            </div>
            <Link to='/Contact'><button ref={btnRef} className={`mt-8 uppercase w-full bg-gray-200 group-hover:bg-[#bcff00] py-6 font-semibold transition-all duration-500 ease-in-out ${isBtnVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Select Now</button></Link>
        </div>
    )
}

export default PlanBox
