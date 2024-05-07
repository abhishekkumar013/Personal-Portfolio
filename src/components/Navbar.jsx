import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="w-full h-14 fixed top-0 z-10 bg-indigo-200 flex justify-between items-center px-4 md:px-6 ">
      <div className="text-2xl text-indigo-700 font-bold">ABHISHEK</div>
      <ul className="md:flex hidden font-semibold hiden">
        <Link to="Home">
          <li className="mx-[10px] cursor-pointer">Home</li>
        </Link>
        <Link to="About">
          <li className="mx-[10px] cursor-pointer">About Us</li>
        </Link>
        <Link to="Education">
          <li className="mx-[10px] cursor-pointer">Education</li>
        </Link>
        <Link to="Project">
          <li className="mx-[10px] cursor-pointer">Project</li>
        </Link>
        <Link to="Contact">
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </Link>
      </ul>
      <div className="md:hidden">
        <button className="text-4xl" onClick={toggleMenu}>
          &#8801;
        </button>
      </div>
    </div>
  )
}

export default Navbar
