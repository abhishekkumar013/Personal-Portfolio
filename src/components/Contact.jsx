import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'
import style from '../assets/pexels-pixabay-207489.jpg'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_d80srgr',
        'template_q97qk7b',
        form.current,
        'MRvFnvaEVI0gZwp9v',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )

    form.current.reset()
  }

  return (
    <div
      to="Contact"
      className="h-auto w-full flex flex-wrap flex-col items-center text-center p-10"
    >
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
        <p className="text-white font-bold text-3xl md:text-4xl text-center">
          Contact Us
        </p>
        <div className="w-36 md:w-40 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-3 mb-12"></div>
      </div>
      <div>
        <div className="contact bg-gray-100 py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={style}
                  alt="contact"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center mb-6">
                  Contact With
                </h2>
                <div className="flex justify-center mb-4">
                  <BsLinkedin color="blue" size={30} className="mx-2" />
                  <BsGithub color="black" size={30} className="mx-2" />
                  <BsFacebook color="blue" size={30} className="mx-2" />
                  <BsInstagram color="red" size={30} className="mx-2" />
                </div>
                <div className="flex justify-center mb-4">
                  <div className="h-1 w-1/3 bg-gray-400"></div>
                  <span className="mx-2 font-bold">OR</span>
                  <div className="h-1 w-1/3 bg-gray-400"></div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    name="from_name"
                  />
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    name="from_email"
                  />
                  <textarea
                    placeholder="Write your message"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    rows="4"
                    name="message"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
