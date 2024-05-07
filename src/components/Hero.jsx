import React from 'react'
import image from '../assets/stylish.jpg'
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Fade'
import resume from '../assets/Abhishek_kr_cv.pdf'
import { Link } from 'react-router-dom'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const Hero = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row items-center justify-center bg-gray-800 text-white py-12 px-4 md:h-[885px] h-full"
    >
      {/* Left side text */}
      <div className="md:w-1/2 md:pr-82">
        <Fade right>
          <h2 className=" text-2xl md:text-4xl font-bold mb-1 md:mb-4">
            Hi 👋 I'm a
          </h2>
          <h1 className="text-yellow-400  text-2xl md:text-4xl font-bold mb-4">
            <Typewriter
              options={{
                strings: [
                  'React Developer !',
                  'NodeJs Developer !',
                  'Full Stack Developer !',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Fade>
        <Fade bottom>
          <div className="home-buttons mt-9 md:mt-20 ">
            <Link
              className="btn btn-hire bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-white hover:text-blue-500 hover:w-200 transition duration-1000"
              to="https://api.whatsapp.com/send?phone=7079268022"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </Link>
            <a
              className="btn btn-cv bg-orange-500 text-white px-4 py-2 rounded hover:opacity-80 transition duration-1000
"
              href={resume}
              download="abhishek.pdf"
            >
              My Resume
            </a>
          </div>
        </Fade>
      </div>

      <div className="md:w-1/3 mt-4 mb-5 md:mt-0 overflow-hidden">
        <img
          src={image}
          alt="Hero Image"
          className="md:w-full h-[250px] md:h-full rounded-full md:rounded-2xl hover:opacity-80  hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="absolute bottom-[50px] hidden md:block md:bottom-[70px]">
        <ArrowDownwardIcon />
      </div>
    </div>
  )
}

export default Hero
