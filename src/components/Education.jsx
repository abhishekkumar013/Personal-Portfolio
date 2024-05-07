import React from 'react'
import { Chrono } from 'react-chrono'

const Education = () => {
  const mappedEvents = [
    {
      id: 1,
      title: '2021-25',
      cardTitle: 'Bachelor of Technology (B.Tech)',
      cardSubtitle: 'kalinga institute of industrial technology ,(Bhubaneswar)',
      cardDetailedText:
        'I am currently pursuing my B.Tech in Computer Science, currently in the seventh semester, with a notable CGPA of 8.23.',

      media: {
        type: 'IMAGE',
        source: {
          url:
            'https://kiit.ac.in/wp-content/uploads/2023/04/KIIT-University-Bhubaneswar.jpeg',
        },
      },
    },
    {
      id: 2,
      title: '2020-21',
      cardTitle: '12th-Senior Secondary (CBSE Board)',
      cardSubtitle: 'MKD Public School, (Motihari)',
      cardDetailedText:
        'I completed my Senior Secondary education with a focus on Physics, Mathematics, and Chemistry, achieving a commendable score of 71%',
      media: {
        type: 'IMAGE',
        source: {
          url:
            'https://content3.jdmagicbox.com/comp/motihari/w4/9999p6252.6252.181127203935.k7w4/catalogue/mkd-public-school-motihari-schools-urazcnha4i.jpg',
        },
      },
    },
    {
      id: 3,
      title: '2018-19',
      cardTitle: '10th-Matriculation (CBSE Board)',
      cardSubtitle: 'ShantiNiketan Jubilee School, (Motihari)',
      cardDetailedText:
        'I successfully completed my Matriculation (10th grade) with an impressive achievement of securing 70% marks.',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://www.sjsmotihari.org/images/26.jpg',
        },
      },
    },
  ]

  // Map education details to Chrono items
  // const mappedEvents = educationDetails.map((detail) => ({
  //   title: detail.title,
  //   subtitle: detail.subtitle,
  //   date: `${detail.startDate} - ${detail.endDate}`,
  // }))

  return (
    <div
      to="Education"
      className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10"
    >
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
        <p className="text-white font-bold text-3xl md:text-4xl text-center">
          Education Details
        </p>
        <div className="w-36 md:w-40  h-1  border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-3 mb-12"></div>
      </div>
      <Chrono items={mappedEvents} mode="VERTICAL_ALTERNATING"></Chrono>
      <div></div>
    </div>
  )
}

export default Education
