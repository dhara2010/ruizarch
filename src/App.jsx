import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import Home2 from './Components/Home2/Home2'
import Home3 from './Components/Home3/Home3'
import ServiceList from './Components/ServiceList/ServiceList'
import SingleService from './Components/SingleService/SingleService'
import ProjectGrid from './Components/ProjectGrid/ProjectGrid'
import Projects from './Components/Projects/Projects'
import Project2 from './Components/Project-2/Project2'
import Project3 from './Components/Project-3/Project3'
import Project4 from './Components/Project-4/Project4'
import Project5 from './Components/Project-5/Project5'
import Project6 from './Components/Project-6/Project6'
import Project7 from './Components/Project-7/Project7'
import Project8 from './Components/Project-8/Project8'
import BlogList from './Components/BlogList/BlogList'
import Urban from './Components/BlogList/Urban'
import Technology from './Components/BlogList/Technology'
import Design from './Components/BlogList/Design'
import Architecture from './Components/BlogList/Architecture'
import Footer from './Components/Footer'
import SideNavbar from './Components/SideNavbar'
import ScrollToTop from './ScrollToTop';
import TemzyFrench from './Components/BlogList/TemzyFrench';
import Nguta from './Components/BlogList/Nguta';
import Peter from './Components/BlogList/Peter';
import Charlie from './Components/BlogList/Charlie';
import Explore_new_design_urbanism from './Components/BlogList/Explore_new_design_urbanism';
import Design_a_perfect_home from './Components/BlogList/Design_a_perfect_home';
import Tips_for_a_planning_project from './Components/BlogList/Tips_for_a_planning_project';
import New_construction_and_interior_designer_idea from './Components/BlogList/New_contruction_and_interior_designer_idea';
import Modern_architectural_design from './Components/BlogList/Modern_architectural_design';
import Design_with_community_in_mind from './Components/BlogList/Design_with_community_in_mind';
import The_office_renaissance from './Components/BlogList/The_office_renaissance';
import The_infrasture_that_power_the_world from './Components/BlogList/The_infrasture_that_power_the_world';
import Ui from './Components/BlogList/Tag/Ui';
import Development from './Components/BlogList/Tag/Development';
import Design2 from './Components/BlogList/Tag/Design';
import Construction from './Components/BlogList/Tag/Construction';
import Brandding from './Components/BlogList/Tag/Brandding';
import April_2022 from './Components/BlogList/Archives/April_2022';
import March_2022 from './Components/BlogList/Archives/March_2022';
import February_2022 from './Components/BlogList/Archives/February_2022';
import January_2022 from './Components/BlogList/Archives/January_2022';
import Error from './Components/Error/Error';
import Coming_soon from './Components/Coming_soon/Coming_soon';
import Team_member from './Components/TeamMember/Team_member';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() {


  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <SideNavbar />
        <div className='relative'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home2" element={<Home2 />} />
            <Route path="/Home3" element={<Home3 />} />
            <Route path="/ServiceList" element={<ServiceList />} />
            <Route path="/SingleService" element={<SingleService />} />
            <Route path="/ProjectGrid" element={<ProjectGrid />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Project2" element={<Project2 />} />
            <Route path="/Project3" element={<Project3 />} />
            <Route path="/Project4" element={<Project4 />} />
            <Route path="/Project5" element={<Project5 />} />
            <Route path="/Project6" element={<Project6 />} />
            <Route path="/Project7" element={<Project7 />} />
            <Route path="/Project8" element={<Project8 />} />
            <Route path="/BlogList" element={<BlogList />} />
            <Route path="/Urban" element={<Urban />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Architecture" element={<Architecture />} />
            <Route path="/TemzyFrench" element={<TemzyFrench/>} />
            <Route path="/Nguta" element={<Nguta/>} />
            <Route path="/Peter" element={<Peter/>} />
            <Route path="/Charlie" element={<Charlie/>} />
            <Route path="/Explore_new_design_urbanism" element={<Explore_new_design_urbanism/>} />
            <Route path="/Design_a_perfect_home" element={<Design_a_perfect_home/>} />
            <Route path="/Tips_for_a_planning_project" element={<Tips_for_a_planning_project/>} />
            <Route path="/New_construction_and_interior_designer_idea" element={<New_construction_and_interior_designer_idea/>} />
            <Route path="/Modern_architectural_design" element={<Modern_architectural_design/>} />
            <Route path="/Design_with_community_in_mind" element={<Design_with_community_in_mind/>} />
            <Route path="/The_office_renaissance" element={<The_office_renaissance/>} />
            <Route path="/The_infrasture_that_power_the_world" element={<The_infrasture_that_power_the_world/>} />
            <Route path="/Ui" element={<Ui/>} />
            <Route path="/Development" element={<Development/>} />
            <Route path="/Design2" element={<Design2/>} />
            <Route path="/Construction" element={<Construction/>} />
            <Route path="/Brandding" element={<Brandding/>} />
            <Route path="/April_2022" element={<April_2022/>} />
            <Route path="/March_2022" element={<March_2022/>} />
            <Route path="/February_2022" element={<February_2022/>} />
            <Route path="/January_2022" element={<January_2022/>} />
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Team" element={<Team/>}/>
            <Route path="/Team_member" element={<Team_member/>}/>
            <Route path="/Coming_soon" element={<Coming_soon/>}/>
            <Route path="/Error" element={<Error/>}/>
          </Routes>
        <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
