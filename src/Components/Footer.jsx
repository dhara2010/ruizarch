import React from 'react'
import { useScrollAnimation } from './Home/ScrollAnimation.js'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

  const [textRef, isTextVisible] = useScrollAnimation()
  const [imgRef, isImgVisible] = useScrollAnimation()
  const [p1Ref, isP1Visible] = useScrollAnimation();
  const [div1Ref, isDiv1Visible] = useScrollAnimation();
  const [p2Ref, isP2Visible] = useScrollAnimation();
  const [div2Ref, isDiv2Visible] = useScrollAnimation();
  const [p3Ref, isP3Visible] = useScrollAnimation();
  const [div3Ref, isDiv3Visible] = useScrollAnimation();

  const location = useLocation();
  if (location.pathname === "/Error") {
    return null;
  }
  if (location.pathname === "/Coming_soon") {
    return null;
  }
  const currentPath = location.pathname

  return (
    <div className="relative w-full text-white">
      <div className="absolute inset-0">
        <img src="./images/4.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative px-6 md:px-10 lg:px-28 py-10 sm:py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-[68%_30%] gap-8 sm:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div ref={textRef} className={`transition-all duration-500 ease-in-out ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 uppercase text-xs sm:text-sm md:text-base justify-center lg:justify-start">
              <Link to='/About'><li className={`cursor-pointer font-semibold ${currentPath.includes('/About') ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}>About</li></Link>
              <Link to='/ServiceList'><li className={`cursor-pointer font-semibold ${currentPath.includes('/ServiceList') ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}>Services</li></Link>
              <Link to='/Projects'><li className={`cursor-pointer font-semibold ${currentPath.includes('/Projects') ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}>Projects</li></Link>
              <Link to='/BlogList'><li className={`cursor-pointer font-semibold ${currentPath.includes('/Blog') ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}>Blog</li></Link>
              <Link to='/Contact'><li className={`cursor-pointer font-semibold ${currentPath.includes('/Contact') ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}>Contact</li></Link>
            </ul>
            <hr className="hr-line3 lg:w-184 w-full mt-4" />
          </div>
          <div className="mt-10 flex flex-col md:flex-row w-full lg:w-180 gap-5 lg:gap-15">
            <div className='flex flex-col gap-6'>
              <div ref={div1Ref} className={`transition-all duration-500 ease-in-out ${isDiv1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h6 className='font-semibold uppercase'>Wills Point</h6>
                <hr className='border-line4 w-15 mt-2' />
              </div>
              <p ref={p1Ref} className={`text-sm leading-6 font-semibold text-neutral-400 transition-all duration-500 ease-in-out ${isP1Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>8619 S Wolcott Avenue <br /> Floor 202 <br />Chicago, IL 60620br <br />(773) 238-7162</p>
            </div>
            <div className='flex flex-col gap-6'>
              <div ref={div2Ref} className={`transition-all duration-500 ease-in-out ${isDiv2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h6 className='font-semibold uppercase'>Chicago</h6>
                <hr className='border-line4 w-15 mt-2' />
              </div>
              <p ref={p2Ref} className={`text-sm leading-6 font-semibold text-neutral-400 transition-all duration-500 ease-in-out ${isP2Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>10233 Gaillard Lake Est <br />Suite 420 <br />Houston, TX 75169 <br />(903) 560 - 9830</p>
            </div>
            <div className='flex flex-col gap-6'>
              <div ref={div3Ref} className={`transition-all duration-500 ease-in-out ${isDiv3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h6 className='font-semibold uppercase'>Harriman</h6>
                <hr className='border-line4 w-15 mt-2' />
              </div>
              <p ref={p3Ref} className={`text-sm leading-6 font-semibold text-neutral-400 transition-all duration-500 ease-in-out ${isP3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>5 Harriman Woods Dr <br />Suite 702 <br />New York, NY 10926 <br /> (570) 253-2853</p>
            </div>
            <div className='flex flex-col gap-6'>
              <div ref={div3Ref} className={`transition-all duration-500 ease-in-out ${isDiv3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h6 className='font-semibold uppercase'>Largo</h6>
                <hr className='border-line4 w-15 mt-2' />
              </div>
              <p ref={p3Ref} className={`text-sm leading-6 font-semibold text-neutral-400 transition-all duration-500 ease-in-out ${isP3Visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>1071 Donegan Rd<br />Suite 1300 <br />Florida, FL 33771 <br /> (727) 223 - 5371</p>
            </div>
          </div>
        </div>
        <div ref={imgRef} className={`flex justify-center lg:justify-end items-end self-end transition-all duration-500 ease-in-out ${isImgVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link to='/'><img src="./images/logo-light.png" alt="Logo" className="w-20 sm:w-24 md:w-32 lg:w-36" /></Link>
        </div>
      </div>
      <hr className="relative mx-3 sm:mx-6 z-10 text-neutral-100/20" />
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-6 py-4 sm:py-6 text-neutral-400 text-xs sm:text-sm md:text-base">
        <p className="text-center md:text-left">© 2023 Ruizarch. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8">
          <li className="hover:text-[#bcff00] cursor-pointer font-semibold"><a href="https://www.facebook.com/" target='_blank'></a>Facebook</li>
          <li className="hover:text-[#bcff00] cursor-pointer font-semibold"><a href="https://www.twitter.com/" target='_blank'>Twitter</a></li>
          <li className="hover:text-[#bcff00] cursor-pointer font-semibold"><a href="https://www.instagram.com/" target='_blank'>Instagram</a></li>
          <li className="hover:text-[#bcff00] cursor-pointer font-semibold"><a href="https://www.youtube.com/" target='_blank'>Youtube</a></li>
        </ul>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8">
          <li className="hover:text-[#bcff00] cursor-pointer font-semibold"><a href="#" target='_blank'>Our App</a></li>
          <li className="hover:text-[#bcff00] cursor-pointer font-semibold"><a href="#" target='_blank'>Sitemap</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
