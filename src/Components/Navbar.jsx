import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)

  const location = useLocation()
  const currentPath = location.pathname

  const homeRoutes = ["/", "/Home2", "/Home3"];
  const serviceRoutes = ["/ServiceList", "/SingleService"];
  const projectRoutes = ["/ProjectGrid", "/Projects"];
  const blogRoutes = ["/BlogList", "/The_infrasture_that_power_the_world"];
  const otherRoutes = ["/About", "/Team", "/Team_member", "/Coming_soon", "/Error"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  const handleHover = () => {
    if (openMenu) setOpenMenu(null)
  }

  return (
    <div className={`fixed left-0 w-full top-5 z-40 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-neutral-700/20"} text-white uppercase`}>
      <div className="flex items-center justify-between px-8 py-6 pt-13 border-b border-neutral-600">
        <a href="/"><img src="./images/logo-light.png" alt="" className='h-3.5 mt-6' /></a>
        <button className="xl:hidden text-white focus:outline-none mt-6 ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>
        <div className='mt-6 text-[14px] font-semibold'>
          <ul className={`xl:flex items-center gap-6 absolute xl:static top-16 left-0 w-full xl:w-auto transition-all duration-300 ease-in-out ${isOpen ? "flex flex-col items-center bg-[#bcff00] py-3 text-black" : "hidden xl:flex"}`}>
            {isOpen && (
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <li className={`group relative px-4 cursor-pointer text-center ${homeRoutes.includes(currentPath) ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}
              onClick={() => toggleSubMenu("home")}
              onMouseEnter={handleHover}
            >
              Home
              <ul className={`xl:absolute left-0 mt-2 shadow-lg sm:w-36 md:w-40 lg:w-48 text-white xl:text-black ${openMenu === "home" ? "block bg-black xl:bg-[#bcff00] text-left xl:mt-6" : "hidden group-hover:block bg-[#bcff00] text-left xl:mt-6 text-black"}`}>
                <li className="px-4 py-2 hover:translate-x-5"><Link to="/"> HomePage 1 </Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to="/Home2"> HomePage 2 </Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to="/Home3"> HomePage 3 </Link></li>
              </ul>
            </li>
            <li className={`group relative px-4 cursor-pointer text-center ${serviceRoutes.includes(currentPath) ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}
              onClick={() => toggleSubMenu("services")}
              onMouseEnter={handleHover}>
              Services
              <ul className={`xl:absolute left-0 mt-2 shadow-lg sm:w-36 md:w-40 lg:w-48 text-white xl:text-black ${openMenu === "services" ? "block bg-black xl:bg-[#bcff00] text-left xl:mt-6" : "hidden group-hover:block bg-[#bcff00] text-left xl:mt-6 text-black"}`}>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/ServiceList'> Services List</Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/SingleService'> Single Service </Link></li>
              </ul>
            </li>
            <li className={`group relative px-4 cursor-pointer text-center ${projectRoutes.includes(currentPath) ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}
              onClick={() => toggleSubMenu("projects")}
              onMouseEnter={handleHover}>
              Projects
              <ul className={`xl:absolute left-0 mt-2 shadow-lg sm:w-36 md:w-40 lg:w-48 text-white xl:text-black ${openMenu === "projects" ? "block bg-black xl:bg-[#bcff00] text-left xl:mt-6" : "hidden group-hover:block bg-[#bcff00] text-left xl:mt-6 text-black"}`}>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/ProjectGrid'>Projects Grid</Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/Projects'> Single Project</Link></li>
              </ul>
            </li>
            <li className={`group relative px-4 cursor-pointer text-center ${blogRoutes.includes(currentPath) ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}
              onClick={() => toggleSubMenu("blog")}
              onMouseEnter={handleHover}>
              Blog
              <ul className={`xl:absolute left-0 mt-2 shadow-lg sm:w-36 md:w-40 lg:w-48 text-white xl:text-black ${openMenu === "blog" ? "block bg-black xl:bg-[#bcff00] text-left xl:mt-6" : "hidden group-hover:block bg-[#bcff00] text-left xl:mt-6 text-black"}`}>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/BlogList'>Blog List</Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/The_infrasture_that_power_the_world'>Publication</Link></li>
              </ul>
            </li>
            <li className={`px-4 cursor-pointer text-center ${currentPath.includes('/Contact') ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}><Link to='/Contact'>Contact Us</Link></li>
            <li className={`group relative px-4 cursor-pointer text-center ${otherRoutes.includes(currentPath) ? 'bg-[#bcff00] text-black' : 'hover:text-[#bcff00]'}`}
              onClick={() => toggleSubMenu("other")}
              onMouseEnter={handleHover}>
              Other
              <ul className={`xl:absolute left-0 mt-2 shadow-lg sm:w-36 md:w-40 lg:w-48 text-white xl:text-black ${openMenu === "other" ? "block bg-black xl:bg-[#bcff00] text-left lg:mt-6" : "hidden group-hover:block bg-[#bcff00] text-left xl:mt-6 text-black"}`}>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/About'>About</Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/Team'>Team</Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/Team_member'>Team Member</Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/Coming_soon'>Coming Soon</Link></li>
                <li className="px-4 py-2 hover:translate-x-5"><Link to='/Error'>404</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='mt-6 ml-25 hidden xl:block'>
          <a className='bg-[#bcff00] text-black px-10 py-5 font-bold'><Link to='/Contact'>Start a Project</Link></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
