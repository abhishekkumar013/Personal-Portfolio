import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { CiMenuFries } from 'react-icons/ci'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  const content = (
    <div className="lg:hidden flex flex-col items-end justify-end fixed top-16 right-0 bg-slate-900 transition text-white w-[260px] h-full">
      <ul className="text-center text-xl p-20">
        <ScrollLink spy={true} smooth={true} to="Home" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Home
          </li>
        </ScrollLink>

        <ScrollLink spy={true} smooth={true} to="Education" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Education
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="Skill" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            About Us
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="Project" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Project
          </li>
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} to="Contact" onClick={closeMenu}>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Contact Us
          </li>
        </ScrollLink>
      </ul>
    </div>
  )

  return (
    <nav className="sticky top-0 z-50">
      <div className="h-14 w-full fixed flex items-center justify-between text-black lg:py-2 px-4 md:px-6 bg-indigo-200">
        <div className="flex items-center">
          <span className="text-2xl text-indigo-700 font-bold">ABHISHEK</span>
        </div>
        <div className="hidden lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
          <ul className="flex gap-5 mr-12 text-[18px] font-semibold">
            <ScrollLink spy={true} smooth={true} to="Home" onClick={closeMenu}>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
                Home
              </li>
            </ScrollLink>

            <ScrollLink
              spy={true}
              smooth={true}
              to="Education"
              onClick={closeMenu}
            >
              <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
                Education
              </li>
            </ScrollLink>
            <ScrollLink spy={true} smooth={true} to="Skill" onClick={closeMenu}>
              <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
                About Us
              </li>
            </ScrollLink>
            <ScrollLink
              spy={true}
              smooth={true}
              to="Project"
              onClick={closeMenu}
            >
              <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
                Project
              </li>
            </ScrollLink>
            <ScrollLink
              spy={true}
              smooth={true}
              to="Contact"
              onClick={closeMenu}
            >
              <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
                Contact Us
              </li>
            </ScrollLink>
          </ul>
        </div>
        <div className="block md:hidden">
          <button className="transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </div>
      {click && content}
    </nav>
  )
}

export default Navbar
