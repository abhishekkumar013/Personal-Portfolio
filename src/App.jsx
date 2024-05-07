import React from 'react'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Project from './components/Project'
import TechStack from './components/TechStack'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './Trail/Navbar'

const App = () => {
  return (
    <div className="bg-slate-900 ">
      {/* <Navbar /> */}
      <Navbar />
      <Hero id="Home" />
      <Education id="Education" />
      <TechStack id="Skill" />
      <Project id="Project" />
      <Contact id="Contact" />
      <Footer />
      {/* <Skill /> */}
    </div>
  )
}

export default App
