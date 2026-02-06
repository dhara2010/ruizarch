import React from 'react'
import { useScrollAnimation } from '../Home/ScrollAnimation';
import { Link } from 'react-router-dom';
import Tips_for_a_planning_project from './Tips_for_a_planning_project';

function InfoRight() {

    const [p1Ref, isp1Visible] = useScrollAnimation();
    const [p2Ref, isp2Visible] = useScrollAnimation();
    const [p3Ref, isp3Visible] = useScrollAnimation();
    const [p4Ref, isp4Visible] = useScrollAnimation();
    const [p5Ref, isp5Visible] = useScrollAnimation();
    const [divRef, isdivVisible] = useScrollAnimation();
    const [p6Ref, isp6Visible] = useScrollAnimation();
    const [div2Ref, isdiv2Visible] = useScrollAnimation();
    const [div3Ref, isdiv3Visible] = useScrollAnimation();
    const [div4Ref, isdiv4Visible] = useScrollAnimation();
    const [div5Ref, isdiv5Visible] = useScrollAnimation();
    const [div6Ref, isdiv6Visible] = useScrollAnimation();
    const [box1Ref, isBox1Visible] = useScrollAnimation();
    const [box2Ref, isBox2Visible] = useScrollAnimation();
    const [box3Ref, isBox3Visible] = useScrollAnimation();
    const [box4Ref, isBox4Visible] = useScrollAnimation();

  return (
     <div className="flex flex-col gap-8">
            <p ref={p1Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isp1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Media Info</p>
            <div ref={divRef} className={`transition-all duration-500 ease-in-out ${isdivVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <p className='text-sm'>media@ruizarch.com</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <p className='text-sm'>authors@ruizarch.com</p>
                </div>
                <hr className="border-line4 mt-8" />
            </div>
            <div>
                <div className='flex items-center border border-gray-300 w-62 lg:w-72'>
                    <input type="text" placeholder='Search in blog...' className='flex-1 px-4 outline-none' />
                    <button className='bg-[#bcff00] -ml-4 lg:ml-0 px-3 py-3 lg:px-6 lg:py-6 flex items-center justify-center'>
                        <i className="fa-solid fa-magnifying-glass text-xl text-black"></i>
                    </button>
                </div>
                <hr className="border-line4 mt-8" />
            </div>
            <p ref={p2Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isp2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Recent Posts</p>
            <div ref={div2Ref} className={`transition-all duration-500 ease-in-out ${isdiv2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <Link to='/Explore_new_design_urbanism' ><p className="leading-loose text-sm">Explore new design in urbanism</p></Link>
                    </div>
                    <p className='text-gray-400 text-[12px] ml-5'>02.04.2022</p>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <Link to='/Design_a_perfect_home'><p className="leading-loose text-sm">Design a perfect home</p></Link>
                    </div>
                    <p className='text-gray-400 text-[12px] ml-5'>02.04.2022</p>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <Link to='/Tips_for_a_planning_project'><p className="leading-loose text-sm">Tips for Planning a Project</p></Link>
                    </div>
                    <p className='text-gray-400 text-[12px] ml-5'>02.03.2022</p>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-3">
                        <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                        <Link to='/New_construction_and_interior_designer_idea'><p className="leading-loose text-sm">New Construction and interior design idea</p></Link>
                    </div>
                    <p className='text-gray-400 text-[12px] ml-5'>02.03.2022</p>
                </div>
                <hr className="border-line4 mt-8" />
            </div>
            <p ref={p3Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isp3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Archives</p>
            <div ref={div3Ref} className={`transition-all duration-500 ease-in-out ${isdiv3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/April_2022'><p className='text-sm'>April, 2022</p></Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/March_2022'><p className='text-sm'>March, 2022</p></Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/February_2022'><p className='text-sm'>February, 2022</p></Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/January_2022'><p className='text-sm'>January, 2022</p></Link>
                </div>
                <hr className="border-line4 mt-8" />
            </div>
            <p ref={p4Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isp4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Tags</p>
            <div ref={div4Ref} className={`transition-all duration-500 ease-in-out ${isdiv4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/Ui'><p className='text-sm'>UI</p></Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/Development'><p className='text-sm'>Development</p></Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/Design2'><p className='text-sm'>Design</p></Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/Construction'><p className='text-sm'>Construction</p></Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <Link to='/Brandding'><p className='text-sm'>Branding</p></Link>
                </div>
                <hr className="border-line4 mt-8" />
            </div>
            <p ref={p5Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isp5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Authors</p>
            <div ref={div5Ref} className={`space-y-2 transition-all duration-500 ease-in-out ${isdiv5Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div ref={box1Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <img src="./images/Blog/5.jpg" alt="" className='w-10 rounded-full' />
                    <Link to='/TemzyFrench'><p className='text-sm'>Tamzyn French</p></Link>
                </div>
                <div ref={box2Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <img src="./images/Blog/2.jpg" alt="" className='w-10 rounded-full' />
                     <Link to='/Peter'><p className='text-sm'>Peter Stanbridge</p></Link>
                </div>
                <div ref={box3Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <img src="./images/Blog/4.jpg" alt="" className='w-10 rounded-full' />
                     <Link to='/Nguta'><p className='text-sm'>Nguta Ithya</p></Link>
                </div>
                <div ref={box4Ref} className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isBox4Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <img src="./images/Blog/3.jpg" alt="" className='w-10 rounded-full' />
                     <Link to='/Charlie'><p className='text-sm'>Charlie Williams</p></Link>
                </div>
                <hr className="border-line4 mt-8" />
            </div>
            <p ref={p6Ref} className={`uppercase font-bold transition-all duration-500 ease-in-out ${isp6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Social Media</p>
            <div ref={div6Ref} className={`transition-all duration-500 ease-in-out ${isdiv6Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <p className='text-sm'><a href="https://www.facebook.com/" target='_blank'>Facebook</a></p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <p className='text-sm'><a href="https://x.com/" target='_blank'>Twitter</a></p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <p className='text-sm'><a href="https://www.instagram.com/" target='_blank'>Instagram</a></p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="size-1.5 border border-black bg-[#bcff00] rotate-45"></div>
                    <p className='text-sm'><a href="https://www.youtube.com/" target='_blank'>Youtube</a></p>
                </div>
            </div>
        </div>
  )
}

export default InfoRight
