import React from 'react'
import {
  BackendLeft,
  BackendRight,
  frontenddataLeft,
  frontenddataRight,
} from '../utils/TechstackList'

const TechStack = () => {
  return (
    <div
      id="Skill"
      className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10"
    >
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
        <p className="text-white font-bold text-3xl md:text-4xl text-center">
          Technologies Stack
        </p>
        <div className="w-36 md:w-40  h-1  border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-3 mb-12"></div>
      </div>

      <div className="md:w-full flex justify-center items-start flex-col md:flex-row">
        <div className="w-full  items-start  md:w-1/4 bg-white shadow-lg rounded-lg md:mr-8  overflow-hidden mb-6 ">
          <div className="px-4 py-4 ">
            <div className="font-bold text-xl mb-2 ">FrontEnd Developer</div>
            <div className="flex flex-col  md:flex-row">
              <div className="md:w-1/2 text-gray-700  text-base float-left">
                {frontenddataLeft.map((data) => (
                  <div key={data.id} className="m-3">
                    <div className="flex flex-row justify-start ml-12">
                      <p className="mr-1">&#10003;</p>
                      <p className="font-bold">{data.skill}</p>
                    </div>
                    <p className=" text-gray-400 text-xs">{data.level}</p>
                  </div>
                ))}
              </div>
              <div className="md:w-1/2 text-gray-700 text-base float-left">
                {frontenddataRight.map((data) => (
                  <div key={data.id} className="m-3">
                    <div className="flex flex-row justify-start ml-12">
                      <p className="mr-1">&#10003;</p>
                      <p className="font-bold">{data.skill}</p>
                    </div>
                    <p className=" text-gray-400 text-xs">{data.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4 bg-white shadow-lg rounded-lg md:ml-8  overflow-hidden mb-6">
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Backend Developer</div>
            <div className="flex flex-col  md:flex-row">
              <div className="md:w-1/2 text-gray-700 text-base float-left">
                {BackendLeft.map((data) => (
                  <div key={data.id} className="m-3">
                    <div className="flex flex-row justify-start ml-12">
                      <p className="mr-1">&#10003;</p>
                      <p className="font-bold">{data.skill}</p>
                    </div>
                    <p className=" text-gray-400 text-xs">{data.level}</p>
                  </div>
                ))}
              </div>
              <div className="md:w-1/2 text-gray-700 text-base float-left">
                {BackendRight.map((data) => (
                  <div key={data.id} className="m-3">
                    <div className="flex flex-row justify-start ml-12">
                      <p className="mr-1">&#10003;</p>
                      <p className="font-bold">{data.skill}</p>
                    </div>
                    <p className=" text-gray-400 text-xs">{data.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
