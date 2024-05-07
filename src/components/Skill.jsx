import React from 'react'

const Skill = () => {
  return (
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
        <p className="text-white font-bold text-3xl md:text-4xl text-center">
          Technologies Stack
        </p>
        <div className="w-36 md:w-40  h-1  border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-3 mb-12"></div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="bg-white w-1/4 mr-4">
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">FrontEnd Developer</div>
            <div className="flex flex-wrap justify-evenly">
              <div className="mb-2 flex float-left  flex-col">
                <div className="mb-2">
                  <p>Html</p>
                  <p>Intermidate</p>
                </div>
                <div className="mb-2">
                  <p>Html</p>
                  <p>Intermidate</p>
                </div>
                <div className="mb-2">
                  <p>Html</p>
                  <p>Intermidate</p>
                </div>
              </div>
              <div className="mb-2">
                <p>Helllo</p>
                <p>Helllo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white w-1/4 ml-4">
          <div className="px-4 py-4">
            <div className="font-bold text-xl mb-2">Backend Developer</div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
