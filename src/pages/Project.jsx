import React from 'react'
// import EaseEvent from '../assets/EaseEvent.png'
// import Weatherapp from '../assets/weatherapp.png'
// import InternChallenge from '../assets/InternshipChallenge.png'
// import ReciLook from '../assets/ReciLook.png'
import {motion} from 'framer-motion'
import projects from "../data/project";

export default function  () {
  const move = (delay) => ({
    hidden: { x:-100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5
      }
    }
  })
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div className="flex flex-col items-center space-y-12">
          {projects.map((project, index) =>(
          <div
            key={project.id}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 w-full max-w-5xl"
          >
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    className="w-full max-w-[500px] h-[200px] object-cover rounded-lg shadow-lg"
                    alt={project.title}
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  className="w-full max-w-[500px] h-[200px] object-cover rounded-lg shadow-lg"
                  alt={project.title}
                />
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 text-center lg:text-left"
            >
              <h6 className="text-xl font-semibold mb-2">{project.title}</h6>
              <p className="bg-clip-text text-md mb-4">
              {project.description.split("\n").map((line, index) => (
                  <p key={index} className="mb-2">{line}</p>
                ))}
              </p>
            
              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium bg-white ring-2 ring-gray-800 text-blue-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>      
          ))}
        </div>
        {/* <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0}}
              initial= {{ opacity: 0, x: -100}}
              transition={{ duration: 1}}
            className="w-full lg:w-1/4">
            <img
              src={EaseEvent} style={{ width: '300px', height: '150px', objectFit: 'cover' }}  className="mb-6 rounded" alt="image-easevent" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0}}
              initial= {{ opacity: 0, x: 100}}
              transition={{ duration: 1}}
             className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">EaseEvent</h6>
            <p className="mb-4 text-neutral-400">I created a online venue booking and management system for my Final Year Project. It was created with the purpose of easy venue booking method and to overcome the effort of traditional booking process.</p>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Django</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Bootstrap</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Html</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JavaScript</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">MongoDB</span>
            </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial= {{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
             className="w-full lg:w-1/4">
            <img src={Weatherapp} style={{ width: '300px', height: '150px', objectFit: 'cover' }}  className="mb-6 rounded" alt="image-easevent" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0}}
              initial= {{ opacity: 0, x: 100}}
              transition={{ duration: 1}}
             className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Weather App</h6>
            <p className="mb-4 text-neutral-400">The weatherapp created shows the weather of different places with their whole description. It is also shows the background as per the weather status.</p>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Php</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Html</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JavaScript</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">CSS</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">MySQL</span>
            </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial= {{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
             className="w-full lg:w-1/4">
            <img src={InternChallenge} style={{ width: '300px', height: '150px', objectFit: 'cover' }}  className="mb-6 rounded" alt="image-intchallenge" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0}}
              initial= {{ opacity: 0, x: 100}}
              transition={{ duration: 1}}
             className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Challenge</h6>
            <p className="mb-4 text-neutral-400">I created this website as per the design provided by a company as a challenge. This was made through the full use of React JS and SCSS.</p>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">React</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Html</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JavaScript</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">CSS</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">SCSS</span>
            </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial= {{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
             className="w-full lg:w-1/4">
            <a href="https://reci-look.vercel.app/" target="_blank" rel="noreferrer">
            <img src={ReciLook} style={{ width: '300px', height: '150px', objectFit: 'cover' }}  className="mb-6 rounded" alt="image-recilook" />
            </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0}}
              initial= {{ opacity: 0, x: 100}}
              transition={{ duration: 1}}
             className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Personal Project</h6>
            <p className="mb-4 text-neutral-400">I created a Recipe finder webapp named ReciLook. It is used to find the recipes of various foods. This is a personal project developed in ReactJS with Tailwind CSS. </p>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">React</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Html</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JavaScript</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">CSS</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Tailwind CSS</span>
            </motion.div>
        </div> */}
    </div>
  )
}
