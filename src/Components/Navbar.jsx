import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileDropdown(null);
  }, [location]);

  const activeClass = (path) =>
    currentPath === path
      ? "bg-[#bcff00] text-black px-4 py-2 rounded"
      : "hover:text-[#bcff00] transition";

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black/20"}`}>
      <div className="flex items-center justify-between px-8 xl:px-16 py-6 uppercase text-white">
        <Link to="/" className="text-2xl font-bold tracking-widest">RUIZARCH</Link>
        <ul className="hidden xl:flex items-center gap-10 text-sm font-semibold">
          <li className={activeClass("/")}><Link to="/">Home</Link></li>

          <li className="relative group">
            <span className="cursor-pointer hover:text-[#bcff00] transition">Services</span>
            <ul className="absolute left-0 top-full mt-6 w-52 bg-[#bcff00] text-black rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/ServiceList">Services List</Link></li>
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/SingleService">Single Service</Link></li>
            </ul>
          </li>

          <li className="relative group">
            <span className="cursor-pointer hover:text-[#bcff00] transition"> Projects </span>
            <ul className="absolute left-0 top-full mt-6 w-52 bg-[#bcff00] text-black rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/ProjectGrid">Projects Grid</Link></li>
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"> <Link to="/Projects">Single Project</Link> </li>
            </ul>
          </li>

          <li className="relative group">
            <span className="cursor-pointer hover:text-[#bcff00] transition">Blog</span>
            <ul className="absolute left-0 top-full mt-6 w-52 bg-[#bcff00] text-black rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/BlogList">Blog List</Link></li>
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/The_infrasture_that_power_the_world">Publication</Link></li>
            </ul>
          </li>

          <li className={activeClass("/Contact")}><Link to="/Contact">Contact Us</Link></li>

          <li className="relative group">
            <span className="cursor-pointer hover:text-[#bcff00] transition">Other</span>
            <ul className="absolute left-0 top-full mt-6 w-52 bg-[#bcff00] text-black rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/About">About</Link></li>
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/Team">Team</Link></li>
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/Team_member">Team Member</Link></li>
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/Coming_soon">Coming Soon</Link></li>
              <li className="px-5 py-3 hover:bg-black hover:text-white transition"><Link to="/Error">404</Link></li>
            </ul>
          </li>
        </ul>
        <div className="hidden xl:block">
          <Link to="/Contact" className="bg-[#bcff00] text-black px-8 py-4 font-bold tracking-wide hover:scale-105 transition duration-300">START A PROJECT</Link>
        </div>
        <button className="xl:hidden text-2xl" onClick={() => setIsOpen(!isOpen)} >{isOpen ? "✕" : "☰"}</button>
      </div>
      {isOpen && (
        <div className="xl:hidden bg-black text-white flex flex-col px-4 justify-between space-y-6 py-6 uppercase font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <div>
            <button onClick={() => toggleMobileDropdown("services")} className="flex justify-between w-full uppercase" >Services
              <span>{mobileDropdown === "services" ? "-" : "+"}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === "services" ? "max-h-40 mt-3" : "max-h-0 "}`} >
              <div className="flex flex-col space-y-3 pl-4 text-sm">
                <Link to="/ServiceList">Services List</Link>
                <Link to="/SingleService">Single Service</Link>
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => toggleMobileDropdown("projects")} className="flex justify-between w-full uppercase" > Projects
              <span>{mobileDropdown === "projects" ? "-" : "+"}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === "projects" ? "max-h-40 mt-3" : "max-h-0"}`} >
              <div className="flex flex-col space-y-3 pl-4 text-sm">
                <Link to="/ProjectGrid">Projects Grid</Link>
                <Link to="/Projects">Single Project</Link>
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => toggleMobileDropdown("blog")} className="flex justify-between w-full uppercase" > Blog
              <span>{mobileDropdown === "blog" ? "-" : "+"}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === "blog" ? "max-h-40 mt-3" : "max-h-0"}`} >
              <div className="flex flex-col space-y-3 pl-4 text-sm">
                <Link to="/BlogList">BlogList</Link>
                <Link to="/The_infrasture_that_power_the_world">Publication</Link>
              </div>
            </div>
          </div>
          <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
