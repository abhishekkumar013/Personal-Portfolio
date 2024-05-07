import React from 'react'
import doctorimg from '../assets/doc.png'
import ecomm from '../assets/ecomm.png'
import jobsek from '../assets/job.png'
import { Navigate } from 'react-router-dom'

const projectdata = [
  {
    id: 1,
    url: ecomm,
    title: 'Ecommerce Website',
    description:
      'Developed an e-commerce platform allowing shopkeepers to register, list products, and buyers to create accounts, make purchases, and add items to their carts. Utilized React, Node.js, Express.js, MongoDB, and CSS, implementing security measures via cookies and JSON Web Tokens.',
    navigate: 'https://github.com/abhishekkumar013/E-commerce',
  },
  {
    id: 2,
    url: doctorimg,
    title: 'Doctor Appointment System',
    description:
      'Developed a Doctor Appointment System facilitating patient account creation and appointment scheduling. Implemented doctor application with admin approval, utilizing React, Node.js, Express.js, MongoDB, and CSS, integrating security measures via cookies and JSON Web Tokens.',
    navigate: 'https://github.com/abhishekkumar013/Doctor-Appointment-System',
  },
  {
    id: 3,
    url: jobsek,
    title: 'Job Seeker Website',
    description:
      'Developed a job-seeker platform enabling applicants to register, browse job listings, and apply for positions, while employers can list job openings. Utilized React, Node.js, Express.js, MongoDB, and CSS, integrating security measures through cookies and JSON Web Tokens.',

    navigate: 'https://github.com/abhishekkumar013/Portfolio-website',
  },
]

const Project = () => {
  return (
    <div
      to="Project"
      className="h-auto w-full flex flex-wrap flex-col items-center text-center p-10"
    >
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
        <p className="text-white font-bold text-3xl md:text-4xl text-center">
          Top Recent Projects
        </p>
        <div className="w-36 md:w-40 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-3 mb-12"></div>
      </div>

      <div className="w-full md:w-[90%] flex flex-wrap justify-around">
        {projectdata.map((data) => (
          <div
            key={data.id}
            className="w-full  md:w-1/3 lg:w-1/4 m-8 p-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <a href={data.navigate} target="_blank" rel="noopener noreferrer">
              <div className="border rounded-md overflow-hidden">
                <img
                  className="w-full object-cover rounded-md cursor-pointer hover:scale-110"
                  src={data.url}
                  alt={data.title}
                />
                <div className="p-4 bg-white ">
                  <p className="text-basic md:text-xl font-bold">
                    {data.title}
                  </p>
                  <p className="text-sm text-slate-500 line-clamp-2 md:line-clamp-3 lg:line-clamp-5">
                    {data.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
